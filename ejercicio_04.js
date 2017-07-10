/*
Escriba una función que cuente cuántas palabras hay una cadena de texto
Entrada : A=”El mundo es tan cruel”;
Salida : 5
*/

function cantidadPalabras(cadena)
{
    cadena = cadena.split(" ");
    return cadena.length;
}