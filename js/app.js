const nav = document.getElementById('nav');
const menuBtn = document.getElementById('menu');

$(menuBtn).click(function() {
	$(this).css("animation", "move 1s ease-out");
	$(this).addClass('hide');
	$(nav).css("animation", "move 1s ease-out");
	$(nav).removeClass('hide');
	$(nav).addClass('show');
});