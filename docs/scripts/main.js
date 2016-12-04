console.log('\'Allo \'Allo!');

$(document).ready(function(){

 	$('.Mycarusel').slick({

    	prevArrow:"<img class='a-left control-c prev slick-prev' src='../images/back.png'>",
    	nextArrow:"<img class='a-right control-c next slick-next' src='../images/right.png'>"

	});

	$('.Mycarusel2').slick({

		prevArrow:"<img class='a-left control-c prev slick-prev' src='../images/prev.png'>",
	    nextArrow:"<img class='a-right control-c next slick-next' src='../images/next.png'>",

	    slidesToShow: 4,
		slidesToScroll: 1

	});

	$('.Mycarusel3').slick({

		prevArrow:"<img class='a-left control-c prev slick-prev' src='../images/prev.png'>",
	    nextArrow:"<img class='a-right control-c next slick-next' src='../images/next.png'>"
	    
	});

});

