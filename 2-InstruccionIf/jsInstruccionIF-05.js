function mostrar()
{
	var edad;
	edad=document.getElementById('txtIdEdad'). value;
	edad=parseInt (edad);
	console.log("la edad ingresada es :"+edad);
	 
	
	if(edad>17||edad<13) // el operador logico "OR" para cuando se cumple una de las condiciones
	 {
	 	alert("no es adolescente");
	 }
}//FIN DE LA FUNCIÓN