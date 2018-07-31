/*
	ingreso:
	maria f 15
	jose m 33
	pepe m 81
	Mostrar
		cantidad 
			1- mayores de edad = 2
			2 -menores de edad = 1
			3- cantidad de mujeres = 1
			4- cantidad de hombres = 2
		nombref
			de el mayor edad =pepe
			de el menor edad =maria 
			de el hombre de menor edad =jose
*/
function mostrar()
{
	var nombre;
	var sexo;
	var edad;
	var contador;
	var cantidadMayorEdad;
	var cantidadMenorEdad;
	var cantidadMujeres;
	var cantidadHombres;
	var mayorEdad;
	var nombreMayorEdad;
	var menorEdad;
	var nombreMenorEdad;
	var hombreMenorEdad;
	var bandera;

	cantidadHombres=0;
	cantidadMujeres=0;
	cantidadMenorEdad=0;
	cantidadMayorEdad=0;
	bandera = 0;

	contador = 0;

	while(contador < 3)
	{
		nombre= prompt("Ingrese nombre: ");
		do
		{
			edad = prompt("Ingrese edad: ");
			edad = parseInt(edad);
		}while (edad <= 0)

		do
		{
			sexo = prompt("Ingrese sexo(f/m): ");
		}while(sexo != "f" && sexo != "m")
		//Inicializo las variables mayor y menores
		if (contador == 0) 
		{
			mayorEdad=edad;
			menorEdad=edad;
			nombreMayorEdad=nombre;
			nombreMenorEdad=nombre;
		}
		if (sexo == "m" && bandera == 0)
		{
			hombreMenorEdad=nombre;
			bandera = 1;
		}


		// Contadores
		if (edad > 18) 
		{
			cantidadMayorEdad++;
		}
		else{
			cantidadMenorEdad++;
		}

		if (sexo == "f") 
		{
			cantidadMujeres++;
		}else
		{
			cantidadHombres++;
		}
		// Comparadores

		if (edad > mayorEdad) 
		{
			mayorEdad=edad;
			nombreMayorEdad = nombre;
		}

		if (edad < menorEdad)
		{
			menorEdad= edad;
			nombreMenorEdad= nombre;
		}
		if (sexo== "m" && edad < hombreMenorEdad) {
			hombreMenorEdad = nombre;
		}





		contador++;
	}

	document.write("<br> Mayores edad: "+cantidadMayorEdad);
	document.write("<br> Menores edad: "+cantidadMenorEdad);
	document.write("<br> Cantidad de mujeres: "+cantidadMujeres);
	document.write("<br> Cantidad de hombres: "+cantidadHombres);
	document.write("<br> Nombre de la persona de mayor edad: "+nombreMayorEdad);
	document.write("<br> Nombre de la persona menor edad: "+nombreMenorEdad);
	document.write("<br> Nombre del hombre de menor edad: "+hombreMenorEdad);



}
