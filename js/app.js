'use strict';

var totalClicks = 0;
var totalSumClicks = 0;
var image1 = document.getElementById('image-one');
var image2 = document.getElementById('image-two');
var image3 = document.getElementById('image-three');
var imagesection = document.getElementById('imagesection');
var imageData = [];
var lastThreeImgs = [];

var bag = new Images('R2-D2 Bag', 'imgs/bag.jpg');
var banana = new Images('Banana Slicer', 'imgs/banana.jpg');
var bathroom = new Images('Bathroom iPad Stand', 'imgs/bathroom.jpg');
var boots = new Images('Open Toe Rain Boots', 'imgs/boots.jpg');
var breakfast = new Images('Breakfast', 'imgs/breakfast.jpg');
var bubblegum = new Images('Chocolate Balls', 'imgs/bubblegum.jpg');
var chair = new Images('Chair', 'imgs/chair.jpg');
var cthulhu = new Images('Cthulhu', 'imgs/cthulhu.jpg');
var dogDuck = new Images('DogDuck', 'imgs/dog-duck.jpg');
var dragon = new Images('Dragon Meat', 'imgs/dragon.jpg');
var pen = new Images('Food', 'imgs/pen.jpg');
var petSweep = new Images('Pet Broom', 'imgs/pet-sweep.jpg');
var scissors = new Images('Pizza Scissors', 'imgs/scissors.jpg');
var shark = new Images('Shark Attack', 'imgs/shark.jpg');
var sweep = new Images('Baby Clean', 'imgs/sweep.png');
var tauntaun = new Images('Yum', 'imgs/tauntaun.jpg');
var unicorn = new Images('Rainbows and Unicorns', 'imgs/unicorn.jpg');
var usb = new Images('What?', 'imgs/usb.gif');
var waterCan = new Images('Water Can', 'imgs/water-can.jpg');
var wineGlass = new Images('Wine Glass', 'imgs/wine-glass.jpg');

if (localStorage.storageArray) {
  var existingLSData = JSON.parse(localStorage.storageArray);
  totalSumClicks += localStorage.totalSumClicksLS;
  for (var i = 0; i < existingLSData.length; i++) {
    imageData[i].clicks += existingLSData[i].clicks;
    imageData[i].displayed += existingLSData[i].displayed;
  }
}

var randomNumber = function() {
  return Math.floor(Math.random() * imageData.length);
};

function Images(name,path) {
  this.name = name;
  this.path = path;
  this.displayed = 0;
  this.clicks = 0;
  imageData.push(this);
}

function randomImages() {
  var newImage = [];
  while (newImage.length < 3) {
    var num = randomNumber();
    if (!lastThreeImgs.includes(num) && !newImage.includes(num)) {
      newImage.push(num);
    }
  }
  image1.src = imageData[newImage[0]].path;
  image1.className = newImage[0];
  image2.src = imageData[newImage[1]].path;
  image2.className = newImage[1];
  image3.src = imageData[newImage[2]].path;
  image3.className = newImage[2];
  lastThreeImgs = newImage;
}
randomImages();

function renderImages() {
  event.preventDefault();
  var clickPic = event.target;
  imageData[clickPic.className].clicks++;
  imageData[image1.className].displayed++;
  imageData[image2.className].displayed++;
  imageData[image3.className].displayed++;
  randomImages();
  totalClicks++;
  totalSumClicks++;
  if (totalClicks === 25) {
    localStorage.storageArray = JSON.stringify(imageData);
    localStorage.totalSumClicksLS = totalSumClicks;
    showResults();
    image1.removeEventListener('click', renderImages);
    image2.removeEventListener('click', renderImages);
    image3.removeEventListener('click', renderImages);
    imagesection.remove();
  }
}

function showResults() {
  var summarysection = document.getElementById('summarysection');
  var button = document.createElement('button');
  button.id = 'button';
  button.innerText = 'Clear Local Storage';
  button.addEventListener('click', function(event) {
    event.preventDefault();
    localStorage.clear();
    location.reload();
  });
  var canvas = document.createElement('canvas');
  canvas.id = 'canvas';
  canvas.setAttribute('height','300');
  summarysection.appendChild(canvas);
  summarysection.appendChild(button);
  chart();
}

image1.addEventListener('click', renderImages);
image2.addEventListener('click', renderImages);
image3.addEventListener('click', renderImages);
