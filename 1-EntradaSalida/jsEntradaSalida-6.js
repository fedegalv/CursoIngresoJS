/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{	var nro1, nro2;
	var numero1 = parseInt(nro1 = document.getElementById('numeroUno').value);
	var numero2 = parseInt(nro2 = document.getElementById("numeroDos").value);
	var suma = numero1 + numero2;
	alert("La suma es: "+suma);
}

