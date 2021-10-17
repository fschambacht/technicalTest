let data = {
  datasets: [{
    label: 'valor del punto [X,Y]',
    data: [{
      x: 0,
      y: 0,
    }],
    backgroundColor: 'rgb(127, 200, 169)'
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
        min: -80,
        max: 80,
      },
      y: {
        min: -80,
        max: 80,
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