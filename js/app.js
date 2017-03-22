'use strict';

var imageArray = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];

var productArray = [];
var totalClicks = 0;
var img1 = document.getElementById('left');
var img2 = document.getElementById('center');
var img3 = document.getElementById('right');

function Products(name, path) {
  this.name = name.split('.')[0];
  this.path = 'imgs/' + name;
  this.itemClick = 0;
  this.imageShown = 0;
  productArray.push(this);
};

for (var i = 0; i < imageArray.length; i++) {
  var filePath = 'imgs/' + imageArray[i];
  new Products(imageArray[i], filePath);
}

function randomImgIndex(){
  return Math.floor(Math.random() * imageArray.length);
};

var prevImgIndexes = [];
function randomImage(){
  var currentImgIndexes = [];
  while (currentImgIndexes.length < 3) {
    var imgSelector = randomImgIndex();
    if (!currentImgIndexes.includes(imgSelector) && !prevImgIndexes.includes(imgSelector)) {
      currentImgIndexes.push(imgSelector);
    }
  }

  var prod1 = productArray[currentImgIndexes[0]];
  var prod2 = productArray[currentImgIndexes[1]];
  var prod3 = productArray[currentImgIndexes[2]];
  img1.src = prod1.path;
  img2.src = prod2.path;
  img3.src = prod3.path;
  img1.alt = currentImgIndexes[0];
  img2.alt = currentImgIndexes[1];
  img3.alt = currentImgIndexes[2];
  prevImgIndexes = currentImgIndexes;
  prod1.imageShown++;
  prod2.imageShown++;
  prod3.imageShown++;
};
randomImage();

var clickLimit = 25;
function handleTheClick(){
  randomImage();
  totalClicks++;
  var productIdx = this.alt;
  productArray[productIdx].itemClick++;
  if (totalClicks === clickLimit) {
    img1.removeEventListener('click', handleTheClick);
    img2.removeEventListener('click', handleTheClick);
    img3.removeEventListener('click', handleTheClick);
  }
};

img1.addEventListener('click', handleTheClick);
img2.addEventListener('click', handleTheClick);
img3.addEventListener('click', handleTheClick);

var displayButton = document.getElementById('display-button');
displayButton.addEventListener('click', makeChart);

function makeChart () {
  function myImageNames () {
    var names = [];
    for(var i = 0; i < imageArray.length; i++) {
      names.push(imageArray[i].name);
    }
    return names;
  };

  function manageClicks () {
    var numberOfClicks = [];
    for(var i = 0; i < imageArray.length; i++) {
      numberOfClicks.push(imageArray[i].total);
    }
    localStorage.busMall = JSON.stringify(imageArray);
    return numberOfClicks;
  }

  var myChartData = {
    labels: myImageNames(),
    datasets: [{
      label: 'Results',
      backgroundColor: 'rgba(59, 225, 203, 0)',
      strokeColor : '#ACC26D',
      data: manageClicks(),
    }]
  };

  var displayResults = document.getElementById('results-chart').getContext('2d');
  new Chart.Bar(displayResults, {
    data: myChartData
  });
}

function checkLocalStorage() {
  if(localStorage.busMall) {
    console.log('local storage exists');
    imageArray = JSON.parse(localStorage.busMall);
  } else {
    console.log('local storage empty');
  }
}

checkLocalStorage();
