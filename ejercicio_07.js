/*
Escriba una función que calcule la sumatoria de todos los números impares comprendidos entre los números N y M
Entrada: N=1; M=7
Salida: 16
*/

function sumaImpares(num1, num2)
{
    var suma = 0;
    for(var i = num1; i <= num2; i++)
    {
        if(i % 2 == 1)
        {
            suma += i;
        }
    }
    return suma;
}