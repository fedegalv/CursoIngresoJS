function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta='si';

	while (respuesta == "si") {
		num= prompt("Ingrese un numero: ");
		num= parseInt(num);

		if (num > 0) {
			positivo= positivo + num;
		}
		else{
			negativo = negativo * num;
		}
		
		respuesta = prompt("Desea seguir ingresando numeros: (si/no) ")
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN