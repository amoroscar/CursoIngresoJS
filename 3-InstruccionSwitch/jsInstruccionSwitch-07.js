//Amor Oscar Ejercicio 7

function mostrar()
{
	var destinoIngresado;
	var	mensaje;
	
	destinoIngresado=document. getElementById('txtIdDestino'). value;

	switch	(destinoIngresado)
	{
		case "Bariloche":
			mensaje= "Oeste";
			break;
		case "Cataratas":
			mensaje= "Norte";
			break;
		case "Mar del plata":
			mensaje= "Este";
			break;
		default:
			mensaje= "Sur";
			break;
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN