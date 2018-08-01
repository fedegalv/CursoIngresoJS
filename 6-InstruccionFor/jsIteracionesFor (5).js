function mostrar()
{
	var numero;
	numero= parseInt(prompt("Ingrese numero"))
	for (var i = 0; i < numero ; i++) {
		numero= prompt("Reingrese el numero")
		if (numero == 9) {break;}
	}
}//FIN DE LA FUNCIÓN