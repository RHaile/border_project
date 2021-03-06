Plotly.d3.csv(
    "https://raw.githubusercontent.com/RHaile/final_project/master/data/value_prediction.csv", function (err, rows) {
      function unpack(rows, key) {
        return rows.map(function (row) {
          return row[key];
  });
}


var trace1 = {
  type: "scatter",
  mode: "lines",
  name: 'Value',
  x: unpack(rows, 'Date'),
  y: unpack(rows, 'Value'),
  line: {
    color: '#17BECF'
  }
}

var trace2 = {
  type: "scatter",
  mode: "lines",
  name: 'Actual',
  x: unpack(rows, 'Date'),
  y: unpack(rows, 'Actual'),
  line: {
    color: '#7F7F7F'
  }
}

 var trace3 = {
  type: "scatter",
  mode: "lines",
  name: 'Prediction',
  x: unpack(rows, 'Date'),
  y: unpack(rows, 'Prediction'),
  line: {
    color: '#FF0000'
  }
}

var data = [trace1, trace2, trace3];

var layout = {
  title: 'Prediction VS Actual',
  xaxis: {
    tickformat: '%Y-%m'
  }
};

Plotly.newPlot('myDiv3', data, layout);
})
