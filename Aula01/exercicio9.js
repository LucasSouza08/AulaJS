var principal;
var taxa;
var tempo;
var montante;

principal = prompt("Digite o valor inicial:");
taxa = prompt("Digite a taxa de juros:");
tempo = prompt("Digite o tempo em anos:");

montante = principal * (1 + (taxa * tempo));

alert("Montante final: " + montante);