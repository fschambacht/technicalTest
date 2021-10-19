const labels = ["serie 1","serie 2","serie 3","serie 4","serie 5"];

const data2 = {
  labels: labels,
  datasets: [{
    label: 'gráfico de barras',
    data: [
        0,
        0,
        0,
        0,
        0
    ],
    backgroundColor: [
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(68, 73, 65, 0.2)'
    ],
    borderColor: [
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(68, 73, 65)'
    ],
    borderWidth: 1
  }]
};

const config2 = {
    type: 'bar',
    data: data2,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
};

 var barChart = new Chart(
    document.getElementById('barChart'),
    config2
);

function barGraphic () {  
  const serie1 = document.getElementById("input-serie1").value;
  const serie2 = document.getElementById("input-serie2").value;
  const serie3 = document.getElementById("input-serie3").value;
  const serie4 = document.getElementById("input-serie4").value;
  const serie5 = document.getElementById("input-serie5").value;
  
  switch (true) {
    case isNaN(serie1):
      alert(`"${serie1}" no es un valor numerico, por favor ingresa un valor numerico para la serie 1`)
      break;
    case isNaN(serie2):
      alert(`"${serie2}" no es un valor numerico, por favor ingresa un valor numerico para la serie 2`)
      break;
    case isNaN(serie3):
      alert(`"${serie3}" no es un valor numerico, por favor ingresa un valor numerico para la serie 3`)
      break;
    case isNaN(serie4):
      alert(`"${serie4}" no es un valor numerico, por favor ingresa un valor numerico para la serie 4`)
      break;
    case isNaN(serie5):
      alert(`"${serie5}" no es un valor numerico, por favor ingresa un valor numerico para la serie 5`)
      break;
  }
  
  barChart.data.datasets[0].data = [
    serie1 || 0,
    serie2 || 0,
    serie3 || 0,
    serie4 || 0,
    serie5 || 0
  ];
    
  barChart.update();
}

function barChartClear () {
    const serie1 = document.getElementById("input-serie1").value = "";
    const serie2 = document.getElementById("input-serie2").value = "";
    const serie3 = document.getElementById("input-serie3").value = "";
    const serie4 = document.getElementById("input-serie4").value = "";
    const serie5 = document.getElementById("input-serie5").value = "";
}