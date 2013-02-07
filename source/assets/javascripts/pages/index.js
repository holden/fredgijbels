/*device check
---------------------*/

var isMobile = false;

if( navigator.userAgent.match(/Android/i) || 
	navigator.userAgent.match(/webOS/i) ||
	navigator.userAgent.match(/iPhone/i) || 
	navigator.userAgent.match(/iPad/i)|| 
	navigator.userAgent.match(/iPod/i) || 
	navigator.userAgent.match(/BlackBerry/i)){
					
		isMobile = true;
				
}

$(document).ready(function(){

	/*epic hover plugin
	---------------------*/
	
	$(function() {
	
		$('.thumb').epicHoverFadeZoom({
			 
				overlayColor:'#fff',						//Hex: #xxxx
				fontColor:'#000',							//Hex: #xxxx
				captionDirection:'topToBottom', 			//String: caption slide in/out direction
				opacity: 0.8,								//Integer: 0-1
				transitionSpeed:600,						//Integer: transitions speed, in milliseconds
				easing:'swing',								//String: easing method - see http://jqueryui.com/demos/effect/easing.html
				padding: 0,									//Integer: padding
				mobileActive:false,							//Boolean: whether to activate/deactivate for mobile
				zoom:50										//Integer: zoom factor
			 
		});	
	
	});
	
	/*epic fullscreen plugin
	---------------------*/
	
	/*$(function() {
	
		$('.epicFullscreen').epicFullscreen({
		 
			opacity:0.3,
			background:'#fff',
			pattern:true
		 
		 });	
			
	});*/

});

/*twitter plugin
---------------------*/

$(function(){

  $("#filter").tweet({
	count: 1,
	fetch: 20,
	filter: function(t){ return ! /^@\w+/.test(t["tweet_raw_text"]); },
	username: "udfrance"
  });
  
});


/*grid
---------------------*/

/*init*/
$(function(){

	var cols = 3
	var masonry = $('#grid');

	calculateCols();

	// initialize masonry
	masonry.imagesLoaded(function(){
		
		masonry.masonry({
			itemSelector: '.thumb',
			isResizable: true,
			columnWidth:Math.floor((masonry.width()/ cols))
		  });
		
	});
	
  /*resize*/
  $(window).resize(function(){
		
		
		calculateCols();
		
		masonry.imagesLoaded(function(){
		
		  masonry.masonry({
			itemSelector: '.thumb',
			isResizable: false,
			 isAnimated: false,
			columnWidth:Math.floor((masonry.width() / cols))
		  });
	
		});
		
	});
	
	function calculateCols (){
	
		if(masonry.width() <= 426){
		
			 cols=2;
		 
		}else{
	
			cols=3;
	
		}
	}

});