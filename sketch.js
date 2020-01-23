

function setup() {
  createCanvas(1000, 600);



}

let noiseScale=0.02;

function draw() {
  background(0);

// triangles 
    let trix1 = random(width/4, 3*(width/4));
    let trix2 = random(width/4, 3*(width/4));
    let trix3 = random(width/4, 3*(width/4));

    let triy1 = random(0, height);
    let triy2 = random(0, height);
    let triy3 = random(0, height);

      triangle(trix1, triy1, trix2, triy2, trix3, triy3);



// steep lines for loop
  for (let x2=width/2; x2 < width; x2++) {
	  let noiseVal = noise((mouseX+x2)*noiseScale, mouseY*noiseScale);
    stroke(noiseVal*255);

    line(x2, height, x2, height-noiseVal*(x2-width/2)*(x2/height));
    line(width-x2, height, width-x2, height-noiseVal*(x2-width/2)*(x2/height));
   
  }
}
