let n1 = parseInt(prompt("informe o primeiro número"))
let n2 = parseInt(prompt("informe o segundo número"))
let n3 = parseInt(prompt("informe o terceiro número"))

if(n1 > n2 && n1 > n3 && n2 > n3) {
    document.write(n3 ,  n2 , n1) 
}

else if(n1 > n2 && n1 > n3 && n2 < n3) {
    document.write(n2 , n3 , n1)
}

else if(n2 > n1 && n2 > n3 && n1 > n3) { 
    document.write(n3 , n1 , n2)
}
else if(n2 > n1 && n2 > n3 && n1 < n3) {
    document.write(n1 , n3 , n2)
}

else if(n3 > n1 && n3 > n2 && n1 > n2) {
    document.write(n2 , n1 , n3)
}
else if(n3 > n1 && n3 > n2 && n1 < n2) {
    document.write(n1 , n2 , n3)
}