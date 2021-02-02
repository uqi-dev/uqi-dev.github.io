
//Hide/show nav

$(document).ready(function(){
	
	$(window).scroll(function(){

		if ($(this).scrollTop() < 50 ) {
             //hide nav bg

			$('nav').removeClass('top-nav');

		} else{

			//show nav bg

			$('nav').addClass('top-nav');
		}

	});
})