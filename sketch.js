console.log('Circle Square Colour');

const colors = [15,30,60, 90, 120];


function setup() {
  createCanvas(2000, 1750);
  background(0);
  frameRate(6);
  colorMode(HSB);
}




function draw() {

  const shapes = [ellipse, rect];
  const size = 100;

  for (let x = 0; x < width; x += size) {
    for (let y = 0; y < height; y += size) {
      
      let color = colors[Math.round(random(colors.length - 1))]
      let toFill = random(1);
      
      let shape = shapes[Math.round(random(1))];

      if (toFill >= 0.5){
        fill(color, 50, 50);
        noStroke();
      } else {
        stroke(color, 80,80);
        strokeWeight(4);
        noFill();
      }
      shape(x, y, size, size);
    }
  }

}

function mousePressed() {
  save('circle_square.png');
}


//credit: https://medium.com/free-code-camp/an-introduction-to-generative-art-what-it-is-and-how-you-make-it-b0b363b50a70