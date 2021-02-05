/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).

txtIdPreciooUno  txtIdPrecioDos  


*/
function Sumar () 
{
	var precioUno;
	var precioDos;
	var precioTres;

	precioUno=document. getElementById('txtIdPrecioUno'). value;
	precioDos=document.getElementById('txtIdPrecioDos'). value;
	precioTres=document.getElementById('txtIdPrecioTres').value;

	precioUno=parseint(precioUno);
	precioDos=parseint(precioDos);
	precioTres=parseint(precioTres);

	Suma= precioUno+precioDos+precioTres;

	Alert("la suma de los precios ingresados es: "+suma) ;
}
function Promedio () 
{
	
}
function PrecioFinal () 
{
	
}