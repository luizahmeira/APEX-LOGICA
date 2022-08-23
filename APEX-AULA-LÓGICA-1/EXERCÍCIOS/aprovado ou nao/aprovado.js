let notas1 = parseFloat(prompt("informe sua nota 1"))

let notas2 = parseFloat(prompt("informe sua nota 2"))

let notas3 = parseFloat(prompt("informe sua nota 3"))

let media = (notas1 + notas2 + notas3)/3

let faltas = parseInt(prompt("informe a quantidade de faltas"))

if (faltas < 50 && media >= 7) {
    document.write("aprovado")
}
else{
    document.write("reprovado")
}
