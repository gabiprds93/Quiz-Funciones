/*
Escriba una función que dado un numero N. Generar la siguiente figura:
Entrada: N = 4
Salida: ____/''''\___/'''\__/'''\_/'\
*/

function figura(num)
{
    var figura = "";
    for(var i = 0; i < num; i++)
    {
        for(var j = 0; j < num - i; j++)
        {
            figura += "_"
        }
        figura += "/"
        for(var j = 0; j < num - i; j++)
        {
            figura += "'"
        }
        figura += "\\";
    }
    return figura;
}