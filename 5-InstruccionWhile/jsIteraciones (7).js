function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	while (respuesta == "si"){
		num = prompt("Ingrese numero: ");
		num = parseInt(num);
		acumulador= acumulador + num;
		contador++;
		respuesta = prompt("Desea seguir ingresando numeros?: (si/no) ");
	}

//alert(contador)
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN