/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	importe = document.getElementById('importe').value;
	importe = parseInt(importe);
	operacion = (25/100) * importe;
	total = importe - operacion;
	document.getElementById('resultado').placeholder = total;
}
