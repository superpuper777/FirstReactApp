jQuery(document).ready(function($) {
	// window.onbeforeunload = function (evt) {
		// var message = "Document 'foo' is not saved. You will lost the changes if you leave the page.";
		// if (typeof evt == "undefined") {
			// evt = window.event;
		// }
		// if (evt) {
			// evt.returnValue = message;
		// }
		// return message;
	// }

	$('.main_text table ').wrap('<div class="table-responsive"></div>');
	
	win_width= $(window).width();
	
	$('[data-toggle="tooltip"]').tooltip();
	
    var $allVideos = $("iframe[src^='http://player.vimeo.com'], iframe[src^='https://player.vimeo.com'], iframe[src^='//player.vimeo.com'], iframe[src^='http://www.youtube.com'], iframe[src^='https://www.youtube.com'], iframe[src^='//www.youtube.com'], object, embed");
    var main_text_block= $(".main_text");
	var new_width = $(main_text_block).width();	
	
	$allVideos.each(function() {
		console.log($(this).width()+'-'+new_width);
		if($(this).width()> new_width) {
		  $(this) 
			.attr('data-aspectRatio', this.height / this.width)
			.removeAttr('height')
			.removeAttr('width');
		}
	
	});
	
	$(window).resize(function() {
	$allVideos.each(function() {
		var $el = $(this);
		if($el.attr('data-aspectRatio')) {
			console.log('1');
			$el.width(new_width).height(new_width * $el.attr('data-aspectRatio'));  
		}
	});
	
	}).resize();
	
	$(window).resize(function(){
		if((win_width<= 1200&& $(window).width()> 1200)|| (win_width> 1200&& $(window).width()<= 1200)) {
			location.reload();
		}
	});
	
	
	if(win_width < 1200){
		// $('.single_articel').find('div.wp-caption').each(function(){
			// $(this).css({'width': '100%'});
		// });
		
		$('#site_left_menu').css({'opacity': '1'});
		
		$('.responsive_tabs').tabCollapse();
		
		$(document).mouseup(function (e) {
			var container = $("#menu-glavnoe-menyu").parent('nav');
			if (container.has(e.target).length === 0 && $(container).hasClass('in')){
				$('.navbar-toggle').click();
			}
		});

		$("#site_left_menu").mmenu({
			classes: 'mm-slide',
			counters: {
				add: true,
				update: true
			},
			header: {
				add: true,
				update: true,
				title: 'Меню сайта'
			},
			dragOpen: {
				open: true
			}
		});
		
		$('#site_main_menu').remove();
		
	}

	
	if(win_width > 1200) {
		$('#click-menu').remove();
		
		$('ul > .current-menu-item > a').each(function(){
			active_text= $(this).html();
			$(this).replaceWith('<span>'+active_text+'</span>');
		});
		
		$('#site_main_menu').css({'opacity': '1'});
		$('#site_left_menu, #left_menu_call').remove();
		
		$('#fixed_header').affix({
			offset: {
				top: 180
			}
		});
	
	}
	
	$('.carousel').carousel({  
	  interval: 6000 
	});

	//$.cookie('show_other_hide', null);
	
	$('.single_articel').find('table').addClass('table table-striped table-condensed');
	
	$('.search_form_button').click(function(){
		if(!$('#searchform_head input').val().length) {
			$('#searchform_head').toggleClass('head_form_active');
		} else {
			$('#searchform_head').submit();
		}
	});
	
	$(document).click(function(event){
		if (!$(event.target).closest(".search_form_button").length && !$(event.target).closest("#searchform_head").length) {
			$('#searchform_head').removeClass('head_form_active');
			$('#searchform_head input').val('');
		}
	});	
	
    $('.smooth_scroll a[href^="#"], #toc_container a[href^="#"], #scroll_to_top_button').click(function() {
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top-120}, 500);
        return false;
    });
	
	$('form[role="search"]').submit(function(event){
		if(!$(this).find('input[type=text]').val().length){
			//alert('Введите поисковый запрос!');
			$(this).find('input[type=text]').css({'border': '1px solid #FF0000'});
			return false;
		} else {
			return true;
		}
	});
	
	$('aside .widget_wysija:first').addClass('subscribe_widget');

	switch(show_other_pos_num){
		case 1:
		case 3:
		case 5:
		case 6:
			var show_other_pos_wrap= {'right': '-330px'}
			var show_other_pos_wrap_show= {'right': '0px'}
			var show_other_pos_butt= {'left': '-29px'}
			var show_other_arrow= 'fa fa-angle-left';
			
			var left_side_share_top= {'top': '35%'}
			break
		case 2:
		case 4:
			var show_other_pos_wrap= {'left': '-330px'}
			var show_other_pos_wrap_show= {'left': '0px'}
			var show_other_pos_butt= {'right': '-29px'}
			var show_other_arrow= 'fa fa-angle-right';
			
			var left_side_share_top= {'top': '20%'}
			break
	}
	
	var show_other_block= $('#show_other');
	var show_other_show= $('.show_other_show');
	var show_other_close= $('.show_other_close');
	
	$(show_other_block).css(show_other_pos_wrap).show();
	$(show_other_show).css(show_other_pos_butt).show();
	$(show_other_show).children('i').removeClass().addClass(show_other_arrow);
	
	$('.left_side_share').css(left_side_share_top);
	
	$(show_other_close).css(show_other_pos_butt);
	
	$(show_other_close).click(function(){
		$(this).hide();
		$(show_other_show).show();
		$(show_other_block).css(show_other_pos_wrap);	
		$.cookie('show_other_hide', 'hide');
	});
	
	$(show_other_show).click(function(){
		$(this).hide();
		$(show_other_close).show();
		$(show_other_block).css(show_other_pos_wrap_show);
	});
	
	$(window).scroll(function(){
		var aside_height= $('.main_text').outerHeight()- 600;

		if($('#scroll_to_top_button').attr('data-show')){
			var scroll_to_top_button_show= $('#scroll_to_top_button').attr('data-show');
		} else {
			var scroll_to_top_button_show= 500;
		}
				
		if($(this).scrollTop()> scroll_to_top_button_show){
			$('#scroll_to_top_button').css({'opacity': '1'});
		} else {
			$('#scroll_to_top_button').css({'opacity': '0'});
		}

		if($(this).scrollTop()> aside_height){
			if($.cookie('show_other_hide')!= 'hide') {
				$(show_other_block).css(show_other_pos_wrap_show);
				$(show_other_show).hide();
				$(show_other_close).show();
			}
		} else {		
			$(show_other_block).css(show_other_pos_wrap);
			$(show_other_show).show();
			$(show_other_close).hide();
		}
	});
	
});   
//ready

function addLink() {
   var body_element = document.getElementsByTagName('body')[0];   
   var selection;      selection = window.getSelection();
   var pagelink = "<br/>Источник: <a href='"+document.location.href+"'>"+document.location.href+"</a>";  
   var copytext = selection + pagelink;      var newdiv = document.createElement('div');    
   newdiv.style.position='absolute';      newdiv.style.left='-99999px';      body_element.appendChild(newdiv); 
   newdiv.innerHTML = copytext;      selection.selectAllChildren(newdiv);      window.setTimeout(function() {   
   body_element.removeChild(newdiv);      },0);   
}  

document.oncopy = addLink;
   
function left_side_share_pos() {
	var left_side_share_left = jQuery('div.container').offset().left;
	jQuery('.left_side_share').css({'left': left_side_share_left - 60 + 'px'});
}