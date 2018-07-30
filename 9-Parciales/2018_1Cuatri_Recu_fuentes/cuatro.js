function Mostrar()
{
	var numero1Uno;
	var numeroDos;
	var division;
	var suma;

	numeroUno= prompt("Ingrese numero 1: ")
	numeroUno= parseInt(numeroUno);
	numeroDos= prompt("Ingrese numero 2: ")
	numeroDos= parseInt(numeroDos);


	if (numeroUno == numeroDos) 
	{
		alert(""+numeroUno+""+numeroDos);
	}
	else if (numeroUno > numeroDos) {
		division= numeroUno/numeroDos;
		alert("If numero 1 > numero: "+division);
	}else{
		suma= numeroUno+numeroDos;
		if (suma < 50) 
		{
			alert("La suma es "+suma+ " y es menor a 50");
		}
		else{
			alert("La suma es "+suma);
		}
	}

}
