let pares = 0, impares = 0, positivos = 0, negativos = 0;

for(let i = 0; i < 5; i++){
    let numero = parseInt(gets());

    if(numero % 2 == 0 || numero == 0){
        pares++;
    } else {
        impares++;
    }
    
    if (numero < 0) {
        negativos++;
    } else if (numero > 0) {
        positivos++;
    }
}

console.log(pares + " valor(es) par(es)")
console.log(impares + " valor(es) impar(es)")
console.log(positivos + " valor(es) positivo(s)")
console.log(negativos + " valor(es) negativo(s)")