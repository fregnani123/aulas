const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController')

// Rotas da home
route.get('/', homeController.paginaInicial);

route.post('/', homeController.postAcionado);

route.get('/teste/:Idusuario', homeController.parametros);

module.exports = route;