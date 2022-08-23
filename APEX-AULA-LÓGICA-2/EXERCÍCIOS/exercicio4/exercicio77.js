let impares = 0
let pares = 0

for(let i = 1; i <= 10; i++) {
    let numero = parseFloat(prompt("numero"))
if (numero % 2 == 0) {
    pares++

} else {
    impares++
}
}
document.write("pares: \n", pares)
document.write("impares: \n", impares)