
int radius = 50;
int n = (int)(min(screen.width, screen.height)/(radius));
int xoffset = (screen.width - n*radius*2)/2;
int yoffset = (screen.height - n*radius*2)/2;
CDot[][] points = new CDot[n][n];

double time;

void setup(){
    size(screen.width, screen.height-128);
    background(0, 0, 0, 0);
    time = 0;
    for(int y = 0; y < n; y++){
        for(int x = 0; x < n; x++){
            points[x][y] = new CDot(map(x, 0, n, xoffset*1.5, width-xoffset*1.5), map(y, 0, n, yoffset, height-yoffset));
        }
    }
}

void draw(){
    time += 0.01;
    background(0, 0, 0, 0);
    for(int y = 0; y < n; y++){
        for(int x = 0; x < n; x++){
            CDot p = points[x][y];
            p.update();
            p.draw();
        }
    }
}

class CDot {
    int x, y;

    CDot(int initX, int initY){
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