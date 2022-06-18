/**
 * Bounce. 
 * 
 * When the shape hits the edge of the window, it reverses its direction. 
 */
 
 /* @pjs preload="file1.png","file2.png","file3.jgp"; */
 // ^ Use this to preload any external artwork/images
 
 Ball ball = new Ball();
 
 
    int rad = 60;        // Width of the shape
    float xpos, ypos;    // Starting position of shape    
    
    float xspeed = 2.8;  // Speed of the shape
    float yspeed = 2.2;  // Speed of the shape
    
    int xdirection = 1;  // Left or Right
    int ydirection = 1;  // Top to Bottom

void setup(){
   size(800,500);
   noStroke();
   frameRate(30);
   ellipseMode(RADIUS);
   // Set the starting position of the shape
   xpos = width/2;
   ypos = height/2;
}
      
void draw(){
  ball.drawBall();
}
 
class Ball {
    
    
    void Ball(){
        
    }
    
    void drawBall(){
      background(102);
      
      // Update the position of the shape
      xpos = xpos + ( xspeed * xdirection );
      ypos = ypos + ( yspeed * ydirection );
      
      // Test to see if the shape exceeds the boundaries of the screen
      // If it does, reverse its direction by multiplying by -1
      if (xpos > width-rad || xpos < rad) {
        xdirection *= -1;
      }
      if (ypos > height-rad || ypos < rad) {
        ydirection *= -1;
      }
    
      // Draw the shape
      ellipse(xpos, ypos, rad, rad);
    }
}
