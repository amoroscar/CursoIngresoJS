function mostrar()
{
	var edad;
	edad=document.getElementById('txtIdEdad'). value;
	edad=parseInt (edad);//transformo edad nro para comparar con el nro.
	console.log("la edad ingresada es :"+edad);
	 
	
	if (edad>17)//con rango de valores
	{
		alert("Es mayor");
	}
	

}//FIN DE LA FUNCIÓN