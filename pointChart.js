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
  const ejeX = document.getElementById("input-x").value;
  const ejeY = document.getElementById("input-y").value;

  switch (true) {
    case isNaN(ejeX):
      alert(`"${ejeX}" no es un valor numerico, por favor ingresa un valor numerico para el eje X`)
      break;
    case isNaN(ejeY):
      alert(`"${ejeY}" no es un valor numerico, por favor ingresa un valor numerico para el eje Y`)
      break;
  }

  pointChart.data.datasets[0].data = [{
    x: ejeX || 0,
    y: ejeY || 0
  }];
  
  pointChart.update();
}