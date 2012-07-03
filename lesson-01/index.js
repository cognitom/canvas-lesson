$(function(){
	var cvs = $('#c').get(0);
	var ctx = cvs.getContext('2d');
	
	//スタイル
	ctx.lineWidth = 5;
	ctx.strokeStyle = '#FF0000';
	
	//直線: 点A(50, 50)から点B(250,150)へ
	ctx.beginPath();
	ctx.moveTo(50, 50);
	ctx.lineTo(250, 150);
	ctx.stroke();
	
	//ベジェ曲線: 点A(50, 200)から点B(250,300)へ
	ctx.beginPath();
	ctx.moveTo(50, 200);
	ctx.bezierCurveTo(150, 200, 150, 300, 250, 300);
	ctx.stroke();
	
	//長方形: 点A(350, 50)から点B(200,100)へ
	ctx.beginPath();
	ctx.rect(350, 50, 200, 100);
	ctx.stroke();
	
	//円: 点A(450, 275)を中心に、半径75
	ctx.beginPath();
	ctx.arc(450, 275, 75, 0, 2 * Math.PI, false);
	ctx.stroke();
	
	//補助線
	guide.lesson01(ctx);
});