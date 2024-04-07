//2)
let numerFib = 35, total = 0, auxAnterior = 0, auxAtual = 1;
while(total < numerFib){
    total = auxAnterior + auxAtual;
    auxAnterior = auxAtual;
    auxAtual = total;
}
console.log(total == numerFib?`O numero ${numerFib} faz parte da sequencia Fibonnaci.`: `O numero ${numerFib} não faz parte da sequencia fibonacci.`);

//5)
let stringOriginal = "Uma string qualquer", stringInversa ='';
for(let i = stringOriginal.length - 1; i >= 0; i--){
    stringInversa = stringInversa.concat(stringOriginal[i])
}
console.log(stringInversa)
