function mostrar()
{
	var planeta = prompt("Ingrese un planeta del sistema solar: ");
	switch (planeta) {
		case "mercurio":
			alert("Acá hace más calor");
			break;
		case "venus":
			alert("Aca hace mas calor");
			break;
		case "tierra":
			alert("Aca vivimos");
			break;
		case "marte":
			alert("Aca hace mas frio");
			break;
		case "jupiter":
			alert("Aca hace mas frio");
			break;
		case "saturno":
			alert("Aca hace mas frio");
			break;
		case "urano":
			alert("Aca hace mas frio");
			break;
		case "neptuno":
			alert("Aca hace mas frio");
			break;
		case "pluton":
			alert("Aca hace mas frio");
			break;
		default:
			alert("No es un planeta valido");
			break;
	}
}
