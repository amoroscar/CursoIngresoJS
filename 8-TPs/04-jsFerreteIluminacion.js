/*4.	
Amor Oscar
Ferrete iluminancion Con if (cantidad) switch (marca)


Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
lamp=35$

*/

function CalcularPrecio () 
{
	var cantidad;
	var precio;
	var descuento;
	var marca;
	var IIBB;

	cantidad= document.getElementById('txtIdCantidad'). value;
	cantidad=parseInt(cantidad);

	precio=cantidad*35;

	marca= document. getElementById('Marca').value;

	if (cantidad>5) 
	{	
		descuento=50;
	}
	else
	{
		if (cantidad==5)
		 {
		 	switch(marca)
		 	{
		 		case "ArgentinaLuz":
		 			descuento=40;
		 			break;
		 		default:
		 			descuento=30;
		 			break;
		 	}
		 }
		 else
		 {
		 	if (cantidad==4)
		 	 {
		 	 	switch(marca)
		 	 	{
		 	 		case "ArgentinaLuz":
		 	 		case "FelipeLamparas":
		 	 			descuento=25;
		 	 			break;
		 	 		default:
		 	 			descuento=20;
		 	 			break;
		 	 	}
		 	 }
		 	 else
		 	 {
		 	 	if (cantidad==3)
		 	 	 {
		 	 	 	switch(marca)
		 	 	 	{
		 	 	 		case "ArgentinaLuz":
		 	 	 			descuento=15;
		 	 	 			break;
		 	 	 		case "FelipeLamparas":
		 	 	 			descuento=10;
		 	 	 			break;
		 	 	 		default:
		 	 	 			descuento=5;
		 	 	 			break;
		 	 	 	}
		 	 	 }
		 	 	 else
		 	 	 {
		 	 	 	descuento=0;
		 	 	 }
		 	 }
		 }
	}

	precio=precio-(precio*descuento/100);

	if (precio>120)
	{
		IIBB=precio*10/100;
		precio=precio+IIBB;
		alert ("IIBB Usted pago "+IIBB);
	}

	document. getElementById('txtIdprecioDescuento'). value= precio;
}	



	