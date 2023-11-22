const express = require('express')
const { getAllUser, addUser } = require('../controllers/user-controller')
const routes = express.Router()

routes.get('/', getAllUser)
routes.post('/', addUser)


module.exports = routes