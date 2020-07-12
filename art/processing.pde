
int n = 20;
int radius = 50;
JPoint[][] points = new JPoint[n][n];

double time;

void setup(){
    size(screen.width, screen.height-128);
    background(0, 0, 0, 0);
    time = 0;
    for(int y = 0; y < n; y++){
        for(int x = 0; x < n; x++){
            points[x][y] = new JPoint(map(x, 0, n, radius + 10, width), map(y, 0, n, 0, height));
        }
    }
}

void draw(){
    time += 0.01;
    background(0, 0, 0, 0);
    for(int y = 0; y < n; y++){
        for(int x = 0; x < n; x++){
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
        int brightness = 200;
        float scale = ((mouseX-x)*(mouseX-x)+(mouseY-y)*(mouseY-y))/(x*x+y*y);
        noStroke();
        fill(
            map(x, 0, width, 0, brightness), 
            brightness*(1-scale), 
            map(y, 0, height, 0, brightness)
        );
        int r = radius*noise(x, y, time)+0.5
        ellipse(x, y, r, r);
    }

    void update(){
        
    }
}