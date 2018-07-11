function Mostrar()
{
//tomo la edad  
edad = document.getElementById('edad').value;
edad = parseInt(edad);
if (edad > 18) {
	alert("La persona es mayor de edad");
}
else if (edad >=13 && edad <= 17) {
	alert("La persona es adolescente");
}
else {
	alert("La persona es menor a 13 años");
}



}//FIN DE LA FUNCIÓN