function mostrar()
{
	var nota;
	var sexo;
	var prom;
	var notaBaja;
	var sexBaja;
	var mayorSeis = 0;
	var total = 0;
	var sValido;
	var cont = 0;

	while (cont < 5) 
	{

		nota = prompt("Ingrese nota: ");
		nota = parseInt(nota)
		if (nota >= 0 && nota <= 10) 
		{
			sValido = false;

			do
			{
				sexo = prompt("Ingrese sexo: ");
				sexo = sexo.toLowerCase();
				if (sexo == "m" || sexo == "f") 
				{
					sValido = true;

					if (cont == 0) 
					{
						sexBaja = sexo;
						notaBaja= nota;
					}
					
					if (nota < notaBaja) 
					{
						notaBaja = nota;
						sexBaja = sexo;
					}
					

					if (nota >= 6 && sexo == "m") 
						{
							mayorSeis++;
						}

					total= total + nota;




				}
			} while (sValido == false);		
			
			cont++;
		}


	}// termina el while

	prom = total / cont;

	alert("Promedio de notas: "+prom);
	alert("Nota mas baja "+notaBaja+" fue de sexo "+sexBaja);
	alert("Cantidad varones con nota mayor o igual 6: "+mayorSeis);

}
