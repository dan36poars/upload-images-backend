const express = require('express');
const routes = express.Router();

const multer = require('multer');
const mulerConfig = require('./config/multerConfig');
const upload = multer(mulerConfig);

const uploadController = require('./controller/uploadController');

routes.post('/upload', upload.single('photo') , uploadController.store);


module.exports = routes;