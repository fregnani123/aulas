
const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');


const PORT = 3000;



app.get('/', (req,res) => {
   res.send('<form action="POST"> Nome do cliente: <input type="text" name="nome"><button>Olá Mundo</button></form>');
});

app.post('/',(req,res) => {
    res.send('Recebi o formulario')
})

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