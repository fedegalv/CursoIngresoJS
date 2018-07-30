/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var nro1, nro2;
	var divisor = parseInt(nro1 = document.getElementById('numeroDividendo').value);
	var dividendo = parseInt(nro2 = document.getElementById("numeroDivisor").value);
	var resto = divisor % dividendo;
	alert("El resto  es: "+resto);	
}
