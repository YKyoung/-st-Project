$(function() {
	var $tabAnchor = $('.tabs-nav li');
	//var $tabPanel = $('.image-wrapper');
	var $tabPanel = $('.tabs-panel');

	$tabAnchor.click(function(e){
		e.preventDefault();
		/*
		$tabAnchor.find('a').removeClass('active');
		$(this).find('a').addClass('active');  */

		$(this).find('a').addClass('active');
		$(this).siblings().find('a').removeClass('active');


		$tabPanel.hide();

		var $targetIdx = $(this).index();
		//console.log($targetIdx);		
		
		$tabPanel.eq($targetIdx).show();
		console.log($targetIdx);
	});

	//$tabPanel.eq(0).show();
	$tabAnchor.eq(0).trigger('click');
});

