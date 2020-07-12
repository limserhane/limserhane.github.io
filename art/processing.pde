JPoint[][] points = new JPoint[20][20];


void setup(){
    size(screen.width, screen.height-128);
    background(0, 0, 0, 0);

    for(int y = 0; y < 20; y++){
        for(int x = 0; x < 20; x++){
            points[x][y] = new JPoint(map(x, 0, 20, 20, width), map(y, 0, 20, 0, height));
        }
    }
}

void draw(){
    background(0, 0, 0, 0);
    for(int y = 0; y < 20; y++){
        for(int x = 0; x < 20; x++){
            JPoint p = points[x][y];
            p.update();
            p.draw();
        }
    }
}

class JPoint {
    int x, y;

    JPoint(int initX, int initY){
        x = initX;
        y = initY;
    }

    void draw(){
        int green = 255/(255*((mouseX-x)*(mouseX-x)+(mouseY-y)*(mouseY-y))/5/(x*x+y*y));
        noStroke();
        fill(map(x, 0, width, 0, 255), green, map(y, 0, height, 0, 255));
        ellipse(x, y, 2, 2);
    }

    void update(){
        
    }
}