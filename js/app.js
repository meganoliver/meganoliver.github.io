const menu = document.getElementById('nav-reveal');
const homeScreen = document.getElementById('header');
const hideDivs = document.getElementsByClassName('hide-div');
const navBtns = document.getElementsByClassName('btn');
const about = document.getElementById('about');
const portfolio = document.getElementById('projects');
const projects = document.getElementById('portfolio');
const home = document.getElementsByClassName('home-btn');


if($(window).width() > 1024) {
	$(hideDivs).removeClass('hide');

	$('.menu').click(function() {
		$(homeScreen).removeClass('show');
		$(homeScreen).addClass('hide');
		$(menu).removeClass('hide');
		$(menu).addClass('show');
	});

	$(navBtns).click(function() {
		let btn = $(this).text();
		$(menu).addClass('hide');
		$(menu).removeClass('show');
		if(btn === 'About') {
			$(about).removeClass('hide');
			$(about).addClass('show');	
		} else if(btn === 'Projects') {
			$(portfolio).removeClass('hide');
			$(projects).removeClass('hide');
			$(portfolio).addClass('show');
			$(projects).addClass('show');

		}
	});

	$(home).click(function() {
		let currentDiv = (this).parentNode;
		$(currentDiv).removeClass('show');
		$(currentDiv).addClass('hide')
	});
}
