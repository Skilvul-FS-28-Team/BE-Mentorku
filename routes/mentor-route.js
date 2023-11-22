const express = require('express')
const routes = express.Router()

routes.get('/', (req,res)=>{
    res.json({message: 'Welcome to Mentor'})
})


module.exports = routes