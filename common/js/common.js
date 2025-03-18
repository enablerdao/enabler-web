$(function(){

	$("#op").delay(1800).fadeOut(800);

	$("#menuButton, #globalNav a").click( function(){
		$("#globalNav").fadeToggle(300);
		$("#menuButton").toggleClass("active");
	});

  $(window).scroll(function (){
		$(".anim").each(function(){
			var imgPos = $(this).offset().top;
			var scroll = $(window).scrollTop();

			var windowHeight = $(window).height();
			if (window.matchMedia("(max-width: 880px)").matches) {
				var scrollHeight = windowHeight/5;
			} else {
				var scrollHeight = windowHeight/3;
			}

			if (scroll > imgPos - windowHeight + scrollHeight){
				$(this).addClass("on");
			} else {
				$(this).removeClass("on");
			}
		});
	});

  $(".propertySlider.left").slick({
    autoplay:true,//自動再生する
    autoplaySpeed: 0,//自動再生するスピード 4秒
    speed: 10000,
		cssEase: "linear",
    fade: false,//フェードする
    infinite:true,//無限にスライドする
    slidesToShow: 2, // 表示するスライドの数
    arrows: false, // 矢印の表示
    dots:false,//ドット部分を表示する
		centerMode: true,//スライドを中心に表示して、部分的に前後のスライドが見えるように設定
    centerPadding: "17.4%",//centerMode時に前後のスライドが見える幅（px or ％）（初期値：50px）
    pauseOnFocus: false,//フォーカスで一時停止
    pauseOnHover: false,//マウスホバーで一時停止
    pauseOnDotsHover: false,//ドットナビをマウスホバーで一時停止
    responsive: [{
      breakpoint: 821,
      settings: {
        slidesToShow: 1,
      }
    }]
  });
  $(".propertySlider.right").slick({
    autoplay:true,//自動再生する
    autoplaySpeed: 0,//自動再生するスピード 4秒
    speed: 10000,
		cssEase: "linear",
    fade: false,//フェードする
    infinite:true,//無限にスライドする
    slidesToShow: 2, // 表示するスライドの数
    arrows: false, // 矢印の表示
    dots:false,//ドット部分を表示する
		centerMode: true,//スライドを中心に表示して、部分的に前後のスライドが見えるように設定
    centerPadding: "17.4%",//centerMode時に前後のスライドが見える幅（px or ％）（初期値：50px）
    pauseOnFocus: false,//フォーカスで一時停止
    pauseOnHover: false,//マウスホバーで一時停止
    pauseOnDotsHover: false,//ドットナビをマウスホバーで一時停止
		rtl: true,
    responsive: [{
      breakpoint: 821,
      settings: {
        slidesToShow: 1,
				centerPadding: "24.8%",
      }
    }]
  });

});