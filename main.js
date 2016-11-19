google.charts.load('current', {'packages':['corechart']});

google.charts.setOnLoadCallback(drawChart);

// start drawing the chart

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ["Substance", "pH", {role: "style"} ],
    ["Lemon Juice", 2.4, "#fbfd57"],
    ["Tomatoes", 4.5, "red"],
    ["Windex", 9.9, "#2b74f2"],
    ["Household Bleach", 12.5, "#EEEEEE"]
    ]);

  var view = new google.visualization.DataView(data);
    view.setColumns([0,1,
    {
      calc: "stringify",
      sourceColumn: 1,
      type:"string",
      role: "annotation"},
      2]);

    var options = {
      'title': "pH Values of Household Items",
      height: 400,
      width: 600,
      bar: {groupWidth: "95%"},
      legend: {position: "none"},
    };

    var chart = new google.visualization.BarChart(document.getElementById("chart_div"));
    chart.draw(view, options);

} // ends func

google.charts.load('current', {'packages':['corechart']});

google.charts.setOnLoadCallback(drawChart);

// start drawing the chart

function drawChart() {

  // create the table that holds our data

  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Type of Vehicle');
  data.addColumn('number', 'Number of Vehicles');
  data.addRows([
    ['Cars', 140],
    ['Motorbikes', 70],
    ['Vans', 55],
    ['Buses', 5]
    ]);

  // add style

  var options = {
    'title': 'Most Common Cars in Traffic',
    'height': 400,
    'width': 600
  };

  var chart = new google.visualization.PieChart(document.getElementById('sec_chart'));
    chart.draw(data,options);
} // ends func
