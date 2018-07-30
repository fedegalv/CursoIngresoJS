function Mostrar()
{

	var bandera=0;
	var num;
	var max;
	var min;

	// declarar variables
	
	var respuesta='si';

	
	while(respuesta!='no')
	{
		num = prompt("Ingrese un numero");
		num = parseInt(num);
		if (bandera == 0)
		{
			max= num;
			min = num;
			bandera = 1;
		}


		if (num > max) {
			max = num;
		} 
		if(num < min) {
			min = num;

		}
		respuesta = prompt("Desea seguir ingresando?: (s/n) ");

	}

	document.getElementById('maximo').value = max;
	document.getElementById('minimo').value = min;




}//FIN DE LA FUNCIÓN