/*Amor Oscar Ejercicio 5

entre 7 y 11 "Es de mañana.".

*/

function mostrar()
{
	var horaDelDia;

	horaDelDia=document. getElementById('txtIdHora'). value;

	switch(horaDelDia)
	{
		case "7":
		case "8":
		case "9":
		case "10":
		case "11":
			alert ("Es de mañana.");
			break;
	}
	
}//FIN DE LA FUNCIÓN