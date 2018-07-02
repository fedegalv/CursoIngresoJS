function mostrar()
{
	var string1 = prompt("Ingrese el precio:", "Precio");
	var string2 = prompt("Ingrese el porcentaje de descuento:", "%");
	var precio = parseFloat(string1);
	var porcentaje = parseInt(string2) // convertimos de string a int
	var descuento =(porcentaje / 100) * precio;
	var total_con_descuento= precio - descuento;
	var preciofinal = document.getElementById('elPrecioFinal').placeholder=total_con_descuento; // cambiamos el valor de placeholder a el valor del total con descuento

}
