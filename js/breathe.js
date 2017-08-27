function breathe(id,interval,speed) {
	//得到所有元素
	var $carousel = $(id);
	var $imageListLis = $carousel.find(".imageList li");
	var $circlesLis = $carousel.find(".circles li");
	var imageAmount = $imageListLis.length;
	
	//信号量
	var nowimg = 0;


	//右按钮的业务。
	function rightBtnFunc(){
		if(!$imageListLis.is(":animated")){
			//先改变信号量
			nowimg ++;
			if(nowimg > imageAmount - 1){
				nowimg = 0;
			}
			//掉用函数
			changePictureAndChangeCircles();
		}
	}

	//小圆点
	$circlesLis.click(function(){
		nowimg = $(this).index();
		changePictureAndChangeCircles();
	});

	function changePictureAndChangeCircles(){
		// 让所有的盒子淡出
		$imageListLis.stop(true).fadeOut(speed);
		// 让唯一一个盒子（信号量那个）淡入
		$imageListLis.eq(nowimg).stop(true).fadeIn(speed);
		// 小圆点
		$circlesLis.eq(nowimg).addClass("cur").siblings().removeClass("cur");
	}

	//定时器
	var timer = setInterval(rightBtnFunc,interval);

	$carousel.mouseenter(function() {
		clearInterval(timer);
	});

	$carousel.mouseleave(function() {
		clearInterval(timer);
		timer = setInterval(rightBtnFunc,interval);
	});
}