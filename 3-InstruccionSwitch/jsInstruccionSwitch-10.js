//Amor Oscar Ejercicio 10

function mostrar()
{
	var estacionIngresada;
	var destinoIngresado;
	var mensaje1;
	var mensaje2;
	

	estacionIngresada= document. getElementById('txtIdEstacion'). value;
	destinoIngresado= document. getElementById('txtIdDestino'). value;

	mensaje1= "se viaja";
	mensaje2="No se viaja";

	switch (estacionIngresada)
	{
		case "Invierno":
			switch (destinoIngresado)
			{
				case "Bariloche":
					mensaje=mensaje1;
					break;
				default:
					mensaje=mensaje2;
					break;
			}
			break;
		case "Verano":	
			switch(destinoIngresado)
			{
				case "Mar del Plata":
				case "Cataratas":
					mensaje=mensaje1;
					break;
				default:
					mensaje=mensaje2;
					break;
			}
			break;
		case "Primavera":
			switch(destinoIngresado)
			{
				case "Bariloche":
					mensaje=mensaje2;
					break;
				default:
					mensaje=mensaje1;
					break;
			}
			break;
		default:
			mensaje=mensaje1;
			break;
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN