function Mostrar()
{

	var contador=0;
	var numero;
	var cantidaDeNegativos = 0;
	var cantPos = 0;
	var cantCeros = 0;
	var CantPar = 0;
	var sumaNeg = 0; 
	var sumaPos = 0;
	var promPos = 0;
	var promNeg = 0;
	var diferencia;
	var esPar;

	//declarar contadores y variables
	/*numero = prompt("Ingrese un numeroero: ");
	numero = parseInt(numero);*/
 
	
	var respuesta="s";

	while(respuesta!="n")
	{
		numero = prompt("Ingrese un numero: ");
		numero = parseInt(numero);
		if (numero > 0 ) {
			sumaPos= sumaPos + numero;
			cantPos++;
		}
		if (numero < 0) {
			sumaNeg= sumaNeg + numero;
			cantidaDeNegativos++;
		}
		if (numero == 0) {
			cantCeros++;
		}

		esPar= numero % 2;
		if ( (numero %2) == 0){
			CantPar++;
		}

		diferencia = sumaPos - sumaNeg;;

		promPos = sumaPos / cantPos;
		promNeg = sumaNeg / cantidaDeNegativos;

		respuesta = prompt("Desea ingresar mas numeroeros: (s/n)")

	
	}

	/*alert("Suma de negativos: "+sumaNeg);
	alert("Suma de positivos: "+sumaPos);
	alert("Cantidad de negativos: "+cantidaDeNegativos);
	alert("Cantidad de positivos: "+cantPos);
	alert("Cantidad de ceros: "+cantCeros);
	alert("Cantidad de pares: "+CantPar);
	alert("Promedio de positivos: "+promPos);
	alert("Promedio de negativos: "+promNeg);
	alert("Diferencia entre positivos y negativos: "+diferencia);
	*/
	document.write('<p>Suma de positivos: '+sumaPos+'</p>');
	document.write('<p>Suma de negativos: '+sumaNeg+'</p>');
	document.write('<p>Cantidad de negativos: '+cantidaDeNegativos+'</p>');
	document.write('<p>Cantidad de positivos: '+cantPos+'</p>');
	document.write('<p>Cantidad de ceros: '+cantCeros+'</p>');
	document.write('<p>Cantidad de pares: '+CantPar+'</p>');
	document.write('<p>Promedio de positivos: '+promPos+'</p>');
	document.write('<p>Promedio de negativos: '+promNeg+'</p>');
	document.write('<p>Diferencia entre positivos y negativos: '+diferencia+'</p>');


}//FIN DE LA FUNCIÓN