/*Amor Oscar While 08

Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var productoNegativos;
	
	sumaPositivos=0;
	productoNegativos=1;
	respuesta='si';

	while (respuesta=="si")
	{	
		numeroIngresado=prompt ("Ingrese número:");
		numeroIngresado=parseInt (numeroIngresado);
		while(isNaN(numeroIngresado)==true)
		{
			numeroIngresado=prompt ("Error: Debe ingresar número:");
			numeroIngresado=parseInt (numeroIngresado);
		}

		if(numeroIngresado>-1)
		{
			sumaPositivos=sumaPositivos+numeroIngresado;
		}
		else
		{
			productoNegativos=productoNegativos*numeroIngresado;
		}


		respuesta=prompt ("si para continuar");

	}

	

	document.getElementById('txtIdSuma'). value="La suma de los positivos es: "+sumaPositivos;
	document. getElementById('txtIdProducto'). value="El producto de los negativos es: "+productoNegativos;
	

}//FIN DE LA FUNCIÓN