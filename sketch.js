let numbers = [];
let count = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < count; i++) {
    numbers[i] = random(height);
  }
  colorMode(HSB);
}

function draw() {
  step();
  step();
  step();
}

let i = 0;
let j = count;

function step() {
  i = (i + 1) % j;

  drawRectangle(i);
  drawRectangle(i - 1);

  if (numbers[i] > numbers[i + 1]) {
    let temp = numbers[i + 1];
    numbers[i + 1] = numbers[i];
    numbers[i] = temp;
  }
  if (i == j - 1) {
    j--;
    i--;
  }
}

function drawRectangle(i) {
  let c = color(0, 0, 100);
  fill(c);
  stroke(c);
  rect(i * (width / count), 0, (width / count), height);

  c = color(360 * (numbers[i] / height), 50, 90);
  fill(c);
  stroke(c);
  rect(i * (width / count), height - numbers[i], (width / count) + 1, numbers[i]);
}
