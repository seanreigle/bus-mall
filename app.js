'use strict';

function generateMath() {
  return Math.floor(Math.random() * imageTitles.length);
}

var totalClicks = 0;
var imageArray = [];

var imageTitles = ['bag.jpg','banana.jpg','bathroom.jpg','boots.jpg','breakfast.jpg','bubblegum.jpg','chair.jpg','cthulhu.jpg','dog-duck.jpg','dragon.jpg','pen.jpg','pet-sweep.jpg','scissors.jpg','shark.jpg','sweep.png','tauntaun.jpg','unicorn.jpg','usb.gif','water-can.jpg','wine-glass.jpg'];

function randomImages() {
  var a = generateMath();
  return imageArray[a];
}

function image(name) {
  this.name = name.split('.')[0];
  this.path = 'img/' + name;
  this.total = 0;
  this.views = 0;
}

for(var i = 0; i < imageTitles.length; i++) {
  imageArray.push(new image(imageTitles[i]));
}

var bag = new Product ('img/bag.jpg');
var banana = new Product ('img/banana.jpg');
var bathRoom = new Product ('img/bathroom.jpg');
var boots = new Product ('img/boots.jpg');
var breakFast = new Product ('img/breakfast.jpg');
var bubbleGum = new Product ('img/bubblegum.jpg');
var chair = new Product ('img/chair.jpg');
var cthulhu = new Product ('img/cthulhu.jpg');
var dogDuck = new Product ('img/dog-duck.jpg');
var dragon = new Product ('img/dragon.jpg');
var pen = new Product ('img/pen.jpg');
var petSweep = new Product('img/pet-sweep.jpg');
var scissors = new Product ('img/scissors.jpg');
var shark = new Product ('img/shark.jpg');
var sweep = new Product ('img/sweep.png');
var tauntaun = new Product ('img/tauntaun.jpg');
var unicorn = new Product ('img/unicorn.jpg');
var usb = new Product ('img/usb.gif');
var waterCan = new Product ('img/water-can.jpg');
var wineGlass = new Product ('img/wine-glass.jpg');
