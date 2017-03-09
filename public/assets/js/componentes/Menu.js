!function($) {
	"use strict";

	var Menu = function() {
		this.init();
	};

	Menu.prototype.init = function() {
		$(document).on('click', '.evtMenu', this.triggerMenu);
		$(document).on('click', '.evtSubMenu', this.triggerSubMenu);
		$(document).on('click', '.evtAsideMenu', this.triggerAsideMenu);
		$(window).on('scroll', this.scrollAside);
	};

	Menu.prototype.triggerMenu = function() {
		$(this).toggleClass('open');
		$('.menu').toggleClass('open');
	};

	Menu.prototype.triggerSubMenu = function() {
		var el = $(this);

		var sub = el.data('sub-menu');
		el.find('span').toggleClass('open');
		
		$('ul[rel="' + sub + '"]').slideToggle('slow');
	};

	Menu.prototype.triggerAsideMenu = function() {
		var menu = $(this).data("menu");

		$("aside ul li a").removeClass("active");
		$(this).addClass("active");

		$("form[data-formulario").addClass("hide");
		$("form[data-formulario='form-" + menu + "']").removeClass("hide");
	};

	Menu.prototype.scrollAside = function() {
		var scroll = $(window).scrollTop();
		
		if (scroll > 110) {
			$('aside').addClass('fixed');
		} else {
			$('aside').removeClass('fixed');
		}
	};

	$.Menu = new Menu;
	$.Menu.Constructor = Menu;
}(window.jQuery);