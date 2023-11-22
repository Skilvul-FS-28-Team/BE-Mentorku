const express = require('express')
const routes = express.Router()
const userRoute = require('./user-route')
const mentorRoute = require('./mentor-route')

routes.get('/', (req, res) => {
    res.json({message: 'Welcome to Mentorku'})
})

routes.use('/user', userRoute)
routes.use('/mentor', mentorRoute)

module.exports = routes