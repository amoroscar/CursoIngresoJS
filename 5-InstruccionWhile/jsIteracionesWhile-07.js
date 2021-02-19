/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	var numeroIngresado;


	contador=0;
	acumulador=0;
	respuesta='si';

	while(respuesta=='si')
	{	
		numeroIngresado= prompt ("Ingrese número: ");
		numeroIngresado=parseInt (numeroIngresado);
		while(isNaN(numeroIngresado)==true)
		{
			numeroIngresado=prompt("Error, ingrese un numero.");
			numeroIngresado=parseInt (numeroIngresado);
		}

		respuesta=prompt("¿Desea continuar ingresando números? si para continuar");

		contador=contador+1;
		acumulador=acumulador+numeroIngresado;
	}

	promedio=acumulador/contador;

	document.getElementById('txtIdSuma'). value="La suma acumulada es: "+acumulador;
	document.getElementById('txtIdPromedio'). value="El promedio es: "+promedio;


}//FIN DE LA FUNCIÓN