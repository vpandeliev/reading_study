$(document).ready(function() {
    num = $('#stages_nav').attr('num');
	width = $('#mobile_shrinky').width();
	//console.log(width);
	//console.log(Math.round(width/num));
    
    $('.stage').css('width', ((width - 4) / num) + 'px');
    //$('.stage').width((width-4)/num+"px");
    
    $('.tablink', this).bind('click', function(){
        currtab = $(this);
        $('.tablink').removeClass('on');
        currtab.addClass('on');
        $('.tab').hide();
        $('#' + currtab.attr('id') + 'box').show();
    
    });
    
    
});
