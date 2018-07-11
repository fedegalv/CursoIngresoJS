function Mostrar()
{
	var num1,num2;
	num1 = prompt("Ingrese numero 1: ");
	num1 = parseInt(num1);
	num2 = prompt("Ingrese numero 2: ");
	num2 = parseInt(num2);

	if (num1 == num2) {
		alert(num1+""+num2);
	}
	else if (num1 > num2) {
		var resta = num1 - num2;
		alert(resta)
	}
	else {
		var suma = num1 + num2;
		if (suma > 10) {
			alert("La suma es "+suma+" y supero el 10");
		}
	}

}
