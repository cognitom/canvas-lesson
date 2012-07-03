$(window).load(function(){
	var cvs = $('#c').get(0);
	var ctx = cvs.getContext('2d');
	
	//スタイル
	ctx.fillStyle = '#000000';
	
	//テキスト: 横揃え
	ctx.font = '18px sans-serif';
	ctx.textAlign = 'left';
	ctx.fillText('Hello canvas!', 150, 50);
	ctx.textAlign = 'center';
	ctx.fillText('Hello canvas!', 150, 70);
	ctx.textAlign = 'right';
	ctx.fillText('Hello canvas!', 150, 90);
	
	//テキスト: 縦揃え
	ctx.font = '18px sans-serif';
	ctx.textAlign = 'center';
	ctx.textBaseline = 'bottom';
	ctx.fillText('Hello canvas!', 450, 50);
	ctx.textBaseline = 'middle';
	ctx.fillText('Hello canvas!', 450, 70);
	ctx.textBaseline = 'top';
	ctx.fillText('Hello canvas!', 450, 90);
	
	//テキスト: 日本語
	ctx.textAlign = 'left';
	ctx.textBaseline = 'bottom';
	ctx.font = '24px "Hiragino Kaku Gothic Pro","ヒラギノ角ゴ Pro W3","Meiryo","メイリオ","ＭＳ Ｐゴシック",sans-serif';
	ctx.fillText('かな漢字まじり。ゴシック。', 50, 200);
	ctx.font = 'bold 32px "Hiragino Mincho Pro"';
	ctx.fillText('かな漢字まじり。太字明朝。', 50, 250);
	
	//テキスト: WEBフォント
	ctx.textAlign = 'left';
	ctx.font = 'normal 48px "Abril Fatface"';
	ctx.fillText('Web Fonts Available!', 50, 350);
	
	//補助線
	guide.lesson03(ctx);
});