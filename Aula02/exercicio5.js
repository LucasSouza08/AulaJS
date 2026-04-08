function calcular()
{
    let lado, area;

    //entrada

    lado = Number(document.getElementById("lado").value);
    
    //processamento

    area = (lado * lado)

    //saida

    document.getElementById("area").innerHTML = 
    "<p> O valor da área é: " +  area + "</p>"
}
