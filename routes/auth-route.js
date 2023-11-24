const express = require('express')
const routes = express.Router()

const { register, login } = require('../controllers/auth-controller');


routes.post('/regist', register);
routes.post('/login', login);




module.exports = routes