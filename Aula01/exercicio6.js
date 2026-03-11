var quantidade;
var preco;
var subtotal;
var desconto;
var total;

quantidade = prompt("Digite a quantidade do produto:");
preco = prompt("Digite o preço do produto:");

subtotal = quantidade * preco;
desconto = subtotal * 0.10;
total = subtotal - desconto;

alert("Subtotal: " + subtotal);
alert("Desconto: " + desconto);
alert("Total a pagar: " + total);