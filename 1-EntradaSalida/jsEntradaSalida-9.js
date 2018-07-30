/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
	var sueldo, operacion, total;
	sueldo = document.getElementById('sueldo').value;
	sueldo = parseInt(sueldo);
	operacion = (10 / 100) * sueldo;
	total = sueldo + operacion;
	document.getElementById('resultado').value = total;	
}
