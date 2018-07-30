function Mostrar()
{

	var contador;
	var acumulador;
	var respuesta;
	var numero;
	var promedio;

	contador=0;
	acumulador=0;
	respuesta='si';

	while (respuesta != "n"){
		contador=contador+1;
		numero=prompt("ingrese numero #"+contador);
		numero= parseInt(numero);
		acumulador=acumulador+numero;	
		respuesta = prompt("Desea seguir ingresando numeros?: (si/no) ");

	}
	promedio=acumulador/contador;

	//alert(contador)
	document.getElementById('suma').value="la suma es "+acumulador;
	document.getElementById('promedio').value="el promedio es: " +promedio;

}//FIN DE LA FUNCIÓN