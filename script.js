
const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');


const PORT = 3000;

app.use(express.urlencoded({extended: true}))


app.get('/testes/:idUsuarios?/:parametro?', (req,res)=>{ 
    console.log(req.params)
    res.send(req.params);
});


app.post('/',(req,res) => {
   res.send(`isso voce enviou: ${req.body.nome}`)  
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