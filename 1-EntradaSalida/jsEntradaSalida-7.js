/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var nro1, nro2;
	var numero1 = parseInt(nro1 = document.getElementById('numeroUno').value);
	var numero2 = parseInt(nro2 = document.getElementById("numeroDos").value);
	var suma = numero1 + numero2;
	alert("La suma es: "+suma);	
}

function restar()
{
	var nro1, nro2;
	var numero1 = parseInt(nro1 = document.getElementById('numeroUno').value);
	var numero2 = parseInt(nro2 = document.getElementById("numeroDos").value);
	var resta = numero1 - numero2;
	alert("La resta es: "+resta);
}

function multiplicar()
{ 
	var nro1, nro2;
	var numero1 = parseInt(nro1 = document.getElementById('numeroUno').value);
	var numero2 = parseInt(nro2 = document.getElementById("numeroDos").value);
	var multiplicacion = numero1 * numero2;
	alert("La multiplicacion es: "+multiplicacion);
}

function dividir()
{
	var nro1, nro2;
	var numero1 = parseInt(nro1 = document.getElementById('numeroUno').value);
	var numero2 = parseInt(nro2 = document.getElementById("numeroDos").value);
	var division = numero1 / numero2;
	alert("La division es: "+division);
}

