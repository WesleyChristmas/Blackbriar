$(document).ready(function(){ 
  $("#myTab a").click(function(e){
    e.preventDefault();
    $(this).tab('show');
  });

$(window).scroll(function(){
	        if(document.body.scrollTop > 10)
	            $('#toppanel').addClass( "main_menu_wrap_scrolled" );
	        else   
	            $('#toppanel').removeClass( "main_menu_wrap_scrolled" );
	    });
	 
	    $('a#srolltotop').click(function(){
	        $('html, body').animate({scrollTop:0}, 100);
	        return false;
	    });

});
