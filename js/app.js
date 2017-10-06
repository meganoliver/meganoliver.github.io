const nav = document.getElementById('nav');
const menuBtn = document.getElementById('menu');
const navBtns = document.getElementsByClassName('btn');

$(menuBtn).click(function() {
	$(this).css("animation", "move 1s ease-out");
	$(this).addClass('hide');
	$(nav).css("animation", "move 1s ease-out");
	$(nav).removeClass('hide');
	$(nav).addClass('show');
});

$("a[href='#header']").click(function() {
	$("html, body").animate({ scrollTop: 0 }, "slow");
	return false;
});

$(navBtns).click(function() {
	let link = $(this).text().toLowerCase();
	let div = document.getElementById(link);
	$('html, body').animate({
		scrollTop: $(div).offset().top}, 'slow');
});