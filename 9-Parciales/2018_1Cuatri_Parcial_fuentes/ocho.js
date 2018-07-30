function mostrar()
{
    var num;
    var confirmacion;
    var numValido = false;
    var seguir = true;
    var letra;
    var cantPar = 0;
    var cantImpar = 0;
    var cantCero = 0;
    var sumaPos;
    var cantPos;
    var promedioPos;
    var sumNegativos;
    var numMax;
    var numMin;
    var letraMax;
    var letraMin;
    var esPar;
    var cont;

    while (seguir == true) {
        do {
            num = prompt("Ingrese numero: ");
            num = parseInt(num);
            if (num >= -100 && num <= 100) {          
                numValido = true;
            }
        } while (numValido == false);

        letra = prompt("Ingrese letra: ");


        if ((num % 2) == 0) {
            cantPar++;
        }
        if ((num % 3) == 0) {
            cantImpar++;
        }
        if (num == 0) {
            cantCero++;           
        }
        if (num > 0) {
            sumaPos = sumaPos + num;
            cantPos++;
        }
        if (num < 0) {
            sumNegativos = sumNegativos - num;
        }

        if (cont == 0) {
            letraMax = letra;
            letraMin = letra;
            numMax = num;
            numMin = num;
        }
        else {
            if (num > numMax) {
                numMax = num
                letraMax = letra;
            }
            if (num < numMin) {
                numMin = num;
                letraMin = letra;         
            }
        }


        confirmacion = prompt("Desea seguir ingresando datos? (si/no)");
        confirmacion = confirmacion.toLowerCase();
        if (confirmacion == "no" ) {
            seguir = false;
            break;
        }
    }
    promedioPos = (sumaPos / cantPos);
    alert("Cantidad numeros pares: " + cantPar);
    alert("Cantidad numeros impares: " + cantImpar);
    alert("Cantidad de ceros: " + cantCero);
    alert("Promedio de numeros positivos: " + promedioPos);
    alert("Suma de numeros negativos: " + sumNegativos);
    alert("Letra y numero maximo: " + letraMax + " y " + numMax);
    alert("Letra y numero minimo: " + letraMin + " y " + numMin);



}
