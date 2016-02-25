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
      var news = response.pop();
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
      })


      $('#heatmap-text-sidebar').remove();
      $('#linechart-text-sidebar').remove();


      displayLineChartSideBar(cityName, stateName, dates, avgTemps);
      displayHeatMapSideBar(dates, heatMapData, cityName, stateName);
      if (!!news[1] && news[0].title !== news[1].title) {
        $('#news-container-sidebar').html("<h4>Recent Health News</h4><div class='news-article'><a target='_blank' href='" + news[0].uri + "'>" + news[0].title + "</a></div><div class='news-article'><a target='_blank' href='" + news[1].uri + "'>" + news[1].title + "</a></div>");
      } else if (!!news[0]){
        $('#news-container-sidebar').html("<h4>Recent Health News</h4><div class='news-article'><a target='_blank' href='" + news[0].uri + "'>" + news[0].title + "</a></div>");
      } else {
        $('#news-container-sidebar').html("<h4>Recent Health News</h4><div class='news-article'>No Recent News</div>");
      }
    });
};



var clearDivs = function(){
  $('#national-chart-container').empty()
  $('#city-chart-container').empty();
};


var displayHeatMapSideBar = function(dates, heatMapData, cityName, stateName){

    $('#heatmap-container-sidebar').highcharts({

        chart: {
            type: 'heatmap',
            marginTop: 0,
            marginBottom: 0,
            plotBorderWidth: 1,
            width: 125,
            height: 125
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
$('.heatmap-holder-master').append('<div class="col-md-6 sidebar-text" id="heatmap-text-sidebar"><a href="#" id="heatmap-link"><b>Heatmap</b></a><br>View heatmap data for ' + cityName + '.  </div>');
  $('#heatmap-link').click(function(e){
    e.preventDefault();
    clearDivs();
    displayHeatMap(dates, heatMapData, cityName);
    $('#city-chart-container').show();
  })

  $('#heatmap-link').click(function(e){
    e.preventDefault();
    clearDivs();
    displayHeatMap(dates, heatMapData, cityName);
    // $('.sidebar-right .sidebar-body').hide('slide');
    // $('.mini-submenu-right').fadeIn();
    $('#city-chart-container').show();
    // $('.overlay').fadeIn();
    $('.charts-overlay').fadeIn();
    var index = Highcharts.charts.length - 1
    var chart = Highcharts.charts[index]
    chart.reflow();
  })

}


var displayLineChartSideBar = function(cityName, stateName, dates, avgTemps){

      $('#linechart-container-sidebar').highcharts({
          chart: {
              type: 'line',
            width: 125,
            height: 125,
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
      $('.linechart-holder-master').append('<div class="col-md-6" id="linechart-text-sidebar"><a href="#" id="linechart-link"><b>Linechart</b></a><br>View ' + cityName + ' temperature data.</div>');
  $('#linechart-link').click(function(e){
    e.preventDefault();
    clearDivs();
    displayLineChart(cityName, stateName, dates, avgTemps);
    // $('.sidebar-right .sidebar-body').hide('slide');
    // $('.mini-submenu-right').fadeIn();
    $('#city-chart-container').show();
    // $('.overlay').fadeIn();
    $('.charts-overlay').fadeIn();
    var index = Highcharts.charts.length - 1
    var chart = Highcharts.charts[index]
    chart.reflow();
    })

}

var displayNationalDataSidebar = function(){

  var timeFrame = 7;
  var dates = [];

  $.ajax({
    method: "GET",
    url: "/find_all?timeframe=" + timeFrame,
    dataType: 'JSON'
  })
  .done(function(response){
    var chartData = response;
      var todayDate = new Date();
      for (i=0; i < timeFrame; i++){
        var newDate = new Date();
        newDate.setDate(todayDate.getDate() - (timeFrame - i));
        dates.push(newDate.toJSON().slice(0,10));
      }

      var allTemps = []
      chartData.forEach(function(item){
        allTemps.push([item.ambient_temp, item.temp])
      })

       var allHumidities = []
        chartData.forEach(function(item){
          allHumidities.push([item.humidity, item.temp])
        })

    displayScatterPlotAmbientTempsSidebar(allTemps);
    displayScatterPlotHumiditiesSidebar(allHumidities);
  })

}




var displayScatterPlotAmbientTempsSidebar = function(allTemps){

  var scatterplotData = []
  for (var i = 0; i < allTemps.length; i++) {

    scatterplotData.push({allInfaredTemperatures: allTemps[i][1], allAmbientTemperatures: allTemps[i][0]});
  }

  $('#ambient-temp-container-sidebar').highcharts({
    chart: {
      type: 'scatter',
      zoomType: 'xy',
      width: 150,
      height: 150,
      marginTop: 0,
      marginBottom: 0,

    },
    title: {
      text: null
    },
    subtitle: {
      text: null
    },
    xAxis: {
      title: {
        enabled: false,
        text: null
      },
      startOnTick: true,
      endOnTick: true,
      showLastLabel: true,
      categories: null,
      labels: {
              enabled: false
            }
    },
    yAxis: {
      title: {
        text: null
      },
      categories: null,
      labels: {
              enabled: false
            }
    },
    legend: {
      layout: 'vertical',
      align: 'left',
      verticalAlign: 'top',
      x: 100,
      y: 70,
      floating: true,
      backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
      borderWidth: 1,
      enabled: false
    },
    plotOptions: {
      scatter: {
        marker: {
          radius: 5,
          states: {
            hover: {
              enabled: false,
              lineColor: 'rgb(100,100,100)'
            }
          }

        },
        states: {
          hover: {
            marker: {
              enabled: false
            }
          }
        },
        tooltip: {
            enabled: false
        },
      }
    },
    series: [{
      name: null,
      color: 'rgba(223, 83, 83, .5)',
      data: allTemps

    }]

      });
      $('.ambient-temp-holder-master').append('<div class="col-md-6" id="ambient-temp-text-sidebar"><a href="#" id="ambient-temp-link"><b>Ambient Temp Scatterplot</b></a><br>View scatterplot data to evaluate IR temperature and ambient temperature correlation.</div>');
  $('#ambient-temp-link').click(function(e){
    e.preventDefault();
    clearDivs();
    displayScatterPlotAmbientTemps(allTemps);
    // $('.sidebar-right .sidebar-body').hide('slide');
    // $('.mini-submenu-right').fadeIn();
    $('#national-chart-container').show();
    // $('.overlay').fadeIn();
    $('.charts-overlay').fadeIn();
    var index = Highcharts.charts.length - 1
    var chart = Highcharts.charts[index]
    chart.reflow();
    })
}

var displayScatterPlotHumiditiesSidebar = function(allDataPoints){

  var scatterplotData = []
  for (var i = 0; i < allDataPoints.length; i++) {

    scatterplotData.push({allInfaredTemperatures: allDataPoints[i][1], allHumidities: allDataPoints[i][0]});
  }

  $('#humidity-container-sidebar').highcharts({
    chart: {
      type: 'scatter',
      zoomType: 'xy',
      width: 150,
      height: 150,
    },
    title: {
      text: null
    },
    subtitle: {
      text: null
    },
    xAxis: {
      title: {
        enabled: false,
        text: 'Humidity Percentage at Time of Reading'
      },
      startOnTick: true,
      endOnTick: true,
      showLastLabel: true,
      categories: null,
      labels: {
              enabled: false
            }
    },
    yAxis: {
      title: {
        text: null
      },
      categories: null,
      labels: {
              enabled: false
            }
    },
    legend: {
      layout: 'vertical',
      align: 'left',
      verticalAlign: 'top',
      x: 100,
      y: 70,
      floating: true,
      backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
      borderWidth: 1,
      enabled: false
    },
    plotOptions: {
      scatter: {
        marker: {
          radius: 5,
          states: {
            hover: {
              enabled: true,
              lineColor: 'rgb(100,100,100)'
            }
          }

        },
        states: {
          hover: {
            marker: {
              enabled: false
            }
          }
        },
        tooltip: {
          headerFormat: '<b>{series.name}</b><br>',
          pointFormat: '{point.x} degrees F, {point.y}',
          enabled: false
        }
      }
    },
    series: [{
      name: null,
      color: 'rgba(223, 83, 83, .5)',
      data: allDataPoints
    }]
  });
  $('.humidity-holder-master').append('<div class="col-md-6" id="humidity-text-sidebar"><a href="#" id="humidity-link"><b>Humidity Scatterplot</b></a><br>View scatterplot data to evaluate temperature and humidity correlation.</div>');
    $('#humidity-link').click(function(e){
    e.preventDefault();
    clearDivs();
    displayScatterPlotHumidities(allDataPoints);
    // $('.sidebar-right .sidebar-body').hide('slide');
    // $('.mini-submenu-right').fadeIn();
    $('#national-chart-container').show();
    // $('.overlay').fadeIn();
    $('.charts-overlay').fadeIn();
    var index = Highcharts.charts.length - 1
    var chart = Highcharts.charts[index]
    chart.reflow();
    })
}


