var numSquares=6;
var colors=GenerateRandomColors(numSquares);

var square=document.querySelectorAll(".square")
var pickedColor=pickColor()
var colorDisplay=document.getElementById('colorDisplay')
var messageDisplay=document.querySelector("#message")
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn")
var hardBtn=document.querySelector("#hardBtn")


//Easy btn

easyBtn.addEventListener("click",function(){
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  numSquares=3;
  colors=GenerateRandomColors(numSquares);
  pickedColor=pickColor();
  colorDisplay.textContent=pickedColor;
  for(var i=0;i<square.length;i++){
  	if(colors[i]){
	square[i].style.backgroundColor=colors[i];
   }else{
   	square[i].style.display="none";
   }
}


});

//hard btn

hardBtn.addEventListener("click",function(){
   hardBtn.classList.add("selected");
   easyBtn.classList.remove("selected");
   numSquares=6;
  colors=GenerateRandomColors(numSquares);
  pickedColor=pickColor();
  colorDisplay.textContent=pickedColor;
  for(var i=0;i<square.length;i++){
	square[i].style.backgroundColor=colors[i];
   	square[i].style.display="block";
   }

});






// play again button
resetButton.addEventListener("click",function(){
	//Generate all new colors
	colors=GenerateRandomColors(numSquares);
	// pick new random color from array
	pickedColor=pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent=pickedColor;
	messageDisplay.textContent="";
	resetButton.textContent="New colors"
	//change color of squares
	for(var i=0;i<square.length;i++){
	square[i].style.backgroundColor=colors[i];
   }
   h1.style.backgroundColor="steelblue";
});
colorDisplay.textContent=pickedColor;



for(var i=0;i<square.length;i++){
	//add intial colors to squares
	square[i].style.backgroundColor=colors[i];

	//add click listeners to squares
	square[i].addEventListener("click",function(){
        // grab color of clicked square;
       var clickedcolor=this.style.backgroundColor;
       // compare color to picked color
       if(clickedcolor === pickedColor){
       	messageDisplay.textContent="correct";
       	resetButton.textContent="Play Again?"
       	changeColors(clickedcolor);
       	h1.style.backgroundColor=clickedcolor;
       }
       else{
       	this.style.backgroundColor="#232323";
       	messageDisplay.textContent="try again"
       }
	});	
}

//function change colors
function changeColors(color){
	//loop through all squares
	for(var i=0;i<square.length;i++){
	// change each color to match given color
	  square[i].style.backgroundColor=color;

	}
}


// Pick color(to pick a random color from colors array)
function pickColor(){
	var random=Math.floor(Math.random() * colors.length);
	return colors[random];

}


// Function for generating random rgb colors

function GenerateRandomColors(num){
	// make an empty array
	var arr=[]
	// repeat num times
	for(var i=0;i<num;i++){
		//get random color and push into arr
		arr.push(RandomColor())
	}
	//return array
	return arr;

}
// this function is called in GenerateRandomColors
function RandomColor(){
	//pick a "red" from 0-255
	var r=Math.floor(Math.random()*256)
	//pick a "green" from 0-255
	var g=Math.floor(Math.random()*256)
	//pick a "blue" from 0-255
	var b=Math.floor(Math.random()*256)
	return "rgb("+ r +", " + g +", " + b +")";

}









