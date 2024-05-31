/******************************************************/
/**************APPLY BACKGROUND IMAGE******************/
/******************************************************/
jQuery('.bg-image').each(function(){
    var url = jQuery(this).attr("data-image");
    if(url){
        jQuery(this).css("background-image", "url(" + url + ")");
    }
});
/******************************************************/
/**********ACTOR PHOTOGRAPHER SECTION******************/
/******************************************************/
jQuery(document).ready(function($){
    // When Actor or Photographer is clicked
    $('.ap-button').on('click', function(e){
        e.preventDefault();
        $('.actor-photographer-section.active').removeClass('active');
        $('.ap-section.active').toggleClass('active');
        let section = $(this).data('section');
        $('.'+section).toggleClass('active');
    });
    // When Footer home is clicked
    $('#home-link').on('click', function(e){
        $('.ap-section.active').toggleClass('active');
        $('.actor-photographer-section').addClass('active');
    });
});
/******************************************************/
/******************************************************/
/******************************************************/
/******************************************************/
/******************************************************/
/******************************************************/
/******************************************************/
/******************************************************/
/******************************************************/