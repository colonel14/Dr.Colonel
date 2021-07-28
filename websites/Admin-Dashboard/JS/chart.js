var myPolarChart = document.getElementById('polar-area-chart').getContext('2d');

var polarAreaChart = new Chart(myPolarChart, {
    type:'polarArea',
    data:{
        labels:[
            'Lithuania',
            'Czechia',
            'Ireland',
            'Germany',
            'Australia',
            'Austria'
        ],
        datasets: [{
            label: 'Country',
            data: [23.2, 20.5, 17.8, 14.7, 12.4, 11.4],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(75, 192, 192)',
              'rgb(255, 205, 86)',
              'rgb(201, 203, 207)',
              'rgb(54, 162, 235)'
            ]
          }]
    }

})
