
/*
 animal= pepe, jorge, mica, lorco
 peso =  500,	45	,	178,	365
 temp=	 -20,	-5	,	25,		16
 cant temp par = -20, 16 = 2
 animal mas pesado = pepe temp mas pesado = -20
cant animal viv bajo cero 0= 2;
promedio de peso = 272;(1080/2)
peso maximo bajo cero: 500
peso minimo bajo cero: 45
*/
function mostrar()
{
	var animal;
	var peso;
	var pesoMasAlto;
	var temperatura;
	var respuesta;
	var cantTemperaturaPar;
	cantTemperaturaPar=0;
	var nombreAnimalMasPesado;
	var temperaturaAnimalMasPesado;
	var cantAnimalesBajoCero;
	cantAnimalesBajoCero=0;
	var promedioPeso;
	var pesoMaximoBajoCero;
	var pesoMinimoBajoCero;
	var cont;
	var acumuladorPeso;
	acumuladorPeso= 0;
	cont= 0;
	respuesta = "s";
	var flag;
	var flagBajoCero;
	flagBajoCero = 1;
	flag = 1;

	do{
		// INGRESO DE DATOS
		nombre = prompt("Ingrese nombre del animal: ");
		do{ // SE REPITE EL PEDIDO SI NO ESTA DENTRO DEL PESO ACLARADO
			peso = prompt("Ingrese peso: ");
			peso = parseInt(peso);
		}while(peso < 1 || peso > 1000)

		do{ // SE REPITE EL PEDIDO SI NO ESTA DENTRO DEL RANGO DE TEMP DESEADAS
			temperatura = prompt("Ingrese temperatura: ");
			temperatura = parseInt(temperatura);
		}while (temperatura < -30 || temperatura > 30)
		// ACUMULADOR PESO
		acumuladorPeso= acumuladorPeso+ peso;
		//INICIALIZAR MAX Y MIN
		if (flag == 1) 
		{
			nombreAnimalMasPesado= nombre;
			pesoMasAlto= peso;
			temperaturaAnimalMasPesado= temperatura;
			flag = 0;
		}

		if ((temperatura%2)==0) // SI LA TEMPERATURA ES PAR
		{
			cantTemperaturaPar++;
		}
		// NOMBRE Y TEMPERATURA ANIMAL MAS PESADO
		if (peso > pesoMasAlto)
		{
			nombreAnimalMasPesado = nombre,
			temperaturaAnimalMasPesado = temperatura;
			pesoMasAlto = peso;
		}
		// ANIMALES VIVEN MENOs 0 GRADOS
		if (temperatura < 0) 
		{
			cantAnimalesBajoCero++;
			//Inicializo pesos bajo cero;
			if( flagBajoCero == 1)
			{
				pesoMinimoBajoCero= peso;
				pesoMaximoBajoCero = peso;
				flagBajoCero= 0;
			}else{
				// Si ya fue inicializado, comparar el peso con el maximo y minimo
				if(peso < pesoMinimoBajoCero)
				{
					pesoMinimoBajoCero = peso;
				}
				if (peso > pesoMaximoBajoCero) 
				{
					pesoMaximoBajoCero= peso;
				}
			}
		}
		cont++;
		respuesta = prompt("Desea seguir ingresando (s/no): ")
	}while(respuesta == "s")

	promedioPeso = acumuladorPeso / cont;

	document.write("<br> Cantidad de temperaturas pares: "+cantTemperaturaPar);
	document.write("<br> Nombre del animal mas pesado: "+nombreAnimalMasPesado+" |Temperatura del animal mas pesado: "+temperaturaAnimalMasPesado);
	document.write("<br> Cantidad de animales que viven bajo cero: "+cantAnimalesBajoCero);
	document.write("<br> Promedio de peso de todos los animales: "+promedioPeso);
	document.write("<br> Peso maximo bajo cero: "+pesoMaximoBajoCero+ " Peso minimo bajo cero: "+pesoMinimoBajoCero);

}
