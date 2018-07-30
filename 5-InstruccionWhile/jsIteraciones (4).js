function Mostrar()
{

	do {
		var numero = prompt("ingrese un número entre 0 y 10.");
		numero= parseInt(numero);
	}
	while (numero < 0 || numero > 10 || isNan(numero));

	//alert(numero);
	alert("Numero correcto");
	document.getElementById('Numero').value = numero;


}//FIN DE LA FUNCIÓN