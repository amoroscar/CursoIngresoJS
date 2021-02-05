/*2.
Amor Oscar

TP2 	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	
	var largo;
	var ancho;
	var Rectangulo;
	var cantidadAlambre;

	largo=document.getElementById('txtIdLargo'). value;
	ancho=document.getElementById('txtIdAncho'). value;

	largo = parseInt(largo);
	ancho = parseInt(ancho);

	Rectangulo=largo*ancho;
	cantidadAlambre=Rectangulo*3;
	
	alert ("la cantidad de metros de alambre es: "+ cantidadAlambre);

}

function Circulo () 

{
	var circulo;
	var radio;
	
	radio= document.getElementById('txtIdRadio'). value;
	radio= parseInt(radio);


	circulo=2*3.14*radio*3;

	alert("la cantidad de metros de alambre es: "+ circulo);
}

function Materiales () 

{
	var cal;
	var cemento;
	var largo;
	var ancho;
	var Rectangulo;
	

	largo=document.getElementById('txtIdLargo'). value;
	ancho=document.getElementById('txtIdAncho'). value;

	largo = parseInt(largo);
	ancho = parseInt(ancho);

	Rectangulo=largo*ancho;
	cemento=2*Rectangulo;
	cal=3*Rectangulo;

	alert ("la cantidad de bolsas de cemento es: "+cemento + " y la cantidad de bolsas de cal es: "+ cal);

}