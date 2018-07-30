function Mostrar()
{

	var contador=0;
	var num;
	// declarar variables
	
	var respuesta='si';

	max = prompt("Ingrese un numero");
	max= parseInt(max);
	min = max;

	while(respuesta!='no')
	{
		num = prompt("Ingrese otro numero");
		num = parseInt(num);
		if (num > max) {
			max = num;
		} 
		if(num < min) {
			min = num;

		}

		respuesta = prompt("Desea seguir ingresando?: (si/no) ");

	}

	document.getElementById('maximo').value = max;
	document.getElementById('minimo').value = min;




}//FIN DE LA FUNCIÓN