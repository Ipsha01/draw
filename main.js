var mouseEvent="empty";
var last_x,last_y;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="red";
width1=2
canvas.addEventListener("mousedown" , my_mousedown);

function my_mousedown(e)
{
    color=document.getElementById("color").value;
    width1=document.getElementById("width1").value;

    mouseEvent="mouseDown";
}
canvas.addEventListener("mousemove" , my_mousemove);
function my_mousemove(e)
{
    current_x=e.clientX - canvas.offsetLeft;
    current_y=e.clientY - canvas.offsetTop;

    if (mouseEvent=="mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle= color;
        ctx.lineWidth=width1;

        ctx.moveTo(last_x,last_y);
        ctx.lineTo(current_x, current_y);
        ctx.stroke();
    }
    last_x=current_x;
    last_y=current_y;
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent="mouseleave"
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseEvent="mouseUP";
}
function cleararea()
{
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}