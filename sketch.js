let numbers = [];
let count = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < count; i++) {
    numbers[i] = random(height);
  }
  background(color(75, 74, 103));
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
  colorMode(RGB);
  let c = color(75, 74, 103);
  fill(c);
  stroke(c);
  rect(i * (width / count), 0, (width / count), height);

  colorMode(HSB);
  c = color(360 * (numbers[i] / height), 50, 80);
  fill(c);
  stroke(c);
  rect(i * (width / count), height - numbers[i], (width / count) + 1, numbers[i]);
}
