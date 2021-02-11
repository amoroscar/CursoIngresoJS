function mostrar()
{
	var edad;
	edad=document.getElementById('txtIdEdad'). value;
	edad=parseInt (edad);
	console.log("la edad ingresada es :"+edad);
	 
	/*
	if(edad<18) // no dejar espacio entre instrucción If y () 
	{
		if (edad>12)
		 {
		 	alert("es adolescente");
		 }
	
	}
	*/

	if(edad<18 && edad>12) //es lo mismo que if((edad<18)&&(edad>12))
	{
		alert("es adolescente");
	}

}//FIN DE LA FUNCIÓN