/*
Escriba una función que dado un arreglo de string devuelva la palabra mas larga
Entrada A=[“jirafa”,”leon”,”gato”,”murcielago”,”rata”]
Salida “murcielago”
*/

function palabraLarga(arreglo)
{
    var mayor = 0;
    var palabra = "";
    for(var i in arreglo)
    {
        if(arreglo[i].length > mayor)
        {
            mayor = arreglo[i].length;
            palabra = arreglo[i];
        }
    }
    return palabra;
}