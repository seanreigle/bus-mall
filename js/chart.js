'use strict';

function chart() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  var productNames = [];
  var productClicks = [];
  var percentOfShownClicks = [];
  var percentOfTotal = [];
  for (var i = 0; i < imageData.length; i++) {
    productNames.push(imageData[i].name);
    productClicks.push(imageData[i].clicks);
    var findPercentOfTotal = Math.floor((imageData[i].clicks / totalSumClicks) * 100);
    var findPercentOfShownClicks = Math.floor((imageData[i].clicks / imageData[i].displayed) * 100);
    percentOfShownClicks.push(findPercentOfShownClicks);
    percentOfTotal.push(findPercentOfTotal);
  }

  var data = {
    labels: productNames,
    datasets: [{
      label: 'Percentage of Your Clicks',
      data:percentOfTotal,
      backgroundColor: 'rgba(66, 0, 255, 1)',
      borderColor: 'rgb(0, 0, 0)',
      borderWidth: 2,
      hoverBorderColor: 'rgba(255, 66, 0, 1)',
      hoverBorderWidth: 3
    },{
      label: 'Percent of Clicks When Shown',
      data: percentOfShownClicks,
      backgroundColor: 'rgba(255, 255, 0, 1',
      borderColor: 'rgb(0,0,0)',
      borderWidth: 1,
      hoverBorderColor: 'rgba(66,0,255, 1)',
      hoverBorderWidth: 3
    }]
  };

  var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: data,
    options: {
      title:{
        display: true,
        text: 'Your Results!',
        position: 'top',
        fontSize: 20,
        fontColor: '#000'
      },
      scales:{
        xAxes: [{
          stacked: true,
          ticks:{
            max: 100
          }

        }],
        yAxes: [{
          barThickness: 30,
          ticks: {
            fontColor: 'black'
          },
        }]
      }
    }
  }
  );
};
