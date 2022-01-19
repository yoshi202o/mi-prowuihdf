 var bg;
 var player;
function preload (){
 bg = loadImage("pastizales.jpg");  
 player = loadImage("jugador.jpg")
}


function setup (){
createCanvas(1900,950);
p1 = createSprite(200,850)
}


function draw (){
background(20,20,10);
image(bg, 0,0,displayWidth*5, displayHeight);
//moviemto jugador
if (keyDown("RIGHT")){
    p1.x += 13
}

if (keyDown("LEFT")){
    p1.x -= 13
}

if (keyDown("UP")){
    p1.y -= 13
}

if (keyDown("DOWN")){
    p1.y += 13
}
drawSprites();

}