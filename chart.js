'use strict';

//Arrays for charting
var chartProductArray = [];
var chartPercentagesArray = [];


/********************************************************************************
*         Charting                                                              *
********************************************************************************/
//function creates arrays for use in chart data
var createChartArrays = function () {
  for (var product in Product.productArray) {
    chartProductArray.push(Product.productArray[product].name);
    chartPercentagesArray.push(Product.productArray[product].percentageLikes);
  }
};

//colors array for chartjs selection - pastels
var chartColors = [
  '#FFCCCC', '#FFEECC', '#FFDDCC', '#FFCCCC', '#FFBBCC', '#FFAACC', '#CCFFFF', '#CCEEFF', '#CCDDFF', '#CCCCFF', '#CCBBFF', '#CCAAFF', '#BFFCC6', '#DBFFD6', '#F3FFE3', '#E7FFAC', '#FFFFD1', '#FFABA1', '#D5AAFF', '#AFF8D8'
];

//Creates dataset object for chartjs
var data = {
  datasets: [{
    data: chartPercentagesArray,
    backgroundColor: chartColors,
  }],

  labels: chartProductArray
};

// Creates function to get node for chart and create chart object
function drawChart() {
  var ctx = document.getElementById('productChart').getContext('2d');
  var percentageChart = new Chart(ctx, {
    type: 'bar',
    data: data,
  });
  drawChart = true;
  productChart.hidden = false;
};

//function to hide chart until data is generated
function hideChart() {
  productChart.hidden = true;
}

