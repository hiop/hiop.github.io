/*
	Caminar by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/
	var START_MARGIN = 0,
		ADDITIONAL_MARGIN = 5,
		stages;
(function($) {
	stages = $('.map .stage'),
		margin_bottom = START_MARGIN;
	
	for(var s in stages) { 
		if( stages.hasOwnProperty(s) ) 
		{
			if( stages[s] === stages.length) break;
			$(stages[s]).css('top', margin_bottom)
			margin_bottom = parseInt($(stages[s]).css('top')) + parseInt($(stages[s]).css('height'))+ADDITIONAL_MARGIN;
			
			
		}
	}
	
	$('.map .stage').click(function(){
		
		$(".overlay").fadeIn(100);
		$(".mia-info").fadeIn(300);
	})
	
	$(".overlay").click(function(){
		$(".overlay").fadeOut(300);
		$(".mia-info").fadeOut(100);
	})
})(jQuery);