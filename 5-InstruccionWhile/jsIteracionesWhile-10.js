/*Amor Oscar While 10
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaNegativos;
	var contadorNegativos;
	var sumaPositivos;
	var contadorPositivos;
	var contadorCeros;
	var contadorPares;
	var promedioNegativos;
	var promedioPositivos;
	var diferencia;
	
	sumaNegativos=0
	contadorNegativos=0;
	sumaPositivos=0;
	contadorPositivos=0;
	contadorCeros=0;
	contadorPares=0;
	promedioNegativos=0;
	promedioPositivos=0;
	respuesta="si";

	while(respuesta=="si")
	{
		numeroIngresado=prompt ("Ingrese número:");
		numeroIngresado=parseInt (numeroIngresado);

		while(isNaN(numeroIngresado)==true)
		{
			numeroIngresado=prompt ("Error: Debe ingresar número:");
			numeroIngresado=parseInt (numeroIngresado);
		}
		if (numeroIngresado<0) 
		{
			sumaNegativos=sumaNegativos+numeroIngresado;
			contadorNegativos=contadorNegativos+1;
		}
		else
		{
			if (numeroIngresado>0)
			 {
			 	sumaPositivos=sumaPositivos+numeroIngresado;
			 	contadorPositivos=contadorPositivos+1;
			 } 
			 else 
			 {
			 	contadorCeros=contadorCeros+1;
			 }
		}
		if (numeroIngresado%2==0) 
		{
			contadorPares=contadorPares+1;
		}

		respuesta=prompt("si para continuar ingresando");
	} //fin del while
	if(contadorNegativos!=0)
	{
		promedioNegativos=sumaNegativos/contadorNegativos; 	
	}
	if (contadorPositivos!=0)
	{
		promedioPositivos=sumaPositivos/contadorPositivos;
	}
	
	diferencia=sumaPositivos- sumaNegativos;

	document.write("la suma de negativos es: "+sumaNegativos);
	document.write("la suma de positivos es: "+sumaPositivos);
	document.write("la cantidad de positivoses: "+contadorPositivos);
	document.write("la cantidad de negativos es: "+contadorNegativos);
	document. write("la cantidad de ceros es: "+contadorCeros);
	document. write("la cantidad de números pares es: "+contadorPares);
	document.write("El promedio de los positivos es: "+promedioPositivos);
	document.write("El promedio de los negativos es: "+promedioNegativos);
	document. write("La diferencia entre positivos y negativos es: "+diferencia);

}//FIN DE LA FUNCIÓN