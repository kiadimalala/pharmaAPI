const puppeteer = require("puppeteer");

//@desc     Get all pharmacies
//@route    GET /api/v1/pharmacies
//@access   Public

exports.getPharmacies = async (req, res, next) => {
  
  const browser = await puppeteer.launch({ headless: "new" });

  console.log("browser launched");
  const page = await browser.newPage();
  console.log("page load");
  //Navigate the page to a URL
  await page.goto("https://www.opham.com/urgence/pharmacie");

  await page.waitForSelector(".pharmacie-table");
  console.log("table present");

  const body = await page.evaluate(() =>
    Array.from(document.querySelectorAll("tbody tr"), (e) => {
      const formatPhoneNumbers = (input) => {
        // Use a regular expression to match phone numbers
        const regex = /(\d{3})\D*(\d{2})\D*(\d{3})\D*(\d{2})/g;
        const matchedNumbers = input.match(regex);

        if (!matchedNumbers) {
          return [];
        }

        // Format matched phone numbers with spaces
        const formattedNumbers = matchedNumbers.map((number) =>
          number.replace(regex, "$1 $2 $3 $4")
        );

        return formattedNumbers;
      };
      const pharma = {};
      const tdElements = e.querySelectorAll("td");
      pharma.name = tdElements[0].querySelector("b").textContent.trim();
      pharma.date = tdElements[0].textContent.replace(pharma.name, "").trim();

      const locationParts = tdElements[1].textContent.trim().split(' - ');

      pharma.location = {
        city: locationParts[0],
        address: locationParts[1],
      };
      
      pharma.phone = tdElements[2].textContent
        .split("\n")
        .map((line) => line.trim())
        .filter((line) => line.length > 0)
        .join("");

      pharma.phone = formatPhoneNumbers(pharma.phone);
      return pharma
    })
  );

  await browser.close();
  console.log("browser closed")
  if(body.length>0){
    res.status(200).json({
      success: true,
      data: body,
    });
  }
};
