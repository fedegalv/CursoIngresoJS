function Mostrar()
{
//tomo la edad  
edad = document.getElementById('edad').value;
edad = parseInt(edad);
soltero = document.getElementById('estadoCivil').value;
if (edad < 18 && soltero != "Soltero") {
	alert("Es muy pequeño para NO ser soltero");
}	


}//FIN DE LA FUNCIÓN