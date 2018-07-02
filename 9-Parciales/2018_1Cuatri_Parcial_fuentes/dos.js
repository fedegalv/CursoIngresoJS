function mostrar()
{
  var nombre = document.getElementById('elNombre').value; // asignamos a nombre el valor (value) dentro del elemento elNombre  que se encuentra en dos.html usando la funcion correspondiente 
  var localidad = document.getElementById('laLocalidad').value; // asignamos a localidad el valor dentro del elemento laLocalidad que se encuentra en dos.html
  alert("Usted es "+nombre+" y vive en la localidad de "+localidad);
}
