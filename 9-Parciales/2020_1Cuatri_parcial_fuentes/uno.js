/*Amor Oscar 

*/

function mostrar()
{
	var tipo;
	var precio;
	var cantidadUnidades//>0 y <1001
	var marca;
	var fabricante;
	var contador;
	var cantidadBarbijos;
	var contadorBarbijos;
	var cantidadJabon;
	var contadorJabon;
	var cantidadAlcohol;
	var contadorAlcohol;
	var precioBarato;
	var cantidadBarato;
	var fabricanteBarato;
	var banderaAlcohol;

	cantidadUnidades=0;
	cantidadBarbijos=0;
	contadorBarbijos=0;
	cantidadJabon=0;
	contadorJabon=0;
	cantidadAlcohol=0;
	contadorAlcohol=0;
	cantidadBarato=0;
	banderaAlcohol=0;
	contador=0;

	while (contador<5)
	{
		contador=contador+1;

		tipo=prompt ("Ingresar Tipo de producto: barbijo, jabón o alcohol:");
		while (tipo!="barbijo"&&tipo!="jabón"&&tipo!="alcohol")
		{
			tipo=prompt ("Error, reingrese tipo:barbijo, jabón o alcohol ");
		}

		precio=prompt("Ingresar precio entre 100 y 300:")
		precio=parseInt(precio);
		while(isNaN(precio)==true||precio<100||precio>1000)
		{
			precio=prompt("Error, ingresar precio entre 100 y 300");
		}

		cantidadUnidades=prompt("Ingresar cantidad de unidades:");
		cantidadUnidades=parseInt(cantidadUnidades);
		while(isNaN(cantidadUnidades)==true|| cantidadUnidades<1 || cantidadUnidades>1000)
		{
			cantidadUnidades=prompt("Error,reingrese cantidad:");
		}

		marca=prompt("Ingresar marca:");

		fabricante=prompt("Ingresar fabricante:");

		switch(tipo)
		{
			case "barbijo":
				cantidadBarbijos=cantidadBarbijos+cantidadUnidades;
				contadorBarbijos=contadorBarbijos+1;
				break;
			case "jabón":
				cantidadJabon=cantidadJabon+cantidadUnidades;
				contadorJabon=contadorJabon+1;
				break;
			default:
				if (banderaAlcohol==0)
				{
					precioBarato=precio;
					banderaAlcohol=1;
					cantidadBarato=cantidadBarato+cantidadUnidades;
					fabricanteBarato=fabricante;
				}
				else
				{
					if(precioBarato>precio)
					{
						precioBarato=precio;
						cantidadBarato=cantidadBarato+cantidadUnidades;
						fabricanteBarato=fabricante;
					}
				}
				cantidadAlcohol=cantidadAlcohol+cantidadUnidades;
				contadorAlcohol=contadorAlcohol+1;
				break;
		}


	}
	if (cantidadBarbijos>cantidadJabon&&cantidadBarbijos>cantidadAlcohol) 
	{
		promedio=cantidadBarbijos/contadorBarbijos;
	}
	else
	{
		if(cantidadJabon>cantidadAlcohol)
		{
			promedio=cantidadJabon/contadorJabon;
		}
		else
		{
			promedio=cantidadAlcohol/contadorAlcohol;
		}
	}

	alert("A) La cantidad del alcohol más barato: "+cantidadBarato+" fabricante: "+fabricanteBarato);
	alert("B) El promedio de compra del producto con mas unidades es: " +promedio);
	alert("C) Unidades de jabones: "+cantidadJabon);
}
