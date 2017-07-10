/*
Escriba una función que dado una de cadena de texto S me devuelva el reverso de la cadena de texto.
Entrada: S=”roma”
Salida: “amor”
*/

function reverso(cadena)
{
    return cadena.split("").reverse().join("");
}