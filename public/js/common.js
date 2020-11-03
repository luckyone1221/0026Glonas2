"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var $ = jQuery;
var JSCCommon = {
	body: document.querySelector("body"),
	modalCall: function modalCall() {
		$(".link-modal").fancybox({
			arrows: false,
			infobar: false,
			touch: false,
			type: 'inline',
			autoFocus: false,
			i18n: {
				en: {
					CLOSE: "Закрыть",
					NEXT: "Вперед",
					PREV: "Назад"
				}
			}
		});
		$(".modal-close-js").click(function () {
			$.fancybox.close();
		});
		$.fancybox.defaults.backFocus = false;
		$(".link-modal").click(function () {
			var th = $(this);
			var modal = $(th.attr('href'));
			var content = {
				title: th.data('title'),
				text: th.data('text'),
				btn: th.data('btn'),
				order: th.data('order')
			};
			modal.find('.h2').html(content.title); // modal.find('.after-headline').html(content.text);
			// modal.find('.btn').val(content.btn);
			// modal.find('.order').val(content.order);
		});
	}
};

function eventHandler() {
	JSCCommon.modalCall();
	var swiper4 = new Swiper('.sExample__slider--js', {
		// slidesPerView: 5,
		slidesPerView: 1,
		watchOverflow: true,
		spaceBetween: 30,
		loop: true,
		slideToClickedSlide: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true
		},
		lazy: {
			loadPrevNext: true
		},
		breakpoints: {
			// when window width is >= 320px
			768: {
				slidesPerView: 2
			}
		}
	}); //Replace all SVG images with inline SVG

	$('img.img-svg ').each(function () {
		var $img = $(this);
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');
		$.get(imgURL, function (data) {
			// Get the SVG tag, ignore the rest
			var $svg = $(data).find('svg'); // Add replaced image's classes to the new SVG

			if (typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass + ' replaced-svg');
			} // Remove any invalid XML tags as per http://validator.w3.org


			$svg = $svg.removeAttr('xmlns:a'); // Check if the viewport is set, if the viewport is not set the SVG wont't scale.

			if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
				$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'));
			} // Replace image with new SVG


			$img.replaceWith($svg);
		}, 'xml');
	});

	function CustomSvgManagment() {
		var allImg = document.querySelectorAll('img.img-svg');
		if (allImg.length === 0) return; //console.log(allImg);
	} //CustomSvgManagment();


	$(".main-wrapper").after('<div class="pixel-perfect" style="background-image: url(screen/01.png);"></div>');
	var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

	if (isIE11) {
		$("body").prepend("<p   class=\"browsehappy container\">\u041A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u0432\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0435 \u0443\u0441\u0442\u0430\u0440\u0435\u0432\u0448\u0438\u0439 \u0431\u0440\u0430\u0443\u0437\u0435\u0440. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, <a href=\"http://browsehappy.com/\" target=\"_blank\">\u043E\u0431\u043D\u043E\u0432\u0438\u0442\u0435 \u0432\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440</a>, \u0447\u0442\u043E\u0431\u044B \u0443\u043B\u0443\u0447\u0448\u0438\u0442\u044C \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C, \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u043C\u043E\u0433\u043E \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430 \u0438 \u043F\u043E\u0432\u044B\u0441\u0438\u0442\u044C \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C.</p>");
	} // First we get the viewport height and we multiple it by 1% to get a value for a vh unit


	var vh = window.innerHeight * 0.01; // Then we set the value in the --vh custom property to the root of the document

	document.documentElement.style.setProperty('--vh', "".concat(vh, "px")); // We listen to the resize event

	window.addEventListener('resize', function () {
		// We execute the same script as before
		var vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
	}); //luckyone js
	//breadcrumbs

	var breadSl = new Swiper('.breadcrumb-slider-js', {
		slidesPerView: 'auto',
		freeMode: true,
		freeModeMomentum: true,
		watchOverflow: true
	}); //mob mnu

	$('.burger-js').click(function () {
		$('.burger-js, .menu-c--js').toggleClass('active');
		$('body').toggleClass('fixed');
	});

	function closeMobMnu() {
		$('.burger-js, .menu-c--js').removeClass('active');
		$('body').removeClass('fixed');
	}

	window.addEventListener('resize', function () {
		if (window.matchMedia("(min-width: 1200px)").matches) {
			closeMobMnu();
		}
	}, {
		passive: true
	}); //table slider

	var TableSlider = new Swiper('.table-slider-js', {
		slidesPerView: 'auto',
		freeMode: true,
		freeModeMomentum: true,
		watchOverflow: true,
		lazy: {
			loadPrevNext: true,
			loadPrevNextAmount: 100
		}
	}); //

	var feedbackSlider = new Swiper('.feedback-slider-js', {
		slidesPerView: 'auto',
		loop: true,
		spaceBetween: 31,
		//
		lazy: {
			loadPrevNext: true,
			loadPrevNextAmount: 4
		},
		//
		navigation: {
			prevEl: '.feedback-prev--js',
			nextEl: '.feedback-next--js'
		},
		//pagination
		pagination: {
			el: $(this).find('.feedback-pugin--js'),
			clickable: true
		}
	}); //

	function currYear() {
		var all = document.querySelectorAll('.curr-year-js');
		var currYear = new Date().getFullYear();

		var _iterator = _createForOfIteratorHelper(all),
				_step;

		try {
			for (_iterator.s(); !(_step = _iterator.n()).done;) {
				var item = _step.value;
				item.innerHTML = currYear;
			}
		} catch (err) {
			_iterator.e(err);
		} finally {
			_iterator.f();
		}
	}

	currYear(); //end luckyone js
}

;

if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}