function calcular()
{
    let altura, base, area;

    //entrada

    altura = Number(document.getElementById("altura").value);
    base = Number(document.getElementById("base").value);
    
    //processamento

    area = (base * altura) / 2

    //saida

    document.getElementById("area").innerHTML = 
    "<p> O valor da área é: " +  area + "</p>"
}
