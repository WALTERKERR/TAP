
var displayLineChart = function(cityName, stateName, dates, avgTemps){

  var timeFrame = 7;

  var chart = $('#city-chart-container').highcharts({
   chart: {
    type: 'line',
    marginTop: 75,
    marginBottom: 75,
  },

  exporting: {
            buttons: {
                contextButton: {
                    menuItems: [{
                        text: 'Export to PNG',
                        onclick: function () {
                            this.exportChart();
                        },
                        separator: false
                    }, {
                        text: 'Export to PDF',
                        onclick: function () {
                            this.exportChart({
                                type: 'application/pdf'
                            });
                        }
                    }, {
                        text: 'Export to SVG',
                        onclick: function () {
                            this.exportChart({
                                type: 'image/svg+xml'
                            });
                        }
                    }]
                }
            }
        },

  tooltip: {
    enabled: true
  },

  navigator : {
    enabled: true,
    adaptToUpdatedData: false,
    series : {
      data : dates
    },
  },

  legend: {
    enabled: true
  },


  title: {
    text: "Average Human Temperatures Detected in " + cityName
  },
  xAxis: {
    categories: dates,
    title: "Dates",
    dataLabels: {
      enabled: true
    }
  },
  yAxis: {
    min:97,
    max: 102,
  },
  labels: {
    enabled: true,
  },
  series: [
  {
    name: "Average Temperatures",
    data: avgTemps,
    dataLabels: {
      enabled: false,
      color: '#000000'
    },
  }]
});

    //trigger for interactive chart
$('.charts-overlay').on('click', 'a', function(e){
  e.preventDefault();
  timeFrame = $(e.target).attr('id')
  $.ajax({
    method: "GET",
    url: "/find?city=" + cityName + "&state=" + stateName + "&timeframe=" + timeFrame,
    dataType: 'JSON'
  })
  .done(function(response){
    var chartData = response;

    var todayDate = new Date();
    var dates = [];
    for (i=1; i <= timeFrame; i++){
      var newDate = new Date();
      newDate.setDate(todayDate.getDate() - (timeFrame - i));
      dates.push(newDate.toJSON().slice(0,10));
    }

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
    $('#city-chart-container').highcharts({
      chart: {
        type: 'line',
        marginTop: 50,
        marginBottom: 50,
      },

      tooltip: {
        enabled: true
      },


      legend: {
        enabled: true
      },


      title: {
        text: "Average Human Temperatures Detected in " + cityName
      },
      xAxis: {
        categories: dates,
        title: "Dates",
        dataLabels: {
          enabled: true
        }
      },
      yAxis: {
        title: {
          text: "Temperatures"
        },

        labels: {
          enabled: true
        }
      },
      series: [
      {
        name: "Average Temperatures",
        data: avgTemps,
        dataLabels: {
          enabled: false,
          color: '#000000'
        },
      }]

    });

  });
})



}

var displayHeatMap = function(dates, heatMapData, cityName){
  $('#city-chart-container').highcharts({

    chart: {
      type: 'heatmap',
        // marginTop: 60,
        // marginBottom: 60,
        plotBorderWidth: 1
      },

      exporting: {
            buttons: {
                contextButton: {
                    menuItems: [{
                        text: 'Export to PNG',
                        onclick: function () {
                            this.exportChart();
                        },
                        separator: false
                    }, {
                        text: 'Export to PDF',
                        onclick: function () {
                            this.exportChart({
                                type: 'application/pdf'
                            });
                        }
                    }, {
                        text: 'Export to SVG',
                        onclick: function () {
                            this.exportChart({
                                type: 'image/svg+xml'
                            });
                        }
                    }]
                }
            }
        },

      title: {
        text: 'Temperature data by day for ' + cityName
      },

      navigator : {
        enabled: false,
        adaptToUpdatedData: false,
        series : {
          data : dates
        },
      },

      yAxis: {
        categories: ['<95 (Hypothermia)', '95-97.69 (Below Average)', '97.7-98.5 (Normal)', '98.5-99.5 (Normal)', '99.5-100.9 (Hyperthermia/Fever)', '100.9 - 104 (Severe Hyperthermia)', '>104 (Hyperpyrexia)']
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
        symbolHeight: 280
      },

      tooltip: {
        formatter: function () {
          return 'On <b>' + this.series.xAxis.categories[this.point.x] + '</b>, <b>' +
          this.point.value + '</b> people registered between <br><b>' + this.series.yAxis.categories[this.point.y];
        }
      },

      series: [{
        name: 'Temperature by count',
        borderWidth: 1,
        data: heatMapData,
        // data: testHeatData,
        dataLabels: {
          enabled: true,
          color: '#000000'
        }
      }]
    });
}
