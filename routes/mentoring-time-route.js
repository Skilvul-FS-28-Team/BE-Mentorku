const express = require('express')
const { getAllMentoringTime } = require('../controllers/mentoring-time-controller')
const routes = express.Router()

routes.get('/', getAllMentoringTime)


module.exports = routes