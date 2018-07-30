function Mostrar()
{
	var dia;
	dia = prompt("Ingrese dia(lunes/martes/...)")
	dia = dia.toLowerCase();

	switch(dia){
		case "lunes":
		case "martes":
		case "miercoles":
		case "jueves":
		case "viernes":
			alert("a trabajar");
			break;

		case "sabado":
		case "domingo":
			alert("buen finde");
			break;

		default:
			alert("el dia ingresado no es valido")
	}

}
