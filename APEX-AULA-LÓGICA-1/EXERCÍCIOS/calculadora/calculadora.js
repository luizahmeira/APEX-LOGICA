alert = ("calculadora")
let numero1 = parseFloat(prompt("informe o número"))

let numero2 = parseFloat(prompt("informe o número"))

let OM = (prompt("informe a operação"))
if (OM =="+") {
    document.write(numero1 + numero2)
}
    else if (OM =="-") {
        document.write(numero1 - numero2)
    }
        else if (OM =="/") {
            document.write(numero1/numero2)
        }
            else if (OM =="*") {
                document.write(numero1*numero2)
            }
