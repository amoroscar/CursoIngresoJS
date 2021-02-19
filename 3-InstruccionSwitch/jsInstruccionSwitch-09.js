//Amor Oscar Ejercicio 9


function mostrar()
{
	var estacionIngresada;
	var destinoIngresado;
	var porcentaje;
	var precioBase;
	var precioFinal;

	estacionIngresada= document. getElementById('txtIdEstacion'). value;
	destinoIngresado= document. getElementById('txtIdDestino'). value;

	porcentaje=parseInt(porcentaje);
	precioBase=parseInt (precioBase);
	precioFinal=parseInt(precioFinal);


	precioBase=15000;
	

	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destinoIngresado)
			{
				case "Bariloche":
					porcentaje= 20;
					break;
				case "Cordoba":
					porcentaje=-10;
					break;
				case "Mar del plata":
					porcentaje= -20;
					break;
			}
			break;
		case "Verano":
			switch(destinoIngresado)
			{
				case "Bariloche":
					porcentaje=-20;
					break;
				case "Cordoba":
					porcentaje=10;
					break;
				case "Mar del plata":
					porcentaje= 20;
					break;
			}
			break;
		case "Otoño":
		case "Primavera":
			switch (destinoIngresado)
			{
				case "Bariloche":
				case "Mar del plata":
				case "Cataratas":
					porcentaje=10;
					break;
				default:
					porcentaje=0;
					break;
			}
			break;
	}

	precioFinal= precioBase+ (precioBase*porcentaje/100);

	alert(precioFinal);

}//FIN DE LA FUNCIÓN