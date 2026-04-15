function calcular()
{
    let peso,altura, resultado;

    //entrada

    peso = Number(document.getElementById("peso").value);
   altura = Number(document.getElementById("altura").value);
    
    //processamento

    resultado = peso / (altura * altura);

    //saida

    document.getElementById("resultado").innerHTML = 
    "<p> O valor do IMC é : " +  resultado + "</p>"
}