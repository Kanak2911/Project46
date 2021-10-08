var eagle, eagleImg, hunter, hunterImg;
var bullet, bulletImg, bgImg;
var mouse, mouseImg;
var score = 0;

function preload() {
    eagleImg = loadImage('Eagle1.png');
    hunterImg = loadImage('hunter.png');
    bulletImg = loadImage('Bullet.png');
    bgImg = loadImage('bg.png');
    mouseImg = loadAnimation("m1.png","m2.png","m3.png","m4.png","m5.png");
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    eagle = createSprite(windowWidth / 2 - 200, 200);
    eagle.addImage(eagleImg);
    eagle.scale = 0.6

    hunter = createSprite(115, windowHeight - 240);
    hunter.addImage(hunterImg);

    mouseGroup = new Group();
    bulletGroup = new Group();
}

function draw() {
    background(bgImg);

    if (eagle.y > 60) {
        if (keyDown('up')) {
            eagle.y -= 5;
        }
    }
    if (eagle.y < 585) {
        if (keyDown('down')) {
            eagle.y += 5;
        }
    }

    mice();
    bullets();
    drawSprites();

    fill("red");
    textSize(50);
    text("Score : " + score, 1100, 60);
}

function mice() {
    if (frameCount % 75 === 0) {
        mouse = createSprite(400, 200, 20, 20);
        mouse.addAnimation("mouse",mouseImg);
        mouse.scale = 0.25;
        mouse.y = Math.round(random(200, 700));
        mouse.velocityX = -5;
        mouseGroup.velocityX = -(7 + score / 100);
        mouse.lifetime = 200;
        mouseGroup.add(mouse);
    }
}

function bullets() {
    if (frameCount % 85 === 0) {
        bullet = createSprite(400, 200, 20, 20);
        bullet.addAnimation("bullet",bulletImg);
        bullet.scale = 0.11;
        bullet.y = Math.round(random(100, 900));
        bullet.velocityX = 16;
        bulletGroup.velocityX = (7 + score / 100);
        bullet.lifetime = 200;
        bulletGroup.add(bullet);
    }
}