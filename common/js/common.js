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