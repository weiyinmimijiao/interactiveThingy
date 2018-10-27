var defaultBG = 0;
//to inverse line/background colors when key is pressed
var whiteLines = 255;
var blackLines = 0;

function setup() {
    createCanvas(640, 480);
}

function draw() {
    background(defaultBG);
    //changes background color when mouse hovers over top/bottom of page
    if (mouseY >= 3 * height / 4) {
        background(255, 0, 0);
    }else if (mouseY <= height / 4) {
        background(0, 0, 255);
    };
    noFill();
    stroke(0, 255, 0);
    strokeWeight(1);
    ellipse( width / 2, height / 2, 50, 50);
    //green rectangle going across page
    fill(0, 255, 0);
    noStroke();
    rect(mouseX - width * .75, 50, 250, 10);
    noFill();
    strokeWeight(1);
    stroke(whiteLines);
    //three swinging lines
    line(width - mouseX, 130, 30, 50);
    line(width - mouseX + 30, 140, 30, 50);
    line(width - mouseX + 60, 150, 30, 50);
    //change color of rectangle outline and make text appear
    //if mouse is pressed
    if (mouseIsPressed) {
        strokeWeight(2);
        stroke(255, 54, 258);
        stroke(whiteLines);
        strokeWeight(.5);
        textFont('Courier New');
        text("ok ok ok ok ok ok ok", 50, 100);
        stroke(255, 54, 258);
    };
    //vertical lines on top
    strokeWeight(1);
    rect(width / 4, 100, 50, 70);
    stroke(whiteLines);
    strokeWeight(1);
    line(500, mouseY, 500, mouseY + 200);
    line(505, mouseY, 505, mouseY + 200);
    line(510, mouseY, 510, mouseY + 200);
    line(515, mouseY, 515, mouseY + 200);
    line(520, mouseY, 520, mouseY + 200);
    line(525, mouseY, 525, mouseY + 200);
    line(530, mouseY, 530, mouseY + 200);
    line(535, mouseY, 535, mouseY + 200);
    line(540, mouseY, 540, mouseY + 200);
    //vertical lines on bottom
    stroke(0,255,0);
    line(502, mouseY * 1.5 + 150, 502, mouseY * 1.5 + 410);
    line(507, mouseY * 1.5 + 160, 507, mouseY * 1.5 + 480);
    line(512, mouseY * 1.5 + 170, 512, mouseY * 1.5 + 480);
    line(517, mouseY * 1.5 + 180, 517, mouseY * 1.5 + 480);
    line(522, mouseY * 1.5 + 190, 522, mouseY * 1.5 + 480);
    line(527, mouseY * 1.5 + 200, 527, mouseY * 1.5 + 510);
    line(532, mouseY * 1.3 + 50, 532, mouseY * 1.3 + 510);
    line(537, mouseY * 1.3 + 50, 537, mouseY * 1.3 + 510);
    //thin rectangle blocks moving across page on bottom
    noStroke();
    fill(whiteLines);
    rect(width - mouseX, 400, 100, 5);
    rect(width - mouseX * 1.5, 400, 60, 5);
    rect(width - mouseX * 2.5, 400, 40, 5);

    rect(width - mouseX + 70, 425, 100, 3);
    rect(width - mouseX * 1.5 + 70, 425, 60, 3);
    rect(width - mouseX * 2.5 + 70, 425, 40, 3);
    //makes text follow mouse
    text("stop following me! :((", mouseX, mouseY);
    translate(mouseX, mouseY);
    noStroke();
    //if mouse isn't clicked, text and circles will show
    if (mouseIsPressed === false) {
        fill(0, 0, 255);
        ellipse(20, 20, 20, 20);
        ellipse(40, 40, 20, 20);
        textFont('Courier New');
        fill(255, 0, 0);
        text("no no no no no", 50, 100);
        stroke(255, 54, 258);
        fill(0, 0, 255);
    }
}
//inverses black and white colors when key pressed
function keyTyped() {
    if (defaultBG > 0) {
        defaultBG = 0;
        whiteLines = 255;
    }else {
        defaultBG += 255;
        whiteLines -= 255;
        fill(defaultBG);
    }
}

