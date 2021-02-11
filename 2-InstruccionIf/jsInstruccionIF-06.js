function mostrar()
{
	var edad;
	edad=document.getElementById('txtIdEdad'). value;
	edad=parseInt (edad);
	console.log("la edad ingresada es :"+edad);

	if (edad>17)
	 {
	 	alert("Es mayor de edad");
	 }
	 else
	 {
	 	if (edad<13)
	 	{
	 		alert("Es niño");
	 	}
	 	else
	 	{
	 		alert("Es adolescente");
	 	}
	 }



}//FIN DE LA FUNCIÓN