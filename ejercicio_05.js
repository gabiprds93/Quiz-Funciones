/*
Escriba una función que dado un arreglo A de string me dé como resultado el tamaño más largo de todas las palabras.
Entrada : A=[“gato”,”Perro”,”Cocodrilo”,”leon”];
Resultado: 9
*/

function largo(arreglo)
{
    var mayor = 0;
    for(var i in arreglo)
    {
        if(arreglo[i].length > mayor)
            mayor = arreglo[i].length;
    }
    return mayor;
}