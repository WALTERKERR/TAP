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


      $('#heatmap-text-sidebar').remove();
      $('#linechart-text-sidebar').remove();
      displayLineChartSideBar(cityName, stateName, dates, avgTemps);
      displayHeatMapSideBar(dates, heatMapData, cityName, stateName);
    });
};



var clearDivs = function(){
  $('#chart-container').empty();
};


var displayHeatMapSideBar = function(dates, heatMapData, cityName, stateName){

    $('#heatmap-container-sidebar').highcharts({

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
$('.heatmap-holder-master').append('<div class="col-md-6 sidebar-text" id="heatmap-text-sidebar"><a href="#" id="heatmap-link"><b>Heatmap</b></a><br>View heatmap data for ' + cityName + '.  This chart is useful for displaying the range of temperatures recorded to identify trends.</div>');
  $('#heatmap-link').click(function(e){
    e.preventDefault();
    clearDivs();
    displayHeatMap(dates, heatMapData, cityName);
    $('#chart-container').show();
    $('.charts-overlay').show();
    var index = Highcharts.charts.length - 1
    var chart = Highcharts.charts[index]
    chart.reflow();
  })
}


var displayLineChartSideBar = function(cityName, stateName, dates, avgTemps){

      $('#linechart-container-sidebar').highcharts({
          chart: {
              type: 'line',
            width: 150,
            height: 150,
            marginTop: 0,
            marginBottom: 0,
          },

        tooltip: {
            enabled: false
        },


        legend: {
            enabled: false
        },


          title: {
              text: null
          },
          xAxis: {
              categories: dates,
              title: null,
              dataLabels: {
              enabled: false
            }
          },
          yAxis: {
              title: {
              text: null
              },

        tooltip: {
            enabled: false,
        },

          labels: {
              enabled: false
            }
          },
          series: [
          {
              name: null,
              data: avgTemps,
              dataLabels: {
                enabled: false,
                color: '#000000'
        },
          }]
      });
      $('.linechart-holder-master').append('<div class="col-md-6" id="linechart-text-sidebar"><a href="#" id="linechart-link"><b>Linechart</b></a><br>View line chart data for ' + cityName + ' to view ambient and infared temperature readings.  This chart is useful for identifying trends and elmininating potential false positives.</div>');
  $('#linechart-link').click(function(e){
    e.preventDefault();
    clearDivs();
    displayLineChart(cityName, stateName, dates, avgTemps);
    $('.sidebar-right .sidebar-body').hide('slide');
    $('.mini-submenu-right').fadeIn();
    $('#chart-container').show();
    var index = Highcharts.charts.length - 1
    var chart = Highcharts.charts[index]
    chart.reflow();
  })

}
