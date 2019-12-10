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

      var endDate = new Date(viewProjObj[i].finishDate);
      var monthFinishDate = endDate.getMonth();
      var dateFinishDate = endDate.getDate();
      var yearFinishDate = endDate.getFullYear();
      endDate = monthFinishDate + "/" + dateFinishDate + "/" + yearFinishDate;

      var uniqueId = viewProjObj[i].id;

      var projColor = "";

      if (projType === "lead") {
        projColor = "lead";
      } else {
        projColor = "project";
      }

      let appendFront = `<div
      class="modal fade"
      id="modal${uniqueId}"
      tabindex="-1"
      role="dialog"
      aria-labelledby="modal${projName}"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modal${projName}">
              ${projName}
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="projectName${uniqueId}"
                  value="${projName}"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="clientName${uniqueId}"
                  value="${clientName}"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="projectType${uniqueId}"
                  value="${projType}"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="market${uniqueId}"
                  value="${market}"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="contractValue${uniqueId}"
                  value="${contractValue}"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="startDate${uniqueId}"
                  value="${startDate}"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="endDate${uniqueId}"
                  value="${endDate}"
                />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="submit" class="btn btn-fill btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="card mt-2 mb-2 mr-4 ml-4">
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
          <p class="ml-3 card-text startDate">${startDate}</p>
          <p class="dash">-</p>
          <p class="finishDate">${endDate}</p>
        </div>
        <div class="row mt-2">
          <div class="col-6">
            <a
              class="btn btn-primary mr-2"
              id="moreInfo"
              data-id="${uniqueId}"
              >More Info</a
            >
            <button
              type="button"
              class="btn btn-fill btn-primary"
              data-toggle="modal"
              data-target="#modal${uniqueId}"
            >
              Edit
            </button>
          </div>
          <div class="col-6">
            <a
              class="btn btn-red btn-danger float-right"
              id="deleteProject"
              data-id="${uniqueId}"
              data-name="${projName}"
              >Delete</a
            >
          </div>
        </div>
      </div>
    </div>`;

      $("#project-div").append(appendFront);
    }
  }
});

//Delete item on click
$(document).on("click", "#deleteProject", function() {
  var id = $(this).data("id");
  console.log("delete Project on click capture of data-id attr: " + id);
  var delPrompt = confirm(
    "Are you sure you want to delete " + $(this).data("name")
  );
  if (delPrompt === true) {
    $.ajax({
      method: "DELETE",
      url: "/api/project/" + id
    }).then(function() {
      location.reload();
    });
  } else {
    return false;
  }
});
