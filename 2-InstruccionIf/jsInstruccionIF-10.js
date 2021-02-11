/*Amor Oscar
ejercicio 10 
Tenia el indentado para corregir, aguardo comentario
*/

function mostrar()
{
	var notaRandom;
	var mensaje;

	notaRandom=notaRandom=Math.floor(Math.random() * 10) + 1;

	if (notaRandom>8)
	{
		mensaje="Excelente";
	}
	else
	{
		if (notaRandom<4)
		 {
		 	mensaje="Vamos, la proxima se puede";
		 }
		 else
		 {
		 	mensaje="Aprobó";
		 }
	}
	
	alert (mensaje+" la nota es: "+notaRandom);
	
	
}//FIN DE LA FUNCIÓN