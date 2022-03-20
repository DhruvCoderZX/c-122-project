screen_width=0;
screen_height=0;
apple=apple.png;
speak_data="" ;
to_number= Number(content);
if(Number.isInteger(to_number))

screen_width = window.innerWidth;
for(var i=1; i<= to_number; i++)
{
    x= Math.floor(math.random() *700);
    y= Math.floor(math.random() *400);
    Image(apple,x,y,50,50);
}

function preload()
{
    loadImage()
}

document.hetElementById("status").innerHTML= to_number +"Apples Drawn";