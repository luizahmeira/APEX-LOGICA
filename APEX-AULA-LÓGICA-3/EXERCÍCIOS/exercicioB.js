let continuar = true
let listaNotas = []
let somaNotas = 0

//adicionar notas na lista
while(continuar == true) {
    let nota = parseFloat(prompt("digite uma nota"))
    listaNotas.push(nota)
    continuar = confirm("clique em OK para continuar adicionando notas")
}


//calcular media
function calcularMedia() {
for(let i = 0; i <listaNotas.length; i++) {
    somaNotas += listaNotas[i] }

   return somaNotas / listaNotas.length}

   document.write("A SOMA DAS NOTAS É: " + calcularMedia)
    