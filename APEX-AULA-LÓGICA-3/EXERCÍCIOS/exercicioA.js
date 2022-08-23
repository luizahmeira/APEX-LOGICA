let numero1 = parseFloat(prompt('digite um numero'))
let numero2 = parseFloat(prompt('digite um numero'))

function calculadora(n1, n2, operação) {
    if(operação == "+") {
        document.write("A SOMA É:" + (n1 + n2) + "<br>")
    } else if(operação == "-") {
        document.write("A SUBTRAÇÃO É:" + (n1 - n2) + "<br>")
    } else if(operação == "/") {
        document.write("A DIVISÃO É:" + (n1 / n2) + "<br>")
    } else if(operação == "*") {
        document.write("A MULTIPLICAÇÃO É:" + (n1 * n2) + "<br>")
    }
    } 

    calculadora(numero1, numero2,"+")
    calculadora(numero1, numero2,"-")
    calculadora(numero1, numero2,"/")
    calculadora(numero1, numero2,"*")

