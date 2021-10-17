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
    barChart.data.datasets[0].data = [
              document.getElementById("input-serie1").valueAsNumber || 0,
              document.getElementById("input-serie2").valueAsNumber || 0,
              document.getElementById("input-serie3").valueAsNumber || 0,
              document.getElementById("input-serie4").valueAsNumber || 0,
              document.getElementById("input-serie5").valueAsNumber || 0
    ];
    
    barChart.update();
}

function barChartClear () {
    document.getElementById("input-serie1").value = "";
    document.getElementById("input-serie2").value = "";
    document.getElementById("input-serie3").value = "";
    document.getElementById("input-serie4").value = "";
    document.getElementById("input-serie5").value = "";
}