let continuar = true
let listaNotas = []

//adicionar notas na lista
while(continuar == true) {
    let nota = parseFloat(prompt("digite uma nota"))
    listaNotas.push(nota)
    continuar = confirm("clique em OK para continuar adicionando notas")
}
//calcular media
let somaNotas = 0 //criando a variavel q vai caber a SOMA DAS NOTAS INFORMADAS
for(let i = 0; i <listaNotas.length; i++) //dizendo quantas vezes o comando vai rodar
 {
    somaNotas += listaNotas[i] //adiçao das notas da lista a cada vez q roda o for
}
document.write("a média é: " + (somaNotas / listaNotas.length).toFixed(2))