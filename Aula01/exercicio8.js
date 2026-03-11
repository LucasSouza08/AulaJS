var peso;
var altura;
var imc;

peso = prompt("Digite o peso em kg:");
altura = prompt("Digite a altura em metros:");

imc = peso / (altura * altura);

alert("Seu IMC é: " + imc);