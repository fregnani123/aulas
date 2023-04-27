
const args = process.argv.slice(2)

const a = Number(args[0]);
const b = Number(args[1]);

const soma = a + b 
console.log(soma)








// let n = ('063.912.989-71')

// let novoN= n.replace(/\D+/g,'');
// let novoCPFSemDigito = novoN.slice(0,-2)


// function geraDigito(novoCPFSemDigito){
// let reverso = novoCPFSemDigito.length + 1
// total = 0 
// for(let stringNumerica of novoCPFSemDigito){
   
// total += reverso * Number(stringNumerica)
//    reverso--
   
// }
// let digito = 11 - (total % 11);
// return digito <= 9 ? String(digito) : "0";
// }

// let digito1 = geraDigito(novoCPFSemDigito)
// let digito2 = geraDigito(novoCPFSemDigito + digito1)

// console.log(`${novoCPFSemDigito}${digito1}${digito2}`)