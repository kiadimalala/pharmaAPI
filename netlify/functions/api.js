const express = require("express");
const serverless = require('serverless-http');
//Route files
const pharmacies = require('./routes/pharmacies')

const app = express()


//init express
app.use(express.json())

//Mount route
app.use('.netlify/functions/api',pharmacies)

module.exports.handler = serverless(app);