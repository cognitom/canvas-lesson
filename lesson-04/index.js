$(function(){
	var cvs = $('#c').get(0);
	var ctx = cvs.getContext('2d');
	
	//スタイル
	ctx.fillStyle = '#000000';
	
	var img = new Image();
	$(img).load(function() {
		ctx.drawImage(img, 50, 50, 200, 300);
		ctx.drawImage(img, 300, 50, 60, 90);
		ctx.drawImage(img, 0, 450, 300, 300, 400, 50, 150, 150);
	});
	img.src = 'https://fbcdn-sphotos-a.akamaihd.net/hphotos-ak-snc7/487197_355742364498833_1233057609_n.jpg';
	
	//補助線
	guide.lesson04(ctx);
});