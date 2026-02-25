document.write("<h1>EXERCÍCIO 1</h1>")

document.write("<h2>Entrada de Dados</h2>");

var numero = prompt("Digite um número qualquer:");

document.write("Número digitado = " + numero + "<br>");

document.write("<h2>Resultados</h2>");

var quadrado = Number(numero) * Number(numero);
var cubo = Number(numero) * Number(numero) * Number(numero);

document.write("O quadrado do número é: " + quadrado + "<br>");
document.write("O cubo do número é: " + cubo + "<br>");