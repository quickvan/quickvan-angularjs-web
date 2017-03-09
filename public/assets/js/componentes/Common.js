!function($) {
	"use strict";

	var Common = function() {
		this.init();
	};

	Common.prototype.init = function() {
		$('select').selectric();

		$('[data-mask=\'cep\']').mask('99999-999');
		$('[data-mask=\'cpf\']').mask('999.999.999-99');
		$('[data-mask=\'cnpj\']').mask('99999999999999');
		$('[data-mask=\'tel\']').mask('(99) 9999-9999');

		$(document).on('click', '.evtLoginReset', this.triggerLoginReset);
		$(document).on('click', '.evtOpenModal', this.triggerOpenModal);
		$(document).on('click', '.evtCloseModal', this.triggerCloseModal);
		$(document).on('click', '.evtClickCheck', this.triggerClickCheck);
		//$(document).on('submit', 'form[data-submit!=\'no\']', this.submitForm);
	};

	Common.prototype.triggerClickCheck = function() {
		if (this.checked) {
			$(".travelDateBack").attr("disabled", true).val("");
		} else {
			$(".travelDateBack").attr("disabled", false);
		}
	}; 

	Common.prototype.triggerLoginReset = function() {
		var el = $(this);
		
		if (!$(el).hasClass('auxLoginReset')) {
			$("#frmLogin").find("input[name='pass']").removeAttr('readonly').attr('required');
			$("#frmLogin").find("input[type='submit']").val('Entrar');

			$(el).html('Esqueci minha senha');			
		} else {
			$("#frmLogin").find("input[name='pass']").attr('readonly', 'true').removeAttr('required').val('');
			$("#frmLogin").find("input[type='submit']").val('Recuperar');

			$(el).html('Voltar ao login');
		}

		$(el).toggleClass('auxLoginReset');
	};

	Common.prototype.triggerOpenModal = function() {
		$('select').selectric();

		$('[data-mask=\'data\']').mask('99/99/9999');
		$('[data-mask=\'horario\']').mask('99:99');

		var modal = $(this).data('modal-rel');
			
		$('.bg-modal-content').fadeIn('fast');
		$('[data-modal=' + modal + ']').fadeIn('fast').addClass('active');

		console.log(modal);
	}

	Common.prototype.triggerCloseModal = function() {
		var modal = $(this).parent().data('modal');
			
		$('.bg-modal-content, .modal').fadeOut('fast');
		/*$('[data-modal=' + modal + ']').fadeOut('fast').removeClass('active');*/

		console.log(modal);
	}

	Common.prototype.submitForm = function() {
		var val = $(this).find('input[type=\'submit\']').val();

		$(this).find('input[type=\'submit\']').val('Aguarde...');

		var fields = $(this).serialize();
		var action = $(this).attr("action");
		
		$.post( 
			action, 
			fields,
			function(data) {
				$(this).find('input[type=\'submit\']').val(val);
			}
		);
	}

	$.Common = new Common;
	$.Common.Constructor = Common;
}(window.jQuery);