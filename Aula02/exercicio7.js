function calcular()
{
    let nota1,nota2,nota3, resultado;

    //entrada

    nota1 = Number(document.getElementById("nota1").value);
    nota2 = Number(document.getElementById("nota2").value);
    nota3 = Number(document.getElementById("nota3").value);
    
    //processamento

    resultado = (nota1 + nota2 + nota3) / 3;

    //saida

    document.getElementById("resultado").innerHTML = 
    "<p> O valor da média é : " +  resultado + "</p>"
}