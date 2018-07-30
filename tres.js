function Mostrar()
{
	precio = prompt("Ingresar un precio: ");
	precio = parseInt(precio);
	descuento = prompt("Ingresar un porcentaje: ")
	descuento = parseInt(descuento);
	desc = (descuento/100)*precio;
	total = precio - desc;
	iva= (21/100)*total;
	totalconiva = total + iva;
	alert("El descuendo en dinero es de : "+desc+" , el precio con descuento es: "+total+" , el iva es: "+iva);
	document.getElementById('elPrecioFinal').value = totalconiva;
}
