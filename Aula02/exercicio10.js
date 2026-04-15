function calcular()
{
    let valor,horas,resultado;

    //entrada

    valor = Number(document.getElementById("valor").value);
    horas = Number(document.getElementById("horas").value);
    
    
    //processamento

    resultado = valor * horas * 30 ;

    //saida

    document.getElementById("resultado").innerHTML = 
    "<p> O valor do salário final é : " +  resultado + "</p>"
}