function mostrar()
{
	var contador; 
	var acumulador;
	var numeroIngresado;
	var promedio;
	
	contador=0;
	acumulador=0;
	
	//ya inicializadas las variables.
	while(contador<5)
	{	
		numeroIngresado= prompt ("Ingrese número: ");
		numeroIngresado=parseInt (numeroIngresado);
		while(isNaN(numeroIngresado)==true)
		{
			numeroIngresado=prompt("Error, ingrese un numero.");
			numeroIngresado=parseInt (numeroIngresado);
		}

		contador=contador+1;//es un numero literal
		acumulador=acumulador+numeroIngresado;//depende del ingreso del usuario
	}

	promedio=acumulador/contador;

	document.getElementById('txtIdSuma'). value="La suma acumulada es: "+acumulador;
	document.getElementById('txtIdPromedio'). value="El promedio es: "+promedio;
	
}//FIN DE LA FUNCIÓN