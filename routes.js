const express = require('express');
const route = express.Router();

route.get('/', (req,res) => {
    res.send(`<form method="POST"> Nome do cliente: <input type="text" name="nome"><button>Olá Mundo</button></form>`);
 });