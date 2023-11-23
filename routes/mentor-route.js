const express = require('express')
const { getMentor, getMentorByNumber } = require('../controllers/mentor-controller')
const routes = express.Router()

routes.get('/', getMentor)
routes.get('/limit:number', getMentorByNumber)


module.exports = routes