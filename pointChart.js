let data = {
  datasets: [{
    label: 'valor del punto [X,Y]',
    data: [{
      x: 0,
      y: 0
    }],
    backgroundColor: 'rgb(255, 99, 132)'
  }],
};

const config = {
  type: 'scatter',
  data: data,
  options: {
    responsive: true,
    plugins: {
      title: {
        display: false,
        text: 'Axis Center Positioning'
      }
    },
    scales: {
      x: {
        min: -100,
        max: 100,
      },
      y: {
        min: -100,
        max: 100,
      }
    }
  },
};

var pointChart = new Chart(
  document.getElementById('pointChart'),
  config
); 

function pointChartClear () {
  document.getElementById("input-x").value = "";
  document.getElementById("input-y").value = "";
}

function pointGraphic () {
  pointChart.data.datasets[0].data = [{
    x: document.getElementById("input-x").valueAsNumber || 0,
    y: document.getElementById("input-y").valueAsNumber || 0
  }];
  
  pointChart.update();
}