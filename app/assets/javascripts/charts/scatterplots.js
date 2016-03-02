var displayScatterPlotAmbientTemps = function(allTemps){

  var scatterplotData = []
  for (var i = 0; i < allTemps.length; i++) {

    scatterplotData.push({allInfaredTemperatures: allTemps[i][1], allAmbientTemperatures: allTemps[i][0]});
  }

  $('#national-chart-container').highcharts({
    chart: {
      type: 'scatter',
      zoomType: 'xy'
    },
    navigator : {
      enabled: true,
      adaptToUpdatedData: false,
      series : {
        data : allTemps
      }
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
      text: 'National Infared Temperature Readings'
    },
    subtitle: {
      text: null,
    },
    xAxis: {
      title: {
        enabled: true,
        text: 'Ambient Temperatures'
      },
      startOnTick: true,
      endOnTick: true,
      showLastLabel: true
    },
    yAxis: {
      title: {
        text: 'Human Temperatures Measured Through Infrared'
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
      borderWidth: 1
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
          pointFormat: '{point.y} human degrees F, {point.y} ambient degrees F'
        }
      }
    },
    series: [{
      name: 'Human Temperature Readings',
      color: 'rgba(223, 83, 83, .5)',
      data: allTemps
    }],
  });
}

var displayScatterPlotHumidities = function(allDataPoints){

  var scatterplotData = []
  for (var i = 0; i < allDataPoints.length; i++) {

    scatterplotData.push({allInfaredTemperatures: allDataPoints[i][1], allHumidities: allDataPoints[i][0]});
  }

  $('#national-chart-container').highcharts({
    chart: {
      type: 'scatter',
      zoomType: 'xy'
    },
    navigator : {
      enabled: true,
      adaptToUpdatedData: false,
      series : {
        data : allDataPoints
      }
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
      text: 'National Infared Temperature Readings'
    },
    subtitle: {
      text: 'TAP'
    },
    xAxis: {
      title: {
        enabled: true,
        text: 'Humidity Percentage at Time of Reading'
      },
      startOnTick: true,
      endOnTick: true,
      showLastLabel: true
    },
    yAxis: {
      title: {
        text: 'Human Temperatures Measured Through Infrared'
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
      borderWidth: 1
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
          pointFormat: '{point.x} percent humidity, {point.y} degrees F'
        }
      }
    },
    series: [{
      name: 'Human Temperature Readings',
      color: 'rgba(223, 83, 83, .5)',
      data: allDataPoints
    }]
  });
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
      width: 190,
      height: 150,
      marginTop: 0,
      marginBottom: 0,
    },
    exporting: {
      enabled: false
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
      $('.ambient-temp-holder-master').append('<div class="col-md-6" id="ambient-temp-text-sidebar"><a href="#" id="ambient-temp-link"><b>Human and Ambient Temperature Scatterplot</b></a><br>Evaluate if spikes in fevers are related to ambient temperature factors.</div>');

  $('#ambient-temp-link').click(function(e){
    e.preventDefault();
    clearDivs();
    displayScatterPlotAmbientTemps(allTemps);
    // $('.sidebar-right .sidebar-body').hide('slide');
    // $('.mini-submenu-right').fadeIn();
    $('#national-chart-container').show();
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
      width: 190,
      height: 150,
    },
    exporting: {
      enabled: false
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
  $('.humidity-holder-master').append('<div class="col-md-6" id="humidity-text-sidebar"><a href="#" id="humidity-link"><b>Humidity Scatterplot</b></a><br>Evaluate if spikes in fevers are related to humidity.</div>');

    $('#humidity-link').click(function(e){
    e.preventDefault();
    clearDivs();
    displayScatterPlotHumidities(allDataPoints);
    // $('.sidebar-right .sidebar-body').hide('slide');
    // $('.mini-submenu-right').fadeIn();
    $('#national-chart-container').show();
    $('.charts-overlay').fadeIn();
    var index = Highcharts.charts.length - 1
    var chart = Highcharts.charts[index]
    chart.reflow();
  })
}


