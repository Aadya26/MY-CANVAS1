canvas = document.getElementById("canvas1");
color = "black"
ctx= canvas.getContext("2d");
Width_of_line=2;
var mouseEvent="empty";
var last_position_of_x,last_position_of_y;

canvas.addEventListener("mousedown",mousedown1);
function mousedown1(e)
{
    color= document.getElementById("input_color").value;
    mouseEvent="Mousedown";
    console.log(color);
}
canvas.addEventListener("mousemove",mousemove1);
function mousemove1(e)
{
    current_position_of_x=e.clientX-canvas.offsetLeft;
    current_position_of_y=e.clientY-canvas.offsetTop;
  if (mouseEvent=="Mousedown")
  {
      ctx.beginPath();
      ctx.strokeStyle=color;
      ctx.moveTo(last_position_of_x,last_position_of_y);
      ctx.lineTo(current_position_of_x,current_position_of_y);
      ctx.stroke();

  } 
  last_position_of_x=current_position_of_x;
  last_position_of_y=current_position_of_y;
}
function Clear()
{
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
    
    
}
