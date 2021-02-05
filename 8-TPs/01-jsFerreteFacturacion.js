/*1.	
Amor Oscar
TP 1: facturación


Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).

txtIdPreciooUno  txtIdPrecioDos  txtIdPrecioTres


*/
function Sumar () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var suma;

	precioUno=document. getElementById('txtIdPrecioUno'). value;
	precioDos=document.getElementById('txtIdPrecioDos'). value;
	precioTres=document.getElementById('txtIdPrecioTres').value;

	precioUno= parseInt (precioUno);
	precioDos=parseInt(precioDos);
	precioTres=parseInt(precioTres);

	suma = precioUno+precioDos+precioTres;

	alert ("la suma de los precios ingresados es: "+ suma) ;
}
function Promedio () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var suma;
	var promedio;

	precioUno=document. getElementById('txtIdPrecioUno'). value;
	precioDos=document.getElementById('txtIdPrecioDos'). value;
	precioTres=document.getElementById('txtIdPrecioTres').value;

	precioUno= parseInt (precioUno);
	precioDos=parseInt(precioDos);
	precioTres=parseInt(precioTres);

	suma = precioUno+precioDos+precioTres;
	promedio= suma/3;
	alert ("la suma de los precios ingresados es: "+ promedio) ;
	
}
function PrecioFinal () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var suma;
	var IVA;
	var IVAAgregado;

	precioUno=document. getElementById('txtIdPrecioUno'). value;
	precioDos=document.getElementById('txtIdPrecioDos'). value;
	precioTres=document.getElementById('txtIdPrecioTres').value;

	precioUno= parseInt (precioUno);
	precioDos=parseInt(precioDos);
	precioTres=parseInt(precioTres);


	suma = precioUno+precioDos+precioTres;
	IVA=suma*0.21;
	IVAAgregado=suma+IVA;

	alert ("la suma de los precios ingresados es: "+ IVAAgregado) ;
	
	
}