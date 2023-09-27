$(document).foundation()

function scrollBottom(el) {
	var div = el + '-last';
	document.getElementById(div).scrollIntoView(true);
}

$('a.sections__item').on('click', function(){
	var sectionToShow = $(this).data('switch');
	$('.sections__item, .channel').removeClass('active');
	$(this).addClass('active');
	$('#'+sectionToShow).addClass('active');
	scrollBottom(sectionToShow);
});


$('.js-emoji').on('click', function(){
	$('.emoji-roll').toggleClass('active');
	setTimeout(function(){
		$('.emoji-roll').removeClass('active')
	}, 2500);
});