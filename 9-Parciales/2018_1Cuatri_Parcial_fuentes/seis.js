function Mostrar()
{
	var esN;
	var hora = document.getElementById('laHora').value
	hora = parseInt(hora);

	switch(hora) {

		case 6:
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			alert("Es de mañana");
			break;

		case 12:
		case 13:
		case 14:
		case 15:
		case 17:
		case 18:
		case 19:
			alert("Es de tarde");
			break;

		default:
			if ( esN=isNan(hora) ){
				alert("Hora invalida")
			}
			else{
				if (hora < 24)
				{
					alert("A dormir")
				}
				alert("Es de noche")
			}


	}

}
