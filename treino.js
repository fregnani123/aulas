


let n = ('063.912.989-71')

let novoN= n.replace(/\D+/g,'');
let novoCPFSemDigito = novoN.slice(0,-2)
let reverso = novoCPFSemDigito.length + 1
total = 0 
for(let stringNumerica of novoCPFSemDigito){
   
total += reverso * Number(stringNumerica)
   reverso--
   
}
let digito = 11 - (total % 11);
console.log(digito)
