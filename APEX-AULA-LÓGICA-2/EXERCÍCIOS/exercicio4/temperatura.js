var temperaturas = []
var Qtemperatura = parseFloat(prompt("quantas temperaturas?"))

for(i = 1; i <= Qtemperatura; i++) {
    temperaturas.push(parseFloat(prompt("temperaturas")))
    
} document.write(temperaturas[i] > temperaturas)