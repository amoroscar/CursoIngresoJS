//Amor Oscar ejercicio 3 


function mostrar()
{
	
	var mesDelAño;
	
	mesDelAño= document. getElementById('txtIdMes'). value;
	console.log (mesDelAño);

	switch	(mesDelAño)
	{
		case "Febrero":
			alert ("Este mes no tiene mas de 29 dias.");
			break;
		default:
			alert ("Este mes tiene 30 o más días");
			break;

	}

}//FIN DE LA FUNCIÓN