currentX = 0;
currentY = 0;
previousX = 0;
previousY = 0;
down = false;

function draw(){
	drawContext = drawSpace.getContext("2d");
	drawContext.fillStyle="yellow";
	drawContext.fillRect(0,0,500,500);
	drawContext.fill();
}



Template.quiz2.rendered = function(){

	draw();

	document.getElementById("drawSpace").addEventListener('mousemove', function(e){
	  	currentX = e.pageX - 100;
	  	currentY = e.pageY - 230;
	  	document.getElementById("position").innerHTML = "x: " + currentX + " y: " + currentY;

	  	if(down){
      		drawContext.beginPath();
		    drawContext.moveTo(previousX, previousY);
		    drawContext.lineTo(currentX, currentY);
		    drawContext.strokeStyle = "black";
		    drawContext.lineWidth = 10;
		    drawContext.stroke();
		    drawContext.closePath();
	  	}
	  	previousX = currentX;
	  	previousY = currentY;

	  }
	);

	document.getElementById("drawSpace").addEventListener('mousedown', function(e){
	  		down = true;
	  		previousX = currentX;
	  		previousY = currentY;
	  		
	  }
	);

	document.getElementById("drawSpace").addEventListener('mouseup', function(e){
			
			down = false;


	  }
	);


}


Template.quiz2.events({
	"click #erase": function(event){
			draw();
	},
})
