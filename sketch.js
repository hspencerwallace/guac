

function setup() {
  createCanvas(1000, 600);

}

let noiseScale=0.02;

function draw() {
  background(0);


// other for loop
  // for (let x=0; x > width/2; x++) {
  //   let noiseVal = noise((mouseX+x)*noiseScale, mouseY*noiseScale);
  //   stroke(noiseVal*255);

  //   line(x, height, x, height-noiseVal*90000/x);
  //   line(x, height, x, height-noiseVal*x);
  // }


// steep lines for loop
  for (let x2=width/2; x2 < width; x2++) {
	let noiseVal = noise((mouseX+x2)*noiseScale, mouseY*noiseScale);
    stroke(noiseVal*255);

    line(x2, height, x2, height-noiseVal*(x2-width/2)*(x2/height));

   
  }
}
