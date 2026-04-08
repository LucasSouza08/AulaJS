function calcular()
{
    let valor, quantidade, subtotal, desconto, resultado;

    //entrada

    valor = Number(document.getElementById("valor").value);
    quantidade = Number(document.getElementById("quantidade").value);
    subtotal = Number(document.getElementById("subtotal").value);
    desconto = Number(document.getElementById("desconto").value);
    resultado = Number(document.getElementById("resultado").value);

    
    //processamento

    subtotal = quantidade * valor
    desconto = subtotal * 0.1
    resultado = subtotal - desconto

    //saida

    document.getElementById("resultado").innerHTML = 
    "<p> O valor do produto é : " +  resultado + "</p>"
}