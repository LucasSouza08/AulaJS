function calcular()
{
    let temp_fah, temp_cel ;


    temp_fah=document.getElementById("temp_fah").value;

   temp_cel = (Number(temp_fah) - 32) * 5 / 9;

    document.getElementById("temp_cel").innerHTML =
    "<p> A temperatura digitada é igual a " + temp_cel + " Graus Celcius " + "</p>";
}