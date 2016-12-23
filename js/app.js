$(document).ready(function() {

	/* nav dropdown menu */
	if ($(window).width() > 992) {
		$('ul.nav li.dropdown').hover(function() {
			//$(this).find('.dropdown-menu').stop(true, true).fadeIn();
			//$(this).find('.dropdown-menu').stop(true, true).slideDown();
			$(this).find('.dropdown-menu').removeClass('animated flipOutY').addClass('animated rubberBand');
			$(this).addClass('open');
		}, function() {
			//$(this).find('.dropdown-menu').stop(true, true).fadeOut();
			//$(this).find('.dropdown-menu').stop(true, true).slideUp();
			//$(this).find('.dropdown-menu').removeClass('animated flipInY').addClass('animated flipOutY');
			$(this).removeClass('open');
		});
	}

	/* remove focus from bootstrap btn */
	$('.btn').focus(function(event) {
		event.target.blur();
	});

	/* remove empty p tag */
	$('p').each(function() {
		var $this = $(this);
		if ($this.html().replace(/\s|&nbsp;/g, '').length == 0)
			$this.remove();
	});

	/* remove error image */
	$("img").error(function() {
		$(this).hide();
	});

	/* window scroll */
	// $fn.scrollSpeed(step, speed, easing);
	jQuery.scrollSpeed(100, 600);

});

String.prototype.replaceArray = function(find, replace) {
	var replaceString = this;
	var regex;
	for (var i = 0; i < find.length; i++) {
		regex = new RegExp(find[i], "g");
		replaceString = replaceString.replace(regex, replace[i]);
	}
	return replaceString;
};

document.getElementById('cir2lat').addEventListener('click', function(event) {
	event.preventDefault();
	var text = document.getElementById('text').value;
	var find = ["Џ", "џ", "Љ", "љ", "Њ", "њ", "Ђ", "ђ", "Ђ", "ђ", "а", "б", "в", "г", "д", "е", "ж", "з", "и", "ј", "к", "л", "љ", "м", "н", "о", "п", "р", "с", "т", "ћ", "у", "ф", "х", "ц", "ч", "ш", "А", "Б", "В", "Г", "Д", "Е", "Ж", "З", "И", "Ј", "К", "Л", "Љ", "М", "Н", "Њ", "О", "П", "Р", "С", "Т", "Ћ", "У", "Ф", "Х", "Ц", "Ч", "Џ", "Ш"];
	var replace = ["Dž", "dž", "Lj", "lj", "Nj", "nj", "Đ", "đ", "Dj", "dj", "a", "b", "v", "g", "d", "e", "ž", "z", "i", "j", "k", "l", "lj", "m", "n", "o", "p", "r", "s", "t", "ć", "u", "f", "h", "c", "č", "š", "A", "B", "V", "G", "D", "E", "Ž", "Z", "I", "J", "K", "L", "Lj", "M", "N", "Nj", "O", "P", "R", "S", "T", "Ć", "U", "F", "H", "C", "Č", "Dž", "Š"];
	text = text.replaceArray(find, replace);
	document.getElementById('text').value = text;
}, false);

document.getElementById('lat2cir').addEventListener('click', function(event) {
	event.preventDefault();
	var text = document.getElementById('text').value;
	var find = ["Dž", "dž", "Lj", "lj", "Nj", "nj", "Đ", "đ", "Dj", "dj", "a", "b", "v", "g", "d", "e", "ž", "z", "i", "j", "k", "l", "lj", "m", "n", "o", "p", "r", "s", "t", "ć", "u", "f", "h", "c", "č", "š", "A", "B", "V", "G", "D", "E", "Ž", "Z", "I", "J", "K", "L", "Lj", "M", "N", "Nj", "O", "P", "R", "S", "T", "Ć", "U", "F", "H", "C", "Č", "Dž", "Š"];
	var replace = ["Џ", "џ", "Љ", "љ", "Њ", "њ", "Ђ", "ђ", "Ђ", "ђ", "а", "б", "в", "г", "д", "е", "ж", "з", "и", "ј", "к", "л", "љ", "м", "н", "о", "п", "р", "с", "т", "ћ", "у", "ф", "х", "ц", "ч", "ш", "А", "Б", "В", "Г", "Д", "Е", "Ж", "З", "И", "Ј", "К", "Л", "Љ", "М", "Н", "Њ", "О", "П", "Р", "С", "Т", "Ћ", "У", "Ф", "Х", "Ц", "Ч", "Џ", "Ш"];
	text = text.replaceArray(find, replace);
	document.getElementById('text').value = text;
}, false);

/*document.getElementById('prepis').addEventListener('change', function(event) {
	if (document.getElementById('prepis').value == 'cir2lat') {
		event.preventDefault();
		var text = document.getElementById('text').value;
		var find = ["Џ", "џ", "Љ", "љ", "Њ", "њ", "Ђ", "ђ", "Ђ", "ђ", "а", "б", "в", "г", "д", "е", "ж", "з", "и", "ј", "к", "л", "љ", "м", "н", "о", "п", "р", "с", "т", "ћ", "у", "ф", "х", "ц", "ч", "ш", "А", "Б", "В", "Г", "Д", "Е", "Ж", "З", "И", "Ј", "К", "Л", "Љ", "М", "Н", "Њ", "О", "П", "Р", "С", "Т", "Ћ", "У", "Ф", "Х", "Ц", "Ч", "Џ", "Ш"];
		var replace = ["Dž", "dž", "Lj", "lj", "Nj", "nj", "Đ", "đ", "Dj", "dj", "a", "b", "v", "g", "d", "e", "ž", "z", "i", "j", "k", "l", "lj", "m", "n", "o", "p", "r", "s", "t", "ć", "u", "f", "h", "c", "č", "š", "A", "B", "V", "G", "D", "E", "Ž", "Z", "I", "J", "K", "L", "Lj", "M", "N", "Nj", "O", "P", "R", "S", "T", "Ć", "U", "F", "H", "C", "Č", "Dž", "Š"];
		text.value = text.replaceArray(find, replace);
		document.getElementById('text').value = text;
	} else if (document.getElementById('prepis').value == 'lat2cir') {
		event.preventDefault();
		var text = document.getElementById('text').value;
		var find = ["Dž", "dž", "Lj", "lj", "Nj", "nj", "Đ", "đ", "Dj", "dj", "a", "b", "v", "g", "d", "e", "ž", "z", "i", "j", "k", "l", "lj", "m", "n", "o", "p", "r", "s", "t", "ć", "u", "f", "h", "c", "č", "š", "A", "B", "V", "G", "D", "E", "Ž", "Z", "I", "J", "K", "L", "Lj", "M", "N", "Nj", "O", "P", "R", "S", "T", "Ć", "U", "F", "H", "C", "Č", "Dž", "Š"];
		var replace = ["Џ", "џ", "Љ", "љ", "Њ", "њ", "Ђ", "ђ", "Ђ", "ђ", "а", "б", "в", "г", "д", "е", "ж", "з", "и", "ј", "к", "л", "љ", "м", "н", "о", "п", "р", "с", "т", "ћ", "у", "ф", "х", "ц", "ч", "ш", "А", "Б", "В", "Г", "Д", "Е", "Ж", "З", "И", "Ј", "К", "Л", "Љ", "М", "Н", "Њ", "О", "П", "Р", "С", "Т", "Ћ", "У", "Ф", "Х", "Ц", "Ч", "Џ", "Ш"];
		text.value = text.replaceArray(find, replace);
		document.getElementById('text').value = text;
	} else {
		
	}
}, false);*/