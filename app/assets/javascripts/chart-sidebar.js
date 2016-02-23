var displaySideChart = function(clickedCity, clickedState){

    var cityName = clickedCity;
    var stateName = clickedState;
    var timeFrame = 7;

    $.ajax({
        method: "GET",
        url: "/find?city=" + cityName + "&state=" + stateName + "&timeframe=" + timeFrame,
        dataType: 'JSON'
    })
    .done(function(response){
        //Chart Data
      var chartData = response;

      var todayDate = new Date();
      var dates = [];
      for (i=0; i < timeFrame; i++){
          var newDate = new Date();
          newDate.setDate(todayDate.getDate() - (timeFrame - i));
          dates.push(newDate.toJSON().slice(0,10));
      }

      var avgAmbientTemps = []
      dates.forEach(function(date) {
          var dayAmbientTemps = chartData.filter(function(data){
              return (data["time"].slice(0,10) === date);
          })
          var sum = Object.keys(dayAmbientTemps).reduce(function(a, b){
              return a + dayAmbientTemps[b].ambient_temp;
          }, 0)
          if (sum === 0) {
              avgAmbientTemps.push(null);
          } else {
              avgAmbientTemps.push(sum/dayAmbientTemps.length);
          }
      })

      var avgTemps = [];
      dates.forEach(function(date){
          var dayTemps = chartData.filter(function(data){
              return (data["time"].slice(0,10) === date);
          })
          var sum = Object.keys(dayTemps).reduce(function(a, b){
              return a + dayTemps[b].temp;
          }, 0)
          if (sum === 0) {
              avgTemps.push(null);
          } else {
              avgTemps.push(sum/dayTemps.length);
          }
      })


    var avgHumidity = [];
    dates.forEach(function(date){
        var dayHumidities = chartData.filter(function(data){
            return (data["time"].slice(0,10) === date);
        })
        var sum = Object.keys(dayHumidities).reduce(function(a, b){
            return a + dayHumidities[b].humidity;
        }, 0)
        if (sum === 0) {
            avgHumidity.push(null);
        } else {
            avgHumidity.push(sum/dayHumidities.length);
        }
      })

      var heatMapData = [];

      dates.forEach(function(date, index){
        heatMapData.push([index, 0, chartData.filter(function(data){ return data["temp"] <= 95 && data["time"].slice(0,10) === date }).length]);
        heatMapData.push([index, 1, chartData.filter(function(data){ return data["temp"] > 95 && data["temp"] <= 97.7 && data["time"].slice(0,10) === date }).length]);
        heatMapData.push([index, 2, chartData.filter(function(data){ return data["temp"] > 97.7 && data["temp"] <= 98.5 && data["time"].slice(0,10) === date }).length]);
        heatMapData.push([index, 3, chartData.filter(function(data){ return data["temp"] > 98.5 && data["temp"] <= 99.5 && data["time"].slice(0,10) === date }).length]);
        heatMapData.push([index, 4, chartData.filter(function(data){ return data["temp"] > 99.5 && data["temp"] <= 100.9 && data["time"].slice(0,10) === date }).length]);
        heatMapData.push([index, 5, chartData.filter(function(data){ return data["temp"] > 100.9 && data["temp"] <= 104 && data["time"].slice(0,10) === date }).length]);
        heatMapData.push([index, 6, chartData.filter(function(data){ return data["temp"] > 104 && data["time"].slice(0,10) === date }).length]);
        console.log(date + ":" + index);
      })

      displayLineChart(avgHumidity, avgTemps, dates, cityName, stateName);
      displayHeatMap(dates, heatMapData, cityName, stateName);
    });
};


var displayHeatMap = function(dates, heatMapData, cityName, stateName){

    var testHeatData = [
        [0, 0, 5], [1, 0, 9], [2, 0, 8], [3, 0, 4], [4, 0, 7], [5, 0, 8], [6, 0, 3],
        [0, 1, 32], [1, 1, 38], [2, 1, 48], [3, 1, 47], [4, 1, 38], [5, 1, 35], [6, 1, 24],
        [0, 2, 125], [1, 2, 135], [2, 2, 120], [3, 2, 134], [4, 2, 132], [5, 2, 124], [6, 2, 134],
        [0, 3, 134], [1, 3, 122], [2, 3, 134], [3, 3, 129], [4, 3, 126], [5, 3, 130], [6, 3, 127],
        [0, 4, 49], [1, 4, 48], [2, 4, 56], [3, 4, 64], [4, 4, 70], [5, 4, 88],  [6, 4, 95],
        [0, 5, 18], [1, 5, 14], [2, 5, 25], [3, 5, 26], [4, 5, 30], [5, 5, 45], [6, 5, 51],
        [0, 6, 19], [1, 6, 14], [2, 6, 18], [3, 6, 18], [4, 6, 16], [5, 6, 11], [6, 6, 18]
        ];

    $('#heatmap-container').highcharts({

        chart: {
            type: 'heatmap',
            marginTop: 0,
            marginBottom: 0,
            plotBorderWidth: 1,
            width: 150,
            height: 150
        },


        title: {
            text: null,
        },

        yAxis: {
            categories: null,
            title: null,
            labels: {
              enabled: false
            }
        },

        xAxis: {
            categories: dates,
            title: null
        },

        colorAxis: {
            min: 0,
            minColor: '#FFFFFF',
            maxColor: Highcharts.getOptions().colors[0]
        },

        legend: {
            align: 'right',
            layout: 'vertical',
            margin: 0,
            verticalAlign: 'top',
            y: 25,
            symbolHeight: 280,
            enabled: false
        },

        tooltip: {
            enabled: false,
        },

        series: [{
            name: null,
            borderWidth: 1,
            data: heatMapData,
            // data: testHeatData,
            dataLabels: {
                enabled: false,
                color: '#000000'
            }
        }]

    });
console.log('we got this far')
$('#heatmap-container').append('<div class="small-chart float-right display-inline-block bottom-padding-none"><a href="#" id="heatmap-city">Link to Temp Chart</a></div>');
  $('#heatmap-city').click(function(e){
    e.preventDefault();
    console.log(cityName);
    console.log(stateName);
    displayCharts(cityName, stateName)
  })
}




var displayLineChart = function(avgHumidity, avgTemps, dates, cityName, stateName){
    var charts = [],
    options;

    charts[0] = new Highcharts.Chart($.extend(true, {}, options, {
        chart: {
            renderTo: 'line-temp-container',
            width: 150
        },
        tooltip: {
            shared: true,
            text: null,
            enabled: false
        },
        title: {
          text: null,
        },
        series: [{
            data: avgTemps,
            name: null,
        }],
        xAxis: {
            categories: dates,
            labels: { enabled: false }
        },
        yAxis: {
          title: {
              text: null,
          },
          labels: { enabled: false },
        },
        legend: {
            enabled: false
        }
    }));
$('.dual-line-chart').append('<div class="small-chart float-right display-inline-block bottom-padding-none"><a href="#" id="dual-line-city">Link to Temp Chart</a></div>');
  $('#dual-line-city').click(function(e){
    e.preventDefault();
    displayChart(cityName, stateName)
  })


    charts[1] = new Highcharts.Chart($.extend(true, {}, options, {
        chart: {
            renderTo: 'line-humid-container',
            width: 150
        },
        tooltip: {
            shared: false,
            enabled: false
        },
        title: {
            text: null
        },
        series: [{
            data: avgHumidity,
            name: null,
            color: 'green'
        }],
        xAxis: {
            categories: dates,
            text: null,
             labels: { enabled: false }
        },
        yAxis: {
          title: {
              text: null,
          },
         labels: { enabled: false }
        },
        legend: {
            enabled: false
        }
    }));

}
