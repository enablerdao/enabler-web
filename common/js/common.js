$(function(){

	$("#op").delay(1800).fadeOut(800);

	// $("#menuButton, #globalNav a").click( function(){
	// 	$("#globalNav").fadeToggle(300);
	// 	$("#menuButton").toggleClass("active");
	// });
	$("#menuButton, #globalNav a").click( function(){
		if (window.matchMedia("(max-width: 820px)").matches) {
			$("#globalNav").fadeToggle(300);
			$("#menuButton").toggleClass("active");
		}
	});
	$(window).resize(function() {
		$("#menuButton").removeClass("active");
		if (window.matchMedia("(max-width: 820px)").matches) {
			$("#globalNav").fadeOut(300);
		} else {
			$("#globalNav").fadeIn(300);
		}
	});

  $(window).scroll(function (){
		$(".anim, #photo .photoWrap > div").each(function(){
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

  $('.inner-link').on("click", function() {
		var speed = 400;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$('body,html').animate({scrollTop:position}, speed, 'swing');
		return false;
	});

  $(".slider").slick({
    autoplay:true,//自動再生する
    autoplaySpeed: 4000,//自動再生するスピード 4秒
    speed: 900,
    fade: false,//フェードする
    infinite:true,//無限にスライドする
    slidesToShow: 2, // 表示するスライドの数
    arrows: true, // 矢印の表示
    dots:true,//ドット部分を表示する
		centerMode: true,//スライドを中心に表示して、部分的に前後のスライドが見えるように設定
    centerPadding: "15%",//centerMode時に前後のスライドが見える幅（px or ％）（初期値：50px）
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

  // アコーディオン
  $("#about dt").on("click", function(){
		$(this).toggleClass("open");
		$(this).next("dd").slideToggle(300);
	});

  $(".modal").colorbox({
    rel:"modal", //このクラスをグループ化する
		speed: 300,
		next: "<span id=arrowNext></span>",
		previous: "<span id=arrowPrev></span>",
		inline: true, //隠しているhtmlタグをモーダルで表示する
		maxWidth:"90%",
		maxHeight:"80%",

    // 縦横比を保持して表示する場合
    width: "90%", // == ( window.innerWidth * 0.9 )
    height: ( window.innerWidth * 0.9 / 16 * 9 ), //縦横比を16：9で表示
    // ここまで

		width:752,
		height:680,
		opacity: 0.9,
    returnFocus: false, //Colorboxが閉じた時にフォーカス
		fixed: true //画面に固定する
	});

  $(window).scroll(function (){
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    var footer = $("footer").innerHeight();
    var documentHeight = $(document).height();

    if (scroll > documentHeight - footer - windowHeight){
      $(".ecLink a").addClass("on");
    } else {
      $(".ecLink a").removeClass("on");
    }
	});

});