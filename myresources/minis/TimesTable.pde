float mult = 0;
int mod = 500;
int hue = 0;

boolean debug = false;

void setup()
{
  size(800,800);
  colorMode(HSB, 1000);
  frameRate(30);
  strokeWeight(0.6);
  textSize(26);
  noLoop();
}

void draw()
{
  background(110);
  stroke(hue, 1000, 1000);
  for (int i=0; i<=mod; i++) {
    float a = 2*PI*i/mod;
    float temp = i*mult;
    while (temp>=mod) temp-=mod;
    float b = 2*PI*temp/mod;
    line(400+400*cos(a), 400+400*sin(a), 400+400*cos(b), 400+400*sin(b));
  }
  fill(90, 950, 1000);
  text("X"+(int)(mult*100)/100.0, 10, 770);

  if (debug) {
    mult+=0.1;
    hue+=10;
  }
  else {
    mult+=0.01;
    hue++;
  }
  if (hue>1000) hue=0;
}

void toggleDebug() {
  debug = !debug;
}