/*
Escriba una función que dado un arreglo A de string me calcule cuántas vocales hay en todo el arreglo.
Entrada : A=[“ojo”,”mouse”,”lapiz”];
Salida: 7
*/

function cantVocales(arreglo)
{
    var vocales = ["a", "e", "i", "o", "u", "á", "é", "í", "ó", "ú"]
    var cont = 0;
    for(var i in arreglo)
    {
        for(var j in arreglo[i])
        {
            for(var k in vocales)
            {
                if(arreglo[i][j].toLowerCase() == vocales[k])
                {
                    cont++;
                }
            }
        }
    }
    return cont;
}