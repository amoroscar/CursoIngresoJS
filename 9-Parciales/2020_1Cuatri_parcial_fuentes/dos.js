//Amor Oscar

function mostrar()
{
  var respuesta;
  var tipoProducto;
  var cantidadBolsas;
  var precioBolsa;
  var cantidadArena;
  var cantidadCal;
  var cantidadCemento;
  var precioArena;
  var precioCal;
  var precioCemento;
  var precioBruto;
  var precioDescuento;
  var cantidadTotal;
  var precioTotalArena;
  var precioTotalCal;
  var precioTotalCemento;
  var mensajeB;
  var mensajeD;
  var mensajeF;

  cantidadBolsas=0;
  cantidadArena=0;
  cantidadCal=0;
  cantidadCemento=0;
  precioArena=0;
  precioCal=0;
  precioCemento=0;
  precioTotalArena=0;
  precioTotalCal=0;
  precioTotalCemento=0;

  respuesta="si";

  while(respuesta=="si")
  {
  	tipoProducto=prompt ("Ingrese producto: arena, cal o cemento");
  	while (tipoProducto!="arena"&&tipoProducto!="cal"&&tipoProducto!="cemento")
  	{
  		tipoProducto= prompt("Error, ingrese arena, cal o cemento ");
  	}

  	cantidadBolsas=prompt("Ingresar cantidad de bolsas");
  	cantidadBolsas=parseInt(cantidadBolsas);
  	while(isNaN(cantidadBolsas)==true)
  	{
  		cantidadBolsas=prompt("Error, ingresar numero.");
  	}

  	precioBolsa=prompt("Ingresar precio por bolsa");
  	precioBolsa=parseInt(precioBolsa);
  	while(isNaN(precioBolsa)==true||precioBolsa<1)
  	{
  		precioBolsa=prompt("Error, ingrese precio");
  	}

  	switch(tipoProducto)
  	{
  		case "arena":
  			cantidadArena=cantidadArena+cantidadBolsas;
  			precioArena=precioArena+precioBolsa;
  			precioTotalArena=precioArena*cantidadArena;
  			break;
  		case "cal":
  			cantidadCal=cantidadCal+cantidadBolsas;
  			precioCal=precioCal+precioBolsa;
  			precioTotalCal=precioCal*cantidadCal;
  			break;
  		default:
  			cantidadCemento=cantidadCemento+cantidadBolsas;
  			precioCemento=precioCemento+precioBolsa;
  			precioTotalCemento=precioCemento*cantidadCemento;
  			break;
  	}
  	respuesta=prompt("si para continuar");
  }

  precioBruto=precioTotalArena+precioTotalCal+precioTotalCemento;
  cantidadTotal=cantidadArena+cantidadCal+cantidadCemento;

  if (cantidadTotal>30)
  {	
  	porcentaje=25;
  	precioDescuento=precioBruto-(precioBruto*porcentaje/100);
  	mensajeB=" B)El importe a pagar con descuento es:"+precioDescuento;
  }
  else
  {
  	if (cantidadTotal>10)
  	{
  	 	porcentaje=15;
  	 	precioDescuento=precioBruto-(precioBruto*porcentaje/100);
  	 	mensajeB=" B)El importe a pagar con descuento es:"+precioDescuento;
  	}
  }

  if (cantidadArena>cantidadCal&&cantidadArena>cantidadCemento)
  {
  	mensajeD=" D)Arena producto con mas cantidad: "+cantidadArena+ " bolsas. ";
  }
  else
  {
  	if (cantidadCal>cantidadCemento)
  	{
  	 	mensajeD=" D)Cal producto con mas cantidad: "+cantidadCal+" bolsas. ";
  	}
  	else
  	{
  	 	mensajeD=" D)Cemento producto con mas cantidad: "+cantidadCemento+" bolsas. ";
  	}
  }

  if (precioTotalArena>precioTotalCal&&precioTotalArena>precioTotalCemento)
  {
   	mensajeF=" F) Arena producto mas caro: "+precioTotalArena+" $. "
  }
  else
  {
   	if (precioTotalCal>precioTotalCemento)
   	{
   		mensajeF=" F) Cal producto mas caro: "+precioTotalCal+" $. "
   	}
   	else
   	{
   		mensajeF=" F) Cemento producto mas caro: "+precioTotalCemento+" $. "
   	}
   }
   	

  alert(" A) El importe total a pagar bruto es: "+precioBruto+ mensajeB + mensajeD + mensajeF );
  
}
