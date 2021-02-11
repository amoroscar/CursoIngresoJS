//edad<18 estado civil <> soltero  'Es muy pequeño para NO ser soltero.'

function mostrar()
{
	var edad;
	var estadoCivil;

	edad=document.getElementById('txtIdEdad'). value;
	edad=parseInt (edad);
	estadoCivil=document.getElementById('estadoCivil'). value;
	console.log("la edad ingresada es :"+edad);
	
	if (edad<18 && estadoCivil!="Soltero")
	{
		alert ("Es muy pequeño para NO ser soltero");
	}

}//FIN DE LA FUNCIÓN