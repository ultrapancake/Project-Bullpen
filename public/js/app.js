google.charts.load("current", { packages: ["gantt"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = new google.visualization.DataTable();
  data.addColumn("string", "Task ID");
  data.addColumn("string", "Task Name");
  data.addColumn("string", "Resource");
  data.addColumn("date", "Start Date");
  data.addColumn("date", "End Date");
  data.addColumn("number", "Duration");
  data.addColumn("number", "Percent Complete");
  data.addColumn("string", "Dependencies");

  var projectArr;
  $.ajax({
    url: "/api/index",
    method: "GET"
  }).then(function(response) {
    console.log(response);
    projectArr.push(response);
  });

  data.addRows([
    [
      "ID-1235",
      "Project One",
      "Project",
      new Date(2014, 2, 22),
      new Date(2014, 5, 20),
      null,
      null,
      null
    ],
    [
      "ID-12234535",
      "Project Two",
      "Bid",
      new Date(2014, 8, 22),
      new Date(2014, 10, 20),
      null,
      null,
      null
    ],
    [
      "ID-8560",
      "Project Three",
      "Bid",
      new Date(2014, 6, 22),
      new Date(2014, 8, 20),
      null,
      null,
      null
    ],
    [
      "ID-3494",
      "Project Four",
      "Project",
      new Date(2014, 1, 22),
      new Date(2014, 8, 20),
      null,
      null,
      null
    ]
  ]);

  var options = {
    height: 400,

    backgroundColor: {
      fill: "#ECEFF1"
    },
    gantt: {
      trackHeight: 30,
      percentEnabled: false,
      criticalPathEnabled: false
    }
  };

  var chart = new google.visualization.Gantt(
    document.getElementById("chart-div")
  );

  chart.draw(data, options);
}

/* Roll Over Effects for Icons on Buttons*/

$(function() {
  $("#add-employee").hover(
    function() {
      $("#add-player-icon").addClass("add-player-icon-white");
    },
    function() {
      $("#add-player-icon").removeClass("add-player-icon-white");
    }
  );
});

$(function() {
  $("#view-employee").hover(
    function() {
      $("#view-players-icon").addClass("view-players-icon-white");
    },
    function() {
      $("#view-players-icon").removeClass("view-players-icon-white");
    }
  );
});

$(function() {
  $("#add-project").hover(
    function() {
      $("#add-event-icon").addClass("add-event-icon-white");
    },
    function() {
      $("#add-event-icon").removeClass("add-event-icon-white");
    }
  );
});

$(function() {
  $("#view-project").hover(
    function() {
      $("#view-events-icon").addClass("view-events-icon-white");
    },
    function() {
      $("#view-events-icon").removeClass("view-events-icon-white");
    }
  );
});
