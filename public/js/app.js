var projectArr = [];
$.ajax({
  url: "/api/index",
  type: "GET",
  crossDomain: true,
  headers: {
    Authorization: "Basic " + btoa("_system:SYS"),
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS"
  }
}).then(function(response) {
  console.log(response);
  response.forEach(function(res) {
    res[3] = new Date(res[3]);
    res[4] = new Date(res[4]);
  });
  projectArr = response;
});

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
  console.log(projectArr);

  data.addRows(projectArr);

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
