const express = require('express');

const routes = express.Router();

const userController = require('./controller/userController');

routes.get('/', userController.store );
routes.get('/users', userController.index );

module.exports = routes;