/*
Amor Oscar
Ejercicio 3

*/
function mostrar()
{
	var edad;
	edad=document.getElementById('txtIdEdad'). value;
	edad=parseInt (edad);
	console.log("la edad ingresada es :"+edad);
		
	if (edad>17)
	 {
	 	alert ("Es mayor");
	 }
	 else
	 {
	 	alert ("Es menor");
	 }
		
}//FIN DE LA FUNCIÓN