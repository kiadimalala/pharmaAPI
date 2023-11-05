const express = require("express");

//Route files
const pharmacies = require('./routes/pharmacies')

const app = express()
const PORT = 5000

//init express
app.use(express.json())

//Mount route
app.use('/api/v1/pharmacies',pharmacies)

app.listen(PORT, ()=>console.log(`Server running on port ${PORT}`))