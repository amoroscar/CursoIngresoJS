/*Amor Oscar TP12

RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	var edadIngresada;
 	var sexoIngresado;
 	var estadoCivilIngresado;
 	var sueldoBruto;
 	var legajo;
 	var nacionalidad;

 	//tomar variable y validad
 	edadIngresada=prompt ("Ingrese edad, entre 18 y 90 años inclusive");
 	while (isNaN(edadIngresada)==true|| edadIngresada<18||edadIngresada>90)
 	{
 		edadIngresada=prompt("Error, vuelva a ingresar edad");
 	}

 	sexoIngresado=prompt ("Ingrese sexo “M” para masculino y “F” para femenino");
 	while(sexoIngresado!="M"&&sexoIngresado!="F")
 	{
 		sexoIngresado=prompt("Error, reingrese “M” para masculino y “F” para femenino");
 	}

 	estadoCivilIngresado=prompt("Ingrese Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
 	while (isNaN(estadoCivilIngresado)==true||estadoCivilIngresado<1||estadoCivilIngresado>4)
 	{
 		estadoCivilIngresado=prompt("Error, reingrese estado civil:1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos.");
 	}

 	sueldoBruto= prompt ("Ingrese sueldo bruto no menor a 8000");
 	while (isNaN(sueldoBruto)==true||sueldoBruto<8000)
 	{
 		sueldoBruto=prompt("Error, reingrese sueldo bruto no menor a 8000:");
 	}

 	legajo=prompt("Ingrese numero de legajo");
 	while (isNaN(legajo)==true|| legajo<1000)
 	{
 		legajo=prompt("Error, el legajo debe ser numérico de 4 cifras, sin ceros a la izquierda");
 	}

 	nacionalidad=prompt("Ingrese Nacionalidad “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.");
 	while(nacionalidad!="A"&& nacionalidad!="E"&&nacionalidad!="N")
 	{
 		nacionalidad=prompt("Error, reingrese Nacionalidad “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.");
 	}

 	//operar con lo validado

 	if (sexoIngresado=="F")
 	{
 		sexoIngresado="femenino";
 	}
 	else
 	{
 		sexoIngresado="masculino";
 	}

 	switch(estadoCivilIngresado)
 	{
 		case "1":
 			estadoCivilIngresado="soltero";
 			break;
 		case "2":
 			estadoCivilIngresado="casado";
 			break;
 		case "3":
 			estadoCivilIngresado="Divorciado";
 			break;
 		default:
 			estadoCivilIngresado="Viudo";
 			break;
 	}

 	switch(nacionalidad)
 	{
 		case "A":
 			nacionalidad="Argentino";
 			break;
 		case "E":
 			nacionalidad="Extranjero";
 			break;
 		default:
 			nacionalidad="Nacionalizado";
 			break;
 	}

 	document. getElementById('txtIdEdad').value ="La edad validada es: "+edadIngresada;
 	document. getElementById('txtIdSexo').value="El sexo validado es: "+sexoIngresado;
 	document. getElementById('txtIdEstadoCivil').value="El estado civil validado es: "+estadoCivilIngresado;
 	document. getElementById('txtIdSueldo').value="El sueldo bruto validado es: "+sueldoBruto;
 	document. getElementById('txtIdLegajo').value="El legajo validado es: "+legajo;
 	document. getElementById('txtIdNacionalidad').value="La Nacionalidad validada es: "+nacionalidad;
 	

}
