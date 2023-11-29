const express = require('express')
const { getMentor, getMentorByNumber, getMentorById } = require('../controllers/mentor-controller')
const routes = express.Router()

routes.get('/', getMentor)
routes.get('/:mentorId', getMentorById)



module.exports = routes