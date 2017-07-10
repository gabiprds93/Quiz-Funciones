/*
Crear una función que dado un arreglo de String A me permita contar cuantas veces se repite un caracter C en dicho arreglo.
Entrada: A=[“murcielago”, “pato”,”caballo”, “zebra”]; C=”a”;
Salida: 5;
*/

function cantidadCaracter(arreglo, caracter)
{
    var cont = 0;
    for(var i in arreglo)
    {
        for(var j in arreglo[i])
        {
            if(arreglo[i][j] == caracter)
            {
                cont++;
            }             
        }
    }   
    return cont;
}