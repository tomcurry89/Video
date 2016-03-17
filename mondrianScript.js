window.addEventListener( 'load' , drawMondrian );


function drawMondrian()
	{
	
		var canvas=document.getElementById( 'myCanvas' );
		var context=canvas.getContext ( '2d' );
		

		for (var y=0; y <=100; y++) // Default 0 rectangles and while there are less than 100 rectangles, add another
			{
				context.strokeRect(Math.random()*400, Math.random()*400, Math.random()*220, Math.random()*220);
				// strokeRect method generates rectangles with black border and white interior
				// Math.random function creates a random number/. First 2 arguments related to position x,y. Last 2 arguments sets random rectangles at
				// minimum size of 220
			
			}
	}