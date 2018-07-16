$(document).ready(function() {

	function text_ani(){
		$('ul.active_txt>li').each(function(){
			var _delay = $(this).index() * 150;
			$(this).stop(true).delay(_delay).animate({'opacity':1},400);
		});
	}
	text_ani();

	// gnb
	$('.gnb_btn a').on('click', function(e){
		e.preventDefault();
		if($(this).hasClass('on') == false){
			$(this).addClass('on');
			$('.gnb').hide();
			$('#header').removeClass('m');
		}else{
			$(this).removeClass('on');
			$('.gnb').show();
			$('#header').addClass('m');
		}
	});
	

	// work detail silder
	$('.work_detail').slick({
		//dots: true,
		//mobileFirst: true,
		arrows: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true
	});   

	//wrok item
	$('.work_lst>.lst').on({
		click : function(){
			var slideIndex = $('.lst').index( this );
            var slider = $('.work_detail');
			$('#layer_workdetail').fadeIn('slow');
			$("html,body").stop().animate({'scrollTop':'80px'},300);
			$('.work_detail').slick('slickGoTo', parseInt(slideIndex));
		},
		mouseenter : function(){
			$(this).find('.item_infobg').stop().fadeIn();
			$(this).find('.item_infotxt').stop().fadeIn();
		},
		mouseleave : function(){
			$(this).find('.item_infobg').stop().fadeOut();
			$(this).find('.item_infotxt').stop().fadeOut();
		}
	});

	//layerpop close
	$('.layerpop_close>button').click(function(){
		var work_position = $('#work').position();
		//alert(work_position);
		$(this).parents().parents('.layerpop_wrap').hide();
		$("html,body").animate({'scrollTop':work_position.top+'px'},300);
	});
	$('.layerpop_mask').click(function(){
		$('.layerpop_close>button').trigger( "click" );
	});

	
	//gnb move
	$('.gnb li a').click(function(e){
		var posY = $($(this).attr("href")).position();		
		$("html,body").stop().animate({'scrollTop':posY.top},300);
		e.preventDefault();
		if($('#header').hasClass('m')==true){
			$('.gnb_btn a').trigger( "click" );
		}
	});

	// header
	$(window).scroll(function(){
  		var scrollTop = $(document).scrollTop();
  		var visualH = $('.main_visual').height()-$('#header').height();
  		var lypcloseT = $('.work_detail .tit').height()+100;

		if($(this).scrollTop() >= visualH){
        	$('#header').addClass('on');
		}
		if($(this).scrollTop() < visualH){
			$('#header').removeClass('on');
		}
		if($(this).scrollTop() > lypcloseT){
		 	$('.layerpop_close').addClass('fxd');
		}else{
			$('.layerpop_close').removeClass('fxd');
		}

  	});

});

