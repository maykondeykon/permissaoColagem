$(document).ready(function(){

	var objeto = $('#textA');
	objEdit(false);
	var name = $( "#name" );
	var password = $( "#password" );

	function objEdit(estado){
		if (estado) {
			objeto.attr('readonly', false);
			objeto.attr('disabled', false);
		}
		else{
			objeto.attr('readonly', true);
			objeto.attr('disabled', true);
		};
	}


	$( "#btColar" ).click(function() {
		$("#validateTips").text('');
		$('#formValidaUser').each (function(){
			this.reset();
		});
		$( "#dialog-form" ).dialog( "open" );
	});

	$( "#dialog-form" ).dialog({
		autoOpen: false,
		width: 350,
		modal: true,
		buttons: [
		{
			text: "Validar",
			click: function() {
				var valida = validarUsuario(name.val(),password.val());
				if (valida) {
					objEdit(true);
					$( this ).dialog( "close" );
				}else{
					updateTips('Usu\u00E1rio inv\u00E1lido');
				};
			}
		},
		{
			text: "Cancelar",
			click: function() {
				$( this ).dialog( "close" );
			}
		}
		]
	});

	function updateTips( t ) {
		$("#validateTips")
		.text( t )
		.addClass( "ui-state-highlight" );
		setTimeout(function() {
			$("#validateTips").removeClass( "ui-state-highlight", 1500 );
		}, 500 );
	}

	function validarUsuario(name,password){
		if (name != '' && password != '') {
			if (name == 'maykon' && password =='123') {
				return true;
			};
		};
		return false;
	}

});
