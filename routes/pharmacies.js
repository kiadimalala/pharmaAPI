const express = require('express')

const {getPharmacies} = require('../controllers/pharmacies')
const router = express.Router()
router.route('/').get(getPharmacies)


module.exports = router