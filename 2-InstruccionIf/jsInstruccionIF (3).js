function Mostrar()
{
//tomo la edad  
edad = document.getElementById('edad').value;
edad = parseInt(edad);
if (edad >= 18) {
	alert("La persona es mayor a 18");
}
else{
	alert("La persona es menor");
}

}//FIN DE LA FUNCIÓN