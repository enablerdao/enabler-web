$(function(){

	$("#op").delay(4500).fadeOut(100);

	$("#menuButton, #globalNav a").click( function(e){
    e.stopPropagation();
		$("#globalNav").fadeToggle(300);
		$("#menuButton").toggleClass("active");
	});

  $(document).on('click', function (e) {
    if (!$('#globalNav').is(e.target) && $('#globalNav').has(e.target).length === 0 && !$('#menuButton').is(e.target)) {
      $('#globalNav').fadeOut(300);
      $("#menuButton").removeClass("active");
    }
  });

  $(window).scroll(function (){
		$(".anim").each(function(){
			var imgPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
      var scrollHeight = windowHeight/5;
      

			if (scroll > imgPos - windowHeight + scrollHeight){
				$(this).addClass("on");
			} else {
				$(this).removeClass("on");
			}
		});

		$(".pageTop").each(function(){
			var imgPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      var scrollHeight = windowHeight/5;
      
//			if (window.matchMedia("(max-width: 880px)").matches) {
//				var scrollHeight = windowHeight/5;
//			} else {
//				var scrollHeight = windowHeight/4;
//			}

			if (scroll > scrollHeight) {
				$(this).fadeIn(600);
			} else {
				$(this).fadeOut(600);
			}

			var mainHeight = $("main").innerHeight();
			var storyHeight = $("#story").innerHeight();
			var messageHeight = $("#message").innerHeight();

			if (imgPos >  mainHeight - storyHeight - messageHeight) {
				$(this).addClass("on");
			} else {
				$(this).removeClass("on");
			}

		});
	});

});

$(document).ready(function() {
  // Menu Button Toggle
  $('#menuButton').on('click', function() {
    $(this).toggleClass('active');
    $('nav').toggleClass('open');
  });

  // Smooth Scroll
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    var target = $(this.hash);
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });

  // Property Title Animation
  $(window).on('scroll', function() {
    $('.propertyTitle').each(function() {
      if ($(this).offset().top <= $(window).scrollTop() + $(window).height() * 0.8) {
        $(this).addClass('on');
      }
    });
  });

  // Initialize Slick Slider
  $('.propertySlider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000
  });

  // Page Top Button
  var $pageTop = $('.pageTop');
  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 300) {
      $pageTop.fadeIn();
    } else {
      $pageTop.fadeOut();
    }
  });

  $pageTop.on('click', function() {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
});