
function mostrar()
{

	var string1 = prompt("Ingrese el ancho", 0);
	var string2 = prompt("Ingrese el largo", 0);
	// Ponemos como nombre de variables temporal string1 y string2, por que prompt toma lo que recibe como string aunque reciba un int o boolean
	ancho = parseFloat(string1); // Convertimos las variables temporales de string a float usando la funcion parseFloat, para int se usaria parseInt
	largo = parseFloat(string2);
	var perimetro = 2 * (ancho + largo); // Calculamos el perimetro
	alert("El perimetro es: "+perimetro); // Lo mostramos con alert

}
