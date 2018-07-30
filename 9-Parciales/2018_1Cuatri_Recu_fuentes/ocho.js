function mostrar()
{
	var nombre;
	var cantidadPaginas;
	var ventas;
	var tema;
	var librosPaginasPares;
	var librosPaginasImpares;
	var librosSinVentas;
	var promedio;
	var sumaPaginasProgramacion;
	var contador;
	var sumaVentas;
	contador= 0;
	librosPaginasImpares=0;
	librosSinVentas=0;
	librosPaginasPares=0;
	sumaPaginasProgramacion=0;
	sumaVentas=0;
	respuesta = "si";

	while (respuesta != "n") {
		nombre = prompt("Ingrese nombre del libro: ");
		do{
			cantidadPaginas= prompt("Ingrese cantidad de paginas del libro: ");
			cantidadPaginas = parseInt(cantidadPaginas);
		} while (cantidadPaginas <0)

		do{
			ventas= prompt("Ingrese ventas del libro:");
			ventas = parseInt(ventas);
		} while (ventas < 0)

		tema = prompt("Ingrese tema del libro: ")

		if ( (cantidadPaginas%3)==0) 
			{
				librosPaginasImpares++;
			}

		if ( (cantidadPaginas%2)==0 ) 
			{
				librosPaginasPares++;
			}

		if (ventas == 0) 
		{
			librosSinVentas++;
		}

		if (tema == "programacion") 
		{
			sumaPaginasProgramacion=sumaPaginasProgramacion + cantidadPaginas;
		}

		sumaVentas=sumaVentas+ventas;
		contador++;
		respuesta= prompt("Desea seguir (s/n)?: ")
	}

	promedio= sumaVentas/contador;
	alert("Cantidad de libros con paginas pares: "+librosPaginasPares);
	alert("Cantidad libros con paginas impares: "+librosPaginasImpares);
	alert("Cantiad de libros con cero ventas: "+librosSinVentas);
	alert("Suma de todas las paginas con tema programacion: "+ sumaPaginasProgramacion);
	alert("Promedio de todas las ventas: "+promedio);


}
