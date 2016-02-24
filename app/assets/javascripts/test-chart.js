







// var displayTestCharts = function(clickedCity, clickedState){


//     var cityName = "Oakland";
//     var stateName = "California";
//     var timeFrame = 7;

//     $.ajax({
//         method: "GET",
//         url: "/find?city=" + cityName + "&state=" + stateName + "&timeframe=" + timeFrame,
//         dataType: 'JSON'
//     })
//     .done(function(response){
//         //Chart Data
//       var chartData = response;

//       var todayDate = new Date();
//       var dates = [];
//       for (i=0; i < timeFrame; i++){
//           var newDate = new Date();
//           newDate.setDate(todayDate.getDate() - (timeFrame - i));
//           dates.push(newDate.toJSON().slice(0,10));
//       }

//       var avgAmbientTemps = []
//       dates.forEach(function(date) {
//           var dayAmbientTemps = chartData.filter(function(data){
//               return (data["time"].slice(0,10) === date);
//           })
//           var sum = Object.keys(dayAmbientTemps).reduce(function(a, b){
//               return a + dayAmbientTemps[b].ambient_temp;
//           }, 0)
//           if (sum === 0) {
//               avgAmbientTemps.push(null);
//           } else {
//               avgAmbientTemps.push(sum/dayAmbientTemps.length);
//           }
//       })

//       var avgTemps = [];
//       dates.forEach(function(date){
//           var dayTemps = chartData.filter(function(data){
//               return (data["time"].slice(0,10) === date);
//           })
//           var sum = Object.keys(dayTemps).reduce(function(a, b){
//               return a + dayTemps[b].temp;
//           }, 0)
//           if (sum === 0) {
//               avgTemps.push(null);
//           } else {
//               avgTemps.push(sum/dayTemps.length);
//           }
//       })


//     var avgHumidity = [];
//     dates.forEach(function(date){
//         var dayHumidities = chartData.filter(function(data){
//             return (data["time"].slice(0,10) === date);
//         })
//         var sum = Object.keys(dayHumidities).reduce(function(a, b){
//             return a + dayHumidities[b].humidity;
//         }, 0)
//         if (sum === 0) {
//             avgHumidity.push(null);
//         } else {
//             avgHumidity.push(sum/dayHumidities.length);
//         }
//       })

//       var heatMapData = [];

//       dates.forEach(function(date, index){
//         heatMapData.push([index, 0, chartData.filter(function(data){ return data["temp"] <= 95 && data["time"].slice(0,10) === date }).length]);
//         heatMapData.push([index, 1, chartData.filter(function(data){ return data["temp"] > 95 && data["temp"] <= 97.7 && data["time"].slice(0,10) === date }).length]);
//         heatMapData.push([index, 2, chartData.filter(function(data){ return data["temp"] > 97.7 && data["temp"] <= 98.5 && data["time"].slice(0,10) === date }).length]);
//         heatMapData.push([index, 3, chartData.filter(function(data){ return data["temp"] > 98.5 && data["temp"] <= 99.5 && data["time"].slice(0,10) === date }).length]);
//         heatMapData.push([index, 4, chartData.filter(function(data){ return data["temp"] > 99.5 && data["temp"] <= 100.9 && data["time"].slice(0,10) === date }).length]);
//         heatMapData.push([index, 5, chartData.filter(function(data){ return data["temp"] > 100.9 && data["temp"] <= 104 && data["time"].slice(0,10) === date }).length]);
//         heatMapData.push([index, 6, chartData.filter(function(data){ return data["temp"] > 104 && data["time"].slice(0,10) === date }).length]);
//         console.log(date + ":" + index);
//       })

//       // displayLineChart(avgHumidity, avgTemps, dates, cityName, stateName);
//       // displayHeatMap(dates, heatMapData, cityName);
//       // displayScatterPlot(avgAmbientTemps, avgTemps, dates);
//     });
// };


// var displayHeatMap = function(dates, heatMapData, cityName){

//     var testHeatData = [
//         [0, 0, 5], [1, 0, 9], [2, 0, 8], [3, 0, 4], [4, 0, 7], [5, 0, 8], [6, 0, 3],
//         [0, 1, 32], [1, 1, 38], [2, 1, 48], [3, 1, 47], [4, 1, 38], [5, 1, 35], [6, 1, 24],
//         [0, 2, 125], [1, 2, 135], [2, 2, 120], [3, 2, 134], [4, 2, 132], [5, 2, 124], [6, 2, 134],
//         [0, 3, 134], [1, 3, 122], [2, 3, 134], [3, 3, 129], [4, 3, 126], [5, 3, 130], [6, 3, 127],
//         [0, 4, 49], [1, 4, 48], [2, 4, 56], [3, 4, 64], [4, 4, 70], [5, 4, 88],  [6, 4, 95],
//         [0, 5, 18], [1, 5, 14], [2, 5, 25], [3, 5, 26], [4, 5, 30], [5, 5, 45], [6, 5, 51],
//         [0, 6, 19], [1, 6, 14], [2, 6, 18], [3, 6, 18], [4, 6, 16], [5, 6, 11], [6, 6, 18]
//         ];

//     $('#heatmap-container').highcharts({

//         chart: {
//             type: 'heatmap',
//             marginTop: 40,
//             marginBottom: 80,
//             plotBorderWidth: 1
//         },


//         title: {
//             text: 'Temperature data by day for ' + cityName
//         },

//         yAxis: {
//             categories: ['<95 (Hypothermia)', '95-97.69 (Below Average)', '97.7-98.5 (Normal)', '98.5-99.5 (Normal)', '99.5-100.9 (Hyperthermia/Fever)', '100.9 - 104 (Severe Hyperthermia)', '>104 (Hyperpyrexia)']
//         },

//         xAxis: {
//             categories: dates,
//             title: null
//         },

//         colorAxis: {
//             min: 0,
//             minColor: '#FFFFFF',
//             maxColor: Highcharts.getOptions().colors[0]
//         },

//         legend: {
//             align: 'right',
//             layout: 'vertical',
//             margin: 0,
//             verticalAlign: 'top',
//             y: 25,
//             symbolHeight: 280
//         },

//         tooltip: {
//             formatter: function () {
//                 return 'On <b>' + this.series.xAxis.categories[this.point.x] + '</b>, <b>' +
//                     this.point.value + '</b> people registered between <br><b>' + this.series.yAxis.categories[this.point.y];
//             }
//         },

//         series: [{
//             name: 'Temperature by count',
//             borderWidth: 1,
//             data: heatMapData,
//             // data: testHeatData,
//             dataLabels: {
//                 enabled: true,
//                 color: '#000000'
//             }
//         }]

//     });
// }




// var displayLineChart = function(avgHumidity, avgTemps, dates, cityName, stateName){
//     var charts = [],
//     options;

//     function syncTooltip(container, p) {
//         var i = 0;
//         for (; i < charts.length; i++) {
//             if (container.id != charts[i].container.id) {
//                 if(charts[i].tooltip.shared) {
//                     charts[i].tooltip.refresh([charts[i].series[0].data[p]]);
//                 }
//                 else {
//                     charts[i].tooltip.refresh(charts[i].series[0].data[p]);
//                 }
//             }
//         }
//     }

//     options = {
//         plotOptions: {
//             series: {
//                 point: {
//                     events: {
//                         mouseOver: function () {
//                             syncTooltip(this.series.chart.container, this.x);
//                         }
//                     }
//                 }
//             }
//         },

//     };

//     charts[0] = new Highcharts.Chart($.extend(true, {}, options, {
//         chart: {
//             renderTo: 'line-temp-container'
//         },
//         tooltip: {
//             shared: true,
//             valueDecimals: 2
//         },
//         title: {
//           text: cityName + ", " + stateName
//         },
//         series: [{
//             data: avgTemps,
//             name: "Temperature"
//         }],
//         xAxis: {
//             categories: dates,
//             labels: { enabled: false }
//         },
//         yAxis: {
//           title: {
//               text: 'Temperature'
//           }
//         },
//         legend: {
//             enabled: false
//         }
//     }));


//     charts[1] = new Highcharts.Chart($.extend(true, {}, options, {
//         chart: {
//             renderTo: 'line-humid-container'
//         },
//         tooltip: {
//             shared: false
//         },
//         title: {
//             text: ''
//         },
//         series: [{
//             data: avgHumidity,
//             name: "Humidity",
//             color: 'green'
//         }],
//         xAxis: {
//             categories: dates
//         },
//         yAxis: {
//           title: {
//               text: 'Humidity'
//           }
//         },
//         legend: {
//             enabled: false
//         }
//     }));

// }
