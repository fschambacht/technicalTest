let count = 0;

let data = {
  datasets: [{
    label: 'valor del punto [X,Y]',
    data: [{
      x: null,
      y: null,
    }],
    backgroundColor: [
      'rgb(127, 200, 169)',
      'rgb(127, 200, 1)',
      'rgb(127, 20, 169)'
  ]
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

  pointChart.data.datasets[0].data = [{
    x: null,
    y: null
  }];

  pointChart.update();
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
    case ejeX > 100 || ejeX < -100:
      alert(`"${ejeX}" es un valor fuera del rango de vision para graficar un punto en el eje X`)
      break;
    case ejeY > 100 || ejeY < -100:
      alert(`"${ejeY}" es un valor fuera del rango de vision para graficar un punto en el eje Y`)
      break;
  }

  pointChart.data.datasets[0].data[count] = {
    x: ejeX || 0,
    y: ejeY || 0
  };
  
  pointChart.update();

  count += 1;
}