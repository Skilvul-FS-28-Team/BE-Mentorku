const express = require('express')
const { getAllPayment, booking, pay } = require('../controllers/payment-controller')
const verifyToken = require('../middleware/auth')
const routes = express.Router()

routes.get('/', getAllPayment)
routes.post('/booking',verifyToken, booking)
routes.post('/pay/:paymentId',verifyToken, pay)


module.exports = routes