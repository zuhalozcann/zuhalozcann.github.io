//chart 1

let waterBuffer = document.getElementById('waterBuffer').getContext('2d');

    let wBuffer = new Chart(waterBuffer, {
      type: 'doughnut',
      data: {
        labels: ['Prikwater', 'Water'],
        indexLabelFontSize: 30,
        datasets:[
          {  
            label: '',
           
            backgroundColor: ['#64A9AE', '#40736E'],
            data: [35,65],

          }
        ]
      },
      options: {
        title: {
            display: true,
            text: 'Watervoorraad in liters',
            fontFamily:'Signpainter',
            fontSize: 20,
            
        },
        responsive: false
      }
     });

//chart 2

let food = document.getElementById('foodBuffer').getContext('2d');

let fBuffer =  new Chart(food, {
    type: 'bar', 
    data:{
      labels:['snacks', 'groente', 'brood', 'fruit'],
      datasets:[ 
        {
          label: 'in kilos', 
          backgroundColor: ['#64A9AE', '#D4D1CC','#136B91', '#40736E'],
          borderWidth: 2,
          data:[7,10,15,12,8,12,14,16,18,30]
        }
      ]   
    },
    options: {
      title: {
          display: true,
          text: 'Overzicht voedselvoorraad in kg',
          fontFamily:'Signpainter',
          fontSize: 20,
      },
      responsive: false, // Dit zorgt ervoor dat het kan meeschalen of niet -
      
      legend: false

    }
});


//chart 3

let speed = document.getElementById('speedBuffer').getContext('2d');

let sBuffer = new Chart(speed, {
  type: 'line',
  data: {
    labels: [2010,2020,2030,2040, 2050],
    datasets: [{ 
        data: [1000,1800,1500,2000,2100,2400],
        label: "Brandstofverbruik",
        borderColor: "#3e95cd",
        fill: true
      }
    ]
  },
  options: {
    title: {
      display: true,
      fontFamily:'Signpainter',
      fontSize:20,
      text: 'Brandstofverbruik in liters'
    },
    responsive: false
  }
});

// chart 4

new Chart(document.getElementById("bar-chart-horizontal"), {
    type: 'horizontalBar',
    data: {
      labels: ["Troposfeer", "Stratosfeer", "Mesosfeer", "Thermosfeer", "Exosfeer"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#40736E", "#BFD2C7","#136B91","#969696","#3e95cd"],
          data: [50,80,125,650,700]
        }
      ]
    },
    options: {

      legend: { display: false },
      title: {
        display: true,
        text: 'Afstand naar de soorten atmosfeer in km',
        fontFamily:'Signpainter',
        textAlign:'center',

            fontSize: 20,
        color:"#FFFFFF"
      },
      responsive: false


    }
});