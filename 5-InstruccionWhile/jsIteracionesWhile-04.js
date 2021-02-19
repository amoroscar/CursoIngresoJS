/*Amor Oscar Ejercicio 4 WHILE

al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;

	numeroIngresado = prompt("ingrese un número entre 0 y 10.");

	while (isNaN(numeroIngresado)==true || numeroIngresado<0 || numeroIngresado>10)
	{
		numeroIngresado= prompt("Intente nuevamente, ingresando un número entre 0 y 10");	
	}
	
	document. getElementById('txtIdNumero'). value="El dato obtenido y validado es:"+numeroIngresado;
}//FIN DE LA FUNCIÓN