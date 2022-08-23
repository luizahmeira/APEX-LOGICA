let continuar = true
let listaIdades = []
let maiorIdade = 0
let menoresIdade = 0

while(continuar == true) {
    let idade = parseFloat(prompt("digite sua idade"))
    listaIdades.push(idade)
    continuar = confirm("clique em OK para continuar adicionando idades")
}
//davi falou algo sobre guilherme

function verificaIdade(idade) {
    if (idade < 18) {
        menoresIdade++
    } else {
        maiorIdade++
    }
}
for(let i = 0; i < listaIdades.length; i++) {
    verificaIdade(listaIdades[i])

}
document.write("MENORES: " + menoresIdade + " MAIORES: " + maiorIdade )



    