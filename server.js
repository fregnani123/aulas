
const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes');
const exp = require('constants');


const PORT = 3000;

app.use(express.urlencoded({extended: true}));

app.use(express.static(path.resolve('index', __dirname, 'teste')))



app.set('views', path.resolve(__dirname, 'views' ));

app.set('view engine', 'ejs');

app.use(routes);


app.listen(PORT, () => {
 console.log('Servidor rodando na porta ' + PORT)
})













// const fs = require('fs').promises;
// const path = require('path');
// const  caminhoArquivo =  path.resolve(__dirname,'.', 'teste.txt');

// fs.writeFile(caminhoArquivo, 'Frase 1 ', {flag: 'w'} );


// let n = [5,6,8,7,4,52,61,40,]

// for(numeros of n){
//  if(numeros % 2 === 0){
//     console.log('par')
//     }else{console.log('impar')}
//  }