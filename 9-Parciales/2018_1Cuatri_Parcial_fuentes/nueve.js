function Mostrar()
{
	var temperatura;
	var marca;
	var peso;
	var respuesta;
	var cantidadTemperaturasPares;
	var marcaMasPesada;
	var cantidadMenosCeroGrados;
	var promedioPeso;
	var pesoMaximo;
	var pesoMinimo;
	var contador;
	var acumuladorPeso;
	cantidadMenosCeroGrados=0;
	cantidadTemperaturasPares=0;
	acumuladorPeso=0;
	contador = 0;
	respuesta = "s";

	while(respuesta != "n")
	{
		marca = prompt("Ingrese marca: ")

		do
		{
			peso = prompt("Ingrese peso: ")
			peso = parseInt(peso);
		}while(!(peso >= 1 && peso <= 100))

		do
		{
			temperatura = prompt("Ingrese temperatura (entre -30º y 30º): ");
			temperatura = parseInt(temperatura);
		}while(!(temperatura >= -30 && temperatura <= 30))

		if (contador == 0) {
			pesoMinimo = peso;
			pesoMaximo = peso;
		}

		acumuladorPeso= acumuladorPeso + peso;

		if ( (temperatura%2)==0 ) 
		{
			cantidadTemperaturasPares++;
		}

		if (temperatura <= 0) 
		{
			cantidadMenosCeroGrados++;
		}

		if (peso > pesoMaximo) 
		{
			pesoMaximo= peso;
			marcaMasPesada = marca;
		}

		if (peso < pesoMinimo)
		{
			pesoMinimo= peso;
		}

		contador++;
		respuesta= prompt("Desea seguir con el ingreso (s/n): ");
	}

	promedioPeso= acumuladorPeso / contador;
	document.write('<p>Cantidad temperaturas pares: '+cantidadTemperaturasPares+'</p>');
	document.write('<p>Marca del producto mas pesado: '+marcaMasPesada+'</p>');
	document.write('<p>Cantidad de productos que se conservan a menos de 0º: '+cantidadMenosCeroGrados+'</p>');
	document.write('<p>Promedio de peso de todos los productos: '+promedioPeso+'</p>');
	document.write('<p>Peso maximo:'+pesoMaximo+'</p>');
	document.write('<p>Peso minimo:'+pesoMinimo+'</p>');	




}
