

for(let i = 0; i < 10 ; ++i){
    console.log(i)
}
let n = ('063.912.989-71')

let novoN= n.replace(/\D+/g,'');
let novoCPFSemDigito = novoN.slice(2)
let multCPF = novoCPFSemDigito.length + 1


console.log(novoN)
console.log( multCPF)