var guide = {
	lesson01: function(ctx){
		ctx.fillStyle = '#FFCCCC';
		ctx.strokeStyle = '#FFCCCC';
		ctx.lineWidth = 1;
		ctx.font = '12px Calibri';
		ctx.textAlign = 'center';
		ctx.textBaseline = 'middle';
		
		//直線
		ctx.beginPath(); ctx.arc(50, 50, 10, 0, 2 * Math.PI, false); ctx.fill();//始点
		ctx.beginPath(); ctx.arc(250, 150, 10, 0, 2 * Math.PI, false); ctx.fill();//終点
		ctx.fillText('A (50, 50)', 50, 50 - 25);
		ctx.fillText('B (250, 150)', 250, 150 - 25);
		
		//曲線 (ベジェ)
		ctx.beginPath(); ctx.arc(50, 200, 10, 0, 2 * Math.PI, false); ctx.fill();//始点
		ctx.beginPath(); ctx.arc(150, 200, 5, 0, 2 * Math.PI, false); ctx.fill();//始点のハンドル
		ctx.beginPath(); ctx.arc(150, 300, 5, 0, 2 * Math.PI, false); ctx.fill();//終点のハンドル
		ctx.beginPath(); ctx.arc(250, 300, 10, 0, 2 * Math.PI, false); ctx.fill();//終点
		ctx.beginPath();　ctx.moveTo(50, 200);　ctx.lineTo(150,200);　ctx.stroke();//始点のハンドル線
		ctx.beginPath();　ctx.moveTo(150, 300);　ctx.lineTo(250,300);　ctx.stroke();//終点のハンドル線
		ctx.fillText('A (50, 200)', 50, 200 - 25);
		ctx.fillText('Ha (150, 200)', 150, 200 - 15);
		ctx.fillText('Hb (150, 300)', 150, 300 + 15);
		ctx.fillText('B (250, 300)', 250, 300 - 25);
		
		//長方形
		ctx.beginPath(); ctx.arc(350, 50, 10, 0, 2 * Math.PI, false); ctx.fill();//始点
		ctx.beginPath(); ctx.arc(550, 150, 10, 0, 2 * Math.PI, false); ctx.fill();//終点
		ctx.fillText('A (350, 50)', 350, 50 - 25);
		ctx.fillText('B (550, 150)', 550, 150 + 25);
		
		//円
		ctx.beginPath(); ctx.arc(450, 275, 10, 0, 2 * Math.PI, false); ctx.fill();//中心
		ctx.beginPath(); ctx.arc(525, 275, 5, 0, 2 * Math.PI, false); ctx.fill();//円弧の開始点
		ctx.beginPath();　ctx.moveTo(450, 275);　ctx.lineTo(525, 275);　ctx.stroke();//半径
		ctx.fillText('A (450, 275)', 450, 275 - 25);
		ctx.fillText('r = 75', 487, 275 + 10);
	},
	lesson02: function(ctx){
		ctx.fillStyle = '#FFCCCC';
		ctx.strokeStyle = '#FFCCCC';
		ctx.lineWidth = 1;
		ctx.font = '12px Calibri';
		ctx.textAlign = 'center';
		ctx.textBaseline = 'middle';
		
		//直線
		ctx.beginPath(); ctx.arc(250, 150, 10, 0, 2 * Math.PI, false); ctx.fill();//A
		ctx.beginPath(); ctx.arc(50, 50, 10, 0, 2 * Math.PI, false); ctx.fill();//B
		ctx.beginPath(); ctx.arc(50, 200, 10, 0, 2 * Math.PI, false); ctx.fill();//C
		ctx.beginPath(); ctx.arc(150, 200, 5, 0, 2 * Math.PI, false); ctx.fill();//Cのハンドル
		ctx.beginPath(); ctx.arc(150, 300, 5, 0, 2 * Math.PI, false); ctx.fill();//Dのハンドル
		ctx.beginPath(); ctx.arc(250, 300, 10, 0, 2 * Math.PI, false); ctx.fill();//D
		ctx.beginPath();　ctx.moveTo(50, 200);　ctx.lineTo(150,200);　ctx.stroke();//Cのハンドル線
		ctx.beginPath();　ctx.moveTo(150, 300);　ctx.lineTo(250,300);　ctx.stroke();//Dのハンドル線
		ctx.fillText('A (250, 150)', 250, 150 - 25);
		ctx.fillText('B (50, 50)', 50, 50 - 25);
		ctx.fillText('C (50, 200)', 50, 200 - 25);
		ctx.fillText('Hc (150, 200)', 150, 200 - 15);
		ctx.fillText('Hd (150, 300)', 150, 300 + 15);
		ctx.fillText('D (250, 300)', 250, 300 - 25);
		
		//長方形
		ctx.beginPath(); ctx.arc(350, 50, 10, 0, 2 * Math.PI, false); ctx.fill();//始点
		ctx.beginPath(); ctx.arc(550, 150, 10, 0, 2 * Math.PI, false); ctx.fill();//終点
		ctx.fillText('A (350, 50)', 350, 50 - 25);
		ctx.fillText('B (550, 150)', 550, 150 + 25);
		
		//円
		ctx.beginPath(); ctx.arc(450, 275, 10, 0, 2 * Math.PI, false); ctx.fill();//中心
		ctx.beginPath(); ctx.arc(525, 275, 5, 0, 2 * Math.PI, false); ctx.fill();//円弧の開始点
		ctx.beginPath();　ctx.moveTo(450, 275);　ctx.lineTo(525, 275);　ctx.stroke();//半径
		ctx.fillText('A (450, 275)', 450, 275 - 25);
		ctx.fillText('r = 75', 487, 275 + 10);
	},
	lesson03: function(ctx){
		ctx.fillStyle = '#FFCCCC';
		ctx.strokeStyle = '#FFCCCC';
		ctx.lineWidth = 1;
		ctx.font = '12px Calibri';
		ctx.textAlign = 'center';
		ctx.textBaseline = 'middle';
		
		ctx.beginPath(); ctx.arc(150, 50, 5, 0, 2 * Math.PI, false); ctx.fill();
		ctx.beginPath();　ctx.moveTo(50, 50);　ctx.lineTo(250,50);　ctx.stroke();
		ctx.beginPath(); ctx.arc(150, 70, 5, 0, 2 * Math.PI, false); ctx.fill();
		ctx.beginPath();　ctx.moveTo(50, 70);　ctx.lineTo(250,70);　ctx.stroke();
		ctx.beginPath(); ctx.arc(150, 90, 5, 0, 2 * Math.PI, false); ctx.fill();
		ctx.beginPath();　ctx.moveTo(50, 90);　ctx.lineTo(250,90);　ctx.stroke();
		
		ctx.beginPath(); ctx.arc(450, 50, 5, 0, 2 * Math.PI, false); ctx.fill();
		ctx.beginPath();　ctx.moveTo(350, 50);　ctx.lineTo(550,50);　ctx.stroke();
		ctx.beginPath(); ctx.arc(450, 70, 5, 0, 2 * Math.PI, false); ctx.fill();
		ctx.beginPath();　ctx.moveTo(350, 70);　ctx.lineTo(550,70);　ctx.stroke();
		ctx.beginPath(); ctx.arc(450, 90, 5, 0, 2 * Math.PI, false); ctx.fill();
		ctx.beginPath();　ctx.moveTo(350, 90);　ctx.lineTo(550,90);　ctx.stroke();
		
		ctx.beginPath(); ctx.arc(50, 200, 5, 0, 2 * Math.PI, false); ctx.fill();
		ctx.beginPath();　ctx.moveTo(50, 200);　ctx.lineTo(550,200);　ctx.stroke();
		ctx.beginPath(); ctx.arc(50, 250, 5, 0, 2 * Math.PI, false); ctx.fill();
		ctx.beginPath();　ctx.moveTo(50, 250);　ctx.lineTo(550,250);　ctx.stroke();
		
		ctx.beginPath(); ctx.arc(50, 350, 5, 0, 2 * Math.PI, false); ctx.fill();
		ctx.beginPath();　ctx.moveTo(50, 350);　ctx.lineTo(550,350);　ctx.stroke();
	},
	lesson04: function(ctx){
		ctx.fillStyle = '#FFCCCC';
		ctx.strokeStyle = '#FFCCCC';
		ctx.lineWidth = 1;
		ctx.font = '12px Calibri';
		ctx.textAlign = 'center';
		ctx.textBaseline = 'middle';
		
		ctx.beginPath(); ctx.arc(50, 50, 10, 0, 2 * Math.PI, false); ctx.fill();//始点
		ctx.beginPath(); ctx.rect(50, 50, 200, 300); ctx.stroke();
		ctx.fillText('A (50, 50)', 50, 50 - 25);
		ctx.fillText('200', 150, 50 - 10);
		ctx.fillText('300', 50 - 15, 200);
		
		ctx.beginPath(); ctx.arc(300, 50, 10, 0, 2 * Math.PI, false); ctx.fill();//始点
		ctx.beginPath(); ctx.rect(300, 50, 60, 90); ctx.stroke();
		ctx.fillText('A (300, 50)', 300, 50 - 25);
		ctx.fillText('60', 330, 50 - 10);
		ctx.fillText('90', 300 - 10, 95);
		
		ctx.beginPath(); ctx.arc(400, 50, 10, 0, 2 * Math.PI, false); ctx.fill();//始点
		ctx.beginPath(); ctx.rect(400, 50, 150, 150); ctx.stroke();
		ctx.fillText('A (400, 50)', 400, 50 - 25);
		ctx.fillText('150', 475, 50 - 10);
		ctx.fillText('150', 400 - 15, 125);
	}
}