
let numero;
do {
    numero = parseFloat(prompt("informe o numero válido"));

if (numero < 0 || numero > 10) {
    alert("valor inválido")
} else {
    break
}

} while (true);
alert("nota: " + numero)
    
 