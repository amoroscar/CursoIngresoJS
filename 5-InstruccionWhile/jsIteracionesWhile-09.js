/*Amor Oscar While 09

Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	
	var respuesta;
	
	banderaDelPrimero=0;
	respuesta='si';

	while(respuesta=="si")
	{
		numeroIngresado=prompt ("Ingrese número:");
		numeroIngresado=parseInt (numeroIngresado);

		while(isNaN(numeroIngresado)==true)
		{
			numeroIngresado=prompt ("Error: Debe ingresar número:");
			numeroIngresado=parseInt (numeroIngresado);
		}

		if (banderaDelPrimero==0) 
		{
			numeroMaximo=numeroIngresado;
			numeroMinimo=numeroIngresado;
			banderaDelPrimero=1;
		}
		else
		{
			if (numeroIngresado<numeroMinimo)
			 {
			 	numeroMinimo=numeroIngresado;
			 }
			 if (numeroIngresado>numeroMaximo)
			 {
			 	numeroMaximo=numeroIngresado;
			 }
		}


		respuesta=prompt("si para continuar");
	}

	document. getElementById('txtIdMaximo').value=numeroMaximo;
	document.getElementById('txtIdMinimo').value=numeroMinimo;

}//FIN DE LA FUNCIÓN