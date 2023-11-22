const express = require('express')
const routes = express.Router()
const userRoute = require('./user-route')

routes.get('/', (req, res) => {
    res.json({message: 'Welcome to Mentorku'})
})

routes.use('/user', userRoute)

module.exports = routes