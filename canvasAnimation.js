window.addEventListener("load", drawLogo);

var startTime=new Date(); //sets the variable start time to equal date 
drawLogo();
		
function drawLogo() // Draws MMU text
	{
		canvas=document.getElementById('myCanvas'); // connects myCanvas html id tag
  		context=canvas.getContext('2d');
		context.font ="Bold 60px Arial"; // sets style, size, font of text
		context.textAlign = "center";
		context.fillStyle="#0055A4";
		context.fillText("MMU", 125,140); //sets text position
		requestAnimationFrame(drawNewFrameLogo); // tells the browser that i want to perform animation and requests a function to update before 
	}

function clearCanvasLogo () //clears the canvas so animation can repeat
	{
		context.fillStyle="#FFFFFF";
		context.fillRect(0,0,240,240);
	}
	
function drawNewFrameLogo() 	//updates the canvas to draw new circle
	{
		var currentTime=new Date(); //updates to current time
		var timeDiff = currentTime - startTime; // stores difference between start and current time
		var circleRads =(timeDiff/Math.PI*2) /200; // time difference is converted to radians
		
		if (circleRads < Math.PI*2)  // if radius is less than math.PI*2 then carry out the below
		{
			context.fillStyle="0055FF"; // sets color to mmu blue
			context.beginPath();
			context.arc(125,125,110,0,circleRads); //draw a line that connects the ends of the circle to the canvas centre
			context.lineTo(125,125);
			context.stroke();
			context.closePath();
			context.fill(); // fills shape with color set my fillStyle
		}
		
		else
		{ //or else reset radius to 0, clear canvas and restart the start time
		
			circleRads=0;
			clearCanvasLogo();
			startTime=new Date();
		
		}
	
		//draws white circle in centre to create the appearance of a blue ring
		context.fillStyle="#FFFFFF";
		context.beginPath();
		context.arc(125,125,90,0,Math.PI*2);
		context.closePath();
		context.fill();
		context.fillStyle="#0055FF";
		context.fillText("MMU",125,140);
	
		requestAnimationFrame(drawNewFrameLogo); // tells the browser that i want to perform animation and requests a function to update before 
}