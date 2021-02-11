/*edad<18 estado civil!=soltero no hacer nada
else edad>17 estadocivil ==soltero Es soltero y no es menor
*/

function mostrar()
{	
	var edad;
	var estadoCivil;

	edad=document.getElementById('txtIdEdad'). value;
	edad=parseInt (edad);
	estadoCivil=document.getElementById('estadoCivil'). value;
	console.log("la edad ingresada es :"+edad+" y el estadocivil es: "+estadoCivil);
	
	if (edad<18 && estadoCivil!="Soltero")
	{
	}
	else
	{
		if (edad>17&& estadoCivil=="Soltero")
		 {
		 	alert("Es soltero y no es menor");
		 }
	}
}//FIN DE LA FUNCIÓN