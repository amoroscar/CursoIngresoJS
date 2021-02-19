/*Amor Oscar ejercicio 5 while


Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	
	sexoIngresado = prompt("ingrese f ó m .");

	while(sexoIngresado!="f"&&sexoIngresado!="m")
	{
		alert ("La letra ingresada es incorrecta: "+sexoIngresado);
		sexoIngresado= prompt("Ingrese f para femenino o m para masculino");
	}
	if(sexoIngresado=="f")
	{
		document. getElementById('txtIdSexo').value ="El sexo ingresado es femenino";
	}
	else
	{
		document. getElementById('txtIdSexo').value ="El sexo ingresado es masculino";
	}
}//FIN DE LA FUNCIÓN