$(function(){
	var cvs = $('#c').get(0);
	var ctx = cvs.getContext('2d');
	
	//スタイル
	ctx.fillStyle = '#000000';
	
	var img = new Image();
	$(img).load(function() {
		//画像: 200 x 300
		
		
		//画像: 60 x 90
		
		
		//画像: サムネール 150 x 150
		
	});
	img.src = 'https://fbcdn-sphotos-a.akamaihd.net/hphotos-ak-snc7/487197_355742364498833_1233057609_n.jpg';
	
	//補助線
	guide.lesson04(ctx);
});