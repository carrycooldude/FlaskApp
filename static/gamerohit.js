var radius = 100;
let x,y,d;
let score = 0;
let r,g,b;
let timer = 15;

function setup()
{
    createCanvas(411,823);
    x = random(411);
    y = random(823);
    r = random(255);
    g = random(255);
    b = random(255);
}
function draw()
{   
    background(43, 216, 199);
    fill(r, g ,b);
    noStroke();
    ellipse(x, y, radius*2, radius*2);
    textSize(20);
    fill(0);
    text("Score : " + score ,10 ,30);
    
    if(frameCount % 60 == 0 && timer > 0){
        timer--;
      }
    if (timer == 0){
        textSize(50);
        fill(0);
        text("GAME OVER", 20, 375);
        noLoop();
    }
    textSize(15);
    fill(0);
    text("Time Remaining : " + timer, 10 ,50);
    
}

//mouse click event
function mousePressed()
{
    let d = dist(mouseX, mouseY, x, y);
    if(d<radius)
    {   newCircle();
        score++
        if(score==10)
        {
        radius = radius/2;
        }
    }
}
//generating random circle
function newCircle() 
{
    x = random(411);
    y = random(823);
    r = random(255);
    g = random(255);
    b = random(255);
}
setInterval(newCircle,1000);