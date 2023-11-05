# API Name: Madagascar Night Pharmacies
Madagascar Night Pharmacies

# Description
The Madagascar Night Pharmacies API is a web service that offers a list of pharmacies open outside regular business hours in Madagascar.

# Endpoints:
### 1. GET /api/v1/pharmacies
This endpoint allows users to access a comprehensive list of pharmacies open during non-standard hours in Madagascar.
Users can specify their location or city to filter the results for nearby pharmacies.
The API retrieves this information from a regularly updated database, ensuring the accuracy of the listings.
Each pharmacy entry includes the following information:
- name: The name of the pharmacy.
- location:
  - city: The city where the pharmacy is situated.
  - address: The physical address of the pharmacy.
- phones: Contact numbers for the pharmacy.
