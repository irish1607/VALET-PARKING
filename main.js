canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

car2_width = 75;
car2_height = 100;

background_image = "parkingLot.jpg";
car2_image = "car2.png";

//Set initial position for a car image.
car2_x = 5;
car2_y = 225;

function add() {
	//upload car, and background images on the canvas
	background_imgTag = new Image();
	background_imgTag.onload =uploadBackground;
	background_imgTag.src =background_image;

	car2_imgtag = new Image();
	car2_imgtag.onload = uploadcar_2;
	car2_imgtag.src = car2_image;
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

	//Define function ‘uploadBackground’

}

function uploadcar2() {
	ctx.drawImage( car2_imgtag, car2_x, car2_y, car2_width, car2_height);
	

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)

	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if(keyPressed == '38')
		{
			car2_up();
			console.log("up arrow key");
		}
		if(keyPressed == '40')
		{
			car2_down();
			console.log("down arrow key");
		}
		if(keyPressed == '37')
		{
			car2_left();
			console.log("left arrow key");
		}
		if(keyPressed == '39')
		{
			car2_right();
			console.log("right arrow key");
		}
		
		


function up()
{
	if(car2_y >=0)
	{
		car2_y = car2_y - 10;
		console.log("When up arrow is pressed,  x = " + car2_x + " | y = " +car2_y);
		 uploadBackground();
		 uploadcar2();

	}
}
function car2_down()
{
	if(car2_y <=500)
	{
		car2_y =car2_y + 10;
		console.log("When down arrow is pressed,  x = " + car2_x + " | y = " +car2_y);
		uploadBackground();
		 uploadcar2();
	}
}
function car2_left()
{
	if(car2_x >= 0)
	{
		car2_x =car2_x - 10;
		console.log("When left arrow is pressed,  x = " + car2_x + " | y = " +car2_y);
		uploadBackground();
		 uploadcar2();
	}
}
function car2_right()
{
	if(car2_x <= 700)
	{
		car2_x =car2_x + 10;
		console.log("When right arrow is pressed,  x = " + car2_x + " | y = " +car2_y);
		uploadBackground();
		uploadcar2();
   }
}
