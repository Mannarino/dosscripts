(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

 $(document).ready(function() {
    $('select').material_select();
  });

  //script 1
  
  var densidad = document.getElementById('calcularDensidad');
  densidad.addEventListener("click",funcionCalcular); 

  var g_tierra= 9.8;
  var g_jupiter=24.8;
  var g_marte=3.7;
  var peso_final;
  var nombre;

function funcionCalcular(){
	var peso = document.getElementById('icon_prefix').value;
	var planeta = document.getElementById('planetas').value;
	var insertarPeso = document.getElementById('insertarPeso');
	console.log(peso);
	console.log(planeta);
	if (planeta==1) {
		peso_final=Math.round(peso*g_jupiter/g_tierra);
		console.log('tu peso en jupiter es'+peso_final);
		insertarPeso.innerHTML='jupiter es '+peso_final+' kilos';
	}
	else if (planeta==2) {
		peso_final=Math.round(peso*g_marte/g_tierra);
		console.log('tu peso en marte es'+peso_final);
		insertarPeso.innerHTML='marte es '+peso_final+' kilos';
	}
}

// script 2

  var botonIva = document.getElementById('calcularIva');
  botonIva.addEventListener("click",funcionCalcularIva); 

  function funcionCalcularIva(){
  	var ivaCorrespondiente;
  	var ivaTotal;

  	var cantidadIngresadaIva = document.getElementById('cantidadIva').value;
    var insertarIva = document.getElementById('insertarIva');
    var montoTotal = document.getElementById('insertarMontoTotal');
    var adicional = document.getElementById('aditionalInformation');
        adicional.innerHTML='';

		ivaCorrespondiente=Math.round(cantidadIngresadaIva*0.21);
		ivaTotal = parseInt(cantidadIngresadaIva) + parseInt(ivaCorrespondiente) ;

		insertarIva.innerHTML=ivaCorrespondiente;
		montoTotal.innerHTML=ivaTotal;

		if (ivaCorrespondiente>100) {
			adicional.innerHTML='estas pagando mas de 100 de iva';
			console.log('mucha')
		}
	}
  