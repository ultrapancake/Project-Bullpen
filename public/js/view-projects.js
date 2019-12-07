$(document).ready(function() {
  $.ajax({
    url: "/api/view-projects",
    type: "GET",
    crossDomain: true,
    headers: {
      Authorization: "Basic " + btoa("_system:SYS"),
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      "Access-Control-Allow-Methods": "GET,POST,OPTIONS"
    }
  }).then(function(response) {
    appendProjects(response);
  });

  function appendProjects(viewProjObj) {
    console.log(
      "response obj view-project.js line 17: " + JSON.stringify(viewProjObj)
    );
    for (var i = 0; i < viewProjObj.length; i++) {
      var projType = viewProjObj[i].projType;
      var projName = viewProjObj[i].projName;
      var clientName = viewProjObj[i].owner;
      var market = viewProjObj[i].market;
      var contractValue = viewProjObj[i].contractValue;

      var startDate = new Date(viewProjObj[i].startDate);
      var monthStartDate = startDate.getMonth();
      var dateStartDate = startDate.getDate();
      var yearStartDate = startDate.getFullYear();
      startDate = monthStartDate + "/" + dateStartDate + "/" + yearStartDate;
      console.log("startDate: " + startDate);

      var endDate = new Date(viewProjObj[i].finishDate);
      var monthFinishDate = endDate.getMonth();
      var dateFinishDate = endDate.getDate();
      var yearFinishDate = endDate.getFullYear();
      endDate = monthFinishDate + "/" + dateFinishDate + "/" + yearFinishDate;
      console.log("finish date: " + endDate);

      var uniqueId = viewProjObj[i].id;

      var projColor = "";

      if (projType === "lead") {
        projColor = "lead";
      } else {
        projColor = "project";
      }

      var appendFront = `<div class="card mt-4 mr-4 ml-4">
      <div class="card-header projType ${projColor}">${projType}</div>
      <div class="card-body">
        <div class="row">
            <div class="col-6">
                <h1 class="card-title projName">${projName}</h1>
            </div>
            <div class="col-6">
                <h2 class="card-title client">${clientName}</h2>
            </div>
        </div>
        <div class="row">
            <div class="col-6">
                <h3 class="card-title market">${market}</h3>
            </div>
            <div class="col-6">
                <h4 class="card-title contractValue">$${contractValue}</h4>
            </div>
        </div>
        <div class="row">
                <p class="ml-3 card-text startDate">${startDate}</p><p class="dash">-</p><p class="finishDate">${endDate}</p>
        </div>
        <div class="row">
            <div class="col-12">
                <a id="${uniqueId}" class="mt-4 btn btn-primary viewProj">View Project</a>
            </div>
        </div>
      </div>
    </div>`;

      $("#project-div").append(appendFront);
    }
  }
});
