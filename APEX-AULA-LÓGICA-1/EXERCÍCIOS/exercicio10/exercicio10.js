let sexo1 = prompt("escolha o sexo")

let altura = parseFloat(prompt("informe sua altura"))

let idealF = parseFloat(62.1 * altura) - 44.7
let idealM = parseFloat(72.7 * altura) - 58

if(sexo1 == "F") {
    document.write(idealF.toFixed(2))
}
 else if(sexo1 == "M") { 
    document.write(idealM.toFixed(2))
 }