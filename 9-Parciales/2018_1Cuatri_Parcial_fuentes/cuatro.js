function mostrar()
{
	var numero1 = prompt("Ingrese el primer numero: ");
	var numero2 = prompt("Ingrese el segundo numero: ");
	var numero1int = parseFloat(numero1);
	var numero2int = parseFloat(numero2);

	if (numero1 == numero2) {
		var concatenado = numero1 + numero2;
		alert(concatenado);
	}

	if (numero1 > numero2) {
		var resta = numero1int - numero2int;
		alert(resta);

	}
	if (numero1 < numero2) {
		var suma = numero1int + numero2int;
		if (suma > 10) {
			alert("La suma es "+suma+" y supero el 10");
		}
		else {
			alert(suma);
		}
	} 

}
