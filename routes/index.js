const express = require('express')
const routes = express.Router()
const userRoute = require('./user-route')
const mentorRoute = require('./mentor-route')
const mentoringTimeRoute = require('./mentoring-time-route')

routes.get('/', (req, res) => {
    res.json({message: 'Welcome to Mentorku'})
})

routes.use('/user', userRoute)
routes.use('/mentor', mentorRoute)
routes.use('/mentoringtime', mentoringTimeRoute)

module.exports = routes