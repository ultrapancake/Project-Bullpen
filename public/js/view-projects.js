var viewProjectsArr = {}};
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
}).then(function(viewProjectsRes) {
  console.log(viewProjectsRes);
  viewProjectArr = viewProjectsRes;
});

$(document).ready(function appendProjects() {
  for (var i = 0; i < viewProjectsRes.length; i++) {
    var projType = viewProjectsRes[0];
    var projName = viewProjectsRes[1];
    var clientName = viewProjectsRes[2];
    var market = viewProjectsRes[3];
    var contractValue = viewProjectsRes[4];
    var startDate = viewProjectsRes[5];
    var endDate = viewProjectsRes[6];
    var uniqueId = viewProjectRes[7];
    var projColor = "";

    if (projType === "lead") {
      projColor = "lead";
    } else {
      projColor = "project";
    }

    let append = `<div class="card mt-4 mr-4 ml-4">
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
                <p class="ml-3 card-text startDate">${startDate}</p><p class="dash"> - </p><p class="finishDate">${endDate}</p>
        </div>
        <div class="row">
            <div class="col-12">
                <a id="${uniqueId}" class="mt-4 btn btn-primary viewProj">View Project</a>
            </div>
        </div>
      </div>
    </div>`;

    $("#project-div").append(append);
  }
});
