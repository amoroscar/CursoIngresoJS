/*Amor Oscar
tomar datos
*/
function mostrar()
{	
	var nombre;
	var respuesta;
	var edad;
	var sexo;
	var estadoCivil;
	var nombreMayor;
	var banderaTemperatura;
	var mayorTemperatura;
	var mayoresViudos;
	var sumaEdadSoltero;
	var mayoresConTemp;
	var promedioSoltero;
	var cantSoltViudo;
	var hombresViudos;
	var hombresSolteros;

	hombresSolteros=0;
	hombresViudos=0;
	promedioSoltero=0;
	sumaEdadSoltero=0;
	mayoresViudos=0;
	mayoresConTemp=0;
	banderaTemperatura=0;
	respuesta="si";

	while(respuesta=="si")
	{
		nombre=prompt("Ingresar nombre");

		edad=prompt("Ingresar edad");
		edad=parseInt(edad);
		while(isNaN(edad)==true)
		{
			edad=prompt("ERROR, ingrese numero para la edad");
		}

		sexo=prompt("ingrese f ó m .");
		while(sexo!="f"&&sexo!="m")
		{
			sexo=prompt("ERROR, Ingrese f para femenino o m para masculino");
		}

		estadoCivil=prompt("Ingrese Estado civil soltero, casado o viudo");
		while(estadoCivil!="soltero"&& estadoCivil!="casado"&& estadoCivil!="viudo")
		{
			estadoCivil=prompt("ERROR, Ingrese f para femenino o m para masculino");
		}

		temperatura=prompt("Ingrese temperatura");
		temperatura=parseInt(temperatura);
		while(isNaN(temperatura)==true)
		{
			temperatura=prompt("ERROR, ingrese temperatura en numero");
		}

		if(banderaTemperatura==0)
		{
			mayorTemperatura=temperatura;
			banderaTemperatura=1
			nombreMayor=nombre;
		}
		else
		{
			if (mayorTemperatura<temperatura)
			{
				mayorTemperatura=temperatura;
				nombreMayor=nombre;
			}
		}

		switch(estadoCivil)
		{
			case "viudo":
				if (edad>17)
				{
					mayoresViudos=mayoresViudos+1;
				}
				if (sexo=="m")
				{
					hombresViudos=hombresViudos+1;
				}
				break;
			case"soltero":
				if (sexo=="m")
				{
					hombresSolteros=hombresSolteros+1;
					sumaEdadSoltero=sumaEdadSoltero+edad;
				}
				break;
		}

		if (edad>60 && temperatura>38)
		{
			mayoresConTemp=mayoresConTemp+1;
		}

		respuesta=prompt("si para continuar");
	}

	cantSoltViudo=hombresSolteros+hombresViudos;

	if(hombresSolteros>0)
	{
		promedioSoltero=sumaEdadSoltero/hombresSolteros;
	}
	
	alert("Nombre de la persona con mas temperatura: "+nombreMayor);
	alert("Mayores de edad viudos: "+mayoresViudos);
	alert("Cantidad de hombres solteros o viudos: "+cantSoltViudo);
	alert("Personas de tercera edad con mas de 38 de temperatura: "+mayoresConTemp);
	alert ("El promedio de edad entre los hombres solteros es: "+promedioSoltero);

}
