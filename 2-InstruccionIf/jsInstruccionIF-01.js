
function mostrar()
{
	var edad;
	edad=document.getElementById('txtIdEdad'). value;
	edad=parseInt (edad);//transformo edad nro para comparar con el nro.
	console.log("la edad ingresada es :"+edad);
	 
	
	if (edad==15)//NO SE CIERRAN CON ; - comparo edad con el nro 15, no asigno. esta mal la consistencia de datos."texto" 
	{
		alert("Niña bonita");
	}

}