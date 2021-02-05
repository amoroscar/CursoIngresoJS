/*3.
Amor Oscar	

Ejercicio3	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").

txtIdTemperatura
*/
function FahrenheitCentigrados () 
{
	var temperatura;
	var FahrenheitCentigrados;

	temperatura=document.getElementById('txtIdTemperatura'). value;

	temperatura=parseInt(temperatura);

	FahrenheitCentigrados=temperatura-32*5/9;

	alert (temperatura+" farenheit son "+ FahrenheitCentigrados +" centigrados");

}

function CentigradosFahrenheit () 

{
	var temperatura;
	var CentigradosFahrenheit;

	temperatura=document.getElementById('txtIdTemperatura'). value;

	temperatura=parseInt(temperatura);

	CentigradosFahrenheit=temperatura*9/5+32;

	alert (temperatura+" centigrados son "+ CentigradosFahrenheit+" farenheit");
	
}
