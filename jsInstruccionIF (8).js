function Mostrar()
{
//tomo la edad  
edad = document.getElementById('edad').value;
edad = parseInt(edad);
estado = document.getElementById('estadoCivil').value;
if (edad < 18 && estado == "Soltero") {
	alert("Es muy pequeño para NO ser soltero");
}	
if (edad >= 18 && estado == "Soltero") {
	alert("Es soltero y no es menor");
}	


}//FIN DE LA FUNCIÓN