$(window).load(function(){
	var cvs = $('#c').get(0);
	var ctx = cvs.getContext('2d');
	
	//スタイル
	ctx.fillStyle = '#000000';
	
	//テキスト: 横揃え
	ctx.font = '18px sans-serif';
	ctx.textAlign = 'left';
	
	ctx.textAlign = 'center';
	
	ctx.textAlign = 'right';
	
	
	//テキスト: 縦揃え
	ctx.font = '18px sans-serif';
	ctx.textAlign = 'center';
	ctx.textBaseline = 'bottom';
	
	ctx.textBaseline = 'middle';
	
	ctx.textBaseline = 'top';
	
	
	//テキスト: 日本語
	ctx.textAlign = 'left';
	ctx.textBaseline = 'bottom';
	
	
	
	
	
	//テキスト: WEBフォント
	ctx.textAlign = 'left';
	
	
	
	//補助線
	guide.lesson03(ctx);
});