/*
Crear una función que me diga si un número es capicúa o no (Nota:
un número capicúa es aquel que se lee igual de izquierda a derecha,
como de derecha a izquierda)
Ejemplo( 112211, 565, 1234554321), la entrada es tipo numérico.
*/

function capicua(num)
{
    num = num.toString();
    var numTexto = num;
    num = num.split("").reverse().join("");
    if(numTexto == num)
    {
        return numTexto + " es capicua";
    }
    else
    {
        return numTexto + " no es capicua";    
    }
}