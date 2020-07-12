ArrayList balls = new ArrayList();

void setup(){
    size(screen.width, screen.height-128);
    background(0, 0, 0, 0);
}

void draw(){
    background(0, 0, 0, 0);
    for(Ball b : balls){
        b.update();
        b.draw();
    }
}

void mouseClicked(){
    Ball b = new Ball(mouseX, mouseY);
    balls.add(b);
}

class Ball {
    int x, y;
    int yV;
    int gravity;

    Ball(int initX, int initY){
        x = initX;
        y = initY;
        yV = 1;
        gravity = 1;
    }

    void draw(){
        ellipse(x, y, 20, 20);
    }

    void update(){
        yV += gravity;
        y += yV;
        if(y >= height -20){
            yV = -20;
        }
    }
}