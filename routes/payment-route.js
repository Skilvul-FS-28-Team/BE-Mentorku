const express = require('express')
const { getAllPayment } = require('../controllers/payment-controller')
const routes = express.Router()

routes.get('/', getAllPayment)


module.exports = routes