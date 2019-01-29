$(document).ready(function(){

	var nav = $("#mobile-nav");
    
    $('.mobile-menu__icon').click(function(){
            $('.mobile-menu__icon').toggleClass('is-opened');
            $(nav).slideToggle();
    });
    


    // При изменении размера окна, в большую сторону, если меню было с крыто, показываем его.
	$(window).resize(function(){
		var w = $(window).width();
		if(w > 720 && nav.is(':hidden')) {
		    nav.removeAttr('style');
		}
	});

});