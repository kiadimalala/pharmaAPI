const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const xss = require("xss-clean");
const hpp = require("hpp");

//Route files
const pharmacies = require('./routes/pharmacies')

const app = express()

//cors otions
const corsOptions = {
    origin: "http://localhost:3000",
    optionSuccessStatus: 200,
    credentials: true,
  };

//Body parser

app.use(express.json());

//enbale cors
app.use(cors());






const PORT = 5000

//init express
app.use(express.json())

//Mount route
app.use('/api/v1/pharmacies',pharmacies)


//set security headers
app.use(helmet());

//prevent xss attack
app.use(xss());

//prevent http param pollution
app.use(hpp());

app.listen(PORT, ()=>console.log(`Server running on port ${PORT}`))