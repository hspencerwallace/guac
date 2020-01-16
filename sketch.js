

function setup() {
  createCanvas(800, 800);

}

let noiseScale=0.02;

function draw() {
  background(0);
  for (let x=0; x < width; x++) {
    let noiseVal = noise((mouseX+x)*noiseScale, mouseY*noiseScale);
    stroke(noiseVal*255);
    line(width/2, height/2+noiseVal*80, 0, 0);
     line(width, 0, width/2, height/2+noiseVal*80);
  }
}
