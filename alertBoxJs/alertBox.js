function Showalert(title,des,fn,dosth){
	$(".alert-box").remove();
	//根据参数判断是否显示去设置
	if(arguments.length == 4){
		var html = 	'<div class="alert-box">'+
						'<h5 class="alert-box-title">'+title+'</h5>'+
						'<p class="alert-box-con">'+des+'</p>'+
						'<div class="alert-box-btn">'+
							'<button class="dosth">'+dosth+'</button>'+
							'<button class="iknow">我知道了</button>'+
						'</div>'+
					'</div>';				
	}else {
		var html = 	'<div class="alert-box">'+
						'<h5 class="alert-box-title">'+title+'</h5>'+
						'<p class="alert-box-con">'+des+'</p>'+
						'<div class="alert-box-btn">'+
							'<button class="iknow">我知道了</button>'+
						'</div>'+
					'</div>';				
	}

	$("body").append(html);

	//执行去设置
	$(".alert-box-btn button.dosth").click(function(){
		fn();
		$(".alert-box").remove();
	})
}

Showalert.prototype.closes = function(){
	$(".alert-box-btn button.iknow").click(function(){
		$(".alert-box").remove();
	})
}