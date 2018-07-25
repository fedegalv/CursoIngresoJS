/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{

 	var cantidad = document.getElementById('Cantidad').value;
 	cantidad = parseInt(cantidad);
 	var marca= document.getElementById('Marca').value;
 	var precioLampara= 35;
 	var precioBruto= cantidad * precioLampara;
 	var descuento = 1;

 	switch (cantidad){

 		case 1:
 		case 2:
 			importeFinal = precioBruto;
 			break;
 		case 3: 
 			if (marca == "ArgentinaLuz")
 			{
 				descuento= 0.15;
 			}
 			else if (marca == "FelipeLamparas")
 			{
 				descuento = 0.1;
 			}
 			else
 			{
 				descuento = 0.05;
 			}
 			break;

 		case 4: // A PARTIR DE AQUI HABIA QUE HACER
 			
 			if (marca == "ArgentinaLuz" || marca == "FelipeLamparas")
 			{
 				descuento =  0.25;
 			}
 			else
 			{
 				descuento = 0.2;
 			}
 			break;

 		case 5:
 			if (marca == "ArgentinaLuz") 
 			{
 				descuento= 0.4;
 			}
 			else{
 				descuento = 0.3;			
 				}
 			break;

 		default:
 			descuento = 0.5; // SE USA DEFAULT POR QUE SI NO FUE CASE 1, NI 2,3,4 o 5 ES 6 O MAS SI O SI, Y EN ESE CASO EL DESCUENTO ES 50%

 	}


 	if (cantidad > 2){
 		importeDescuento = descuento * precioBruto;
 		importeFinal = precioBruto - importeDescuento;
 		if (importeFinal > 120) {
 			impuesto = (10/100) * importeFinal;
 			precioImpuesto = importeFinal + impuesto;
 			document.getElementById('precioDescuento').value = importeFinal;
 			alert("Usted pago "+impuesto+" de IIBB");
 		}
		
		document.getElementById('precioDescuento').value = importeFinal;

 	}
 	else {
 		document.getElementById('precioDescuento').value = importeFinal;
 	}

}
