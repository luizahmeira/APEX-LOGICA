var lula = 0
var bozo = 0
var ciro = 0
var eleitor = parseFloat(prompt("quantos eleitores existem?"))
var votos = 0


for (var i = 1; i <= eleitor; i++) {
    votos = prompt("qual é o seu voto? lula, bozo ou ciro")
    if (votos == "lula") {
        lula++
    } else if (votos == "bozo") {
        bozo++
    } else if (votos == "ciro"){
        ciro++
    }
}


document.write("lula: \n", lula)
document.write("bozo: \n", bozo)
document.write("ciro: \n", ciro)


