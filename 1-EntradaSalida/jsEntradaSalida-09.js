/*
Amor Oscar

Ejercicio 09 BIS.

Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/	
/*osea si cargo 100 tiene que mostrar 110*/


function mostrarAumento()
{
	var sueldo;
	var aumento;
	var importe;
	var RESULTADO;
	var porcentaje;

	porcentaje= prompt ("Ingrese porcentaje de aumento");
	porcentaje=parseInt(porcentaje);

	sueldo= document. getElementById('txtIdSueldo'). value;
	sueldo= parseInt(sueldo);
	aumento= sueldo*porcentaje/100;
	RESULTADO=aumento+sueldo;


	document. getElementById('txtIdResultado'). value= RESULTADO;


}
