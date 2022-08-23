alert("informe suas notas");

let nome = prompt("qual o seu nome?")

let notas1 = parseFloat(prompt("informe sua nota 1"))

let notas2 = parseFloat(prompt("informe sua nota 2"))

let notas3 = parseFloat(prompt("informe sua nota 3"))

let media = (notas1 + notas2 + notas3)/3

if(media > 7) {
    document.write("você foi aprovado com média" + media)
}else if(media==7){  
    document.write("você foi aprovado com media 7")
} else{
    document.write("reprovado") 
}







