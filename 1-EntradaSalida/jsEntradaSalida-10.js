/*
Amor Oscar

Ejercicio 10 Bis Corregido (el anterior me daba NaN)
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"
si ingreso 100 me muestra un 25% de dto, osea 75

*/
function mostrarAumento()
{
	var importe;
	var descuento;
	var descuentoIngresado;
	var importeConDescuento;
	
	importe= document. getElementById('txtIdImporte'). value;
	descuentoIngresado= prompt ("Ingrese descuento a realizar:");
	
	
	descuentoIngresado= parseInt (descuentoIngresado);
	importe= parseInt (importe);

	descuento= importe*descuentoIngresado/100;
	importeConDescuento=importe - descuento;

	document. getElementById('txtIdResultado'). value= importeConDescuento;
}
