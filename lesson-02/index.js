$(function(){
	var cvs = $('#c').get(0);
	var ctx = cvs.getContext('2d');
	
	//スタイル
	ctx.fillStyle = '#FF0000';
	
	//パス: 点A(250, 150)→点B(50,50)→点C(50, 200)→点D(250,300)
	ctx.beginPath();
	ctx.moveTo(250, 150);
	ctx.lineTo(50, 50);
	ctx.lineTo(50, 200);
	ctx.bezierCurveTo(150, 200, 150, 300, 250, 300);
	ctx.closePath();
	ctx.fill();
	
	//長方形: 点A(350, 50)から点B(200,100)へ
	ctx.beginPath();
	ctx.rect(350, 50, 200, 100);
	ctx.fill();
	
	//円: 点A(450, 275)を中心に、半径75
	ctx.beginPath();
	ctx.arc(450, 275, 75, 0, 2 * Math.PI, false);
	ctx.fill();
	
	//補助線
	guide.lesson02(ctx);
});