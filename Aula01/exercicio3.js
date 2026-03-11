var valor;
var taxa;
var tempo;
var parcela;

valor = prompt("Digite o valor da prestação:");
taxa = prompt("Digite a taxa de juros:");
tempo = prompt("Digite o tempo de atraso:");

parcela = valor + (valor * (taxa * taxa / 100) * tempo);

alert("Valor da parcela: " + parcela);