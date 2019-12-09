$.ajax({
  url: "/api/view-employees",
  type: "GET",
  crossDomain: true,
  headers: {
    Authorization: "Basic " + btoa("_system:SYS"),
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS"
  }
}).then(function(response) {
  console.log("View Employees response: " + JSON.stringify(response));
  var empProjects = response.pop();
  console.log(empProjects);
  for (var i = 0; i < response.length; i++) {
    var firstName = response[i].firstName;
    var lastName = response[i].lastName;
    var employeeMarket = response[i].markets;
    var employeeTitle = response[i].title;
    // var employeeProjects = empProjects[i];
    var employeeId = response[i].id;
    // var empID = response[i].empID;
    console.log(response[i]);

    let empAppend = `          <div class="modal fade" id="${employeeId}" tabindex="-1" role="dialog" aria-labelledby="modal${firstName}${lastName}" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modal${firstName}${lastName}">${firstName} ${lastName}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
            <form>
                <div class="form-group">
                  <input type="text" class="form-control" id="firstName${employeeId}" value="${firstName}">
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" id="lastName${employeeId}" value="${lastName}">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" id="market${employeeId}" value="${employeeMarket}">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" id="title${employeeId}" value="${employeeTitle}">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" id="title${employeeId}" value="${employeeId}">
                </div>
              </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="submit" class="btn btn-fill btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
<div class="card mt-4 mr-4 ml-4">
    <div class="card-body">
      <div class="row">
        <div class="col-6">
          <h1 class="card-title employeeName">${firstName} ${lastName}</h1>
        </div>
        <div class="col-6">
          <h2 class="card-title employeeMarket">${employeeMarket}</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <h3 class="card-title employeeTitle">${employeeTitle}</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <a class="btn btn-primary mr-2" id="moreInfo" data-id="${employeeId}">More Info</a>
          <button type="button" class="btn btn-fill btn-primary" data-toggle="modal" data-target="#${employeeId}">
              Edit
            </button>
        </div>
        <div class="col-6">
          <a class="btn btn-red btn-danger float-right" id="deleteEmployee" data-id="${employeeId}" data-name="${firstName} ${lastName}">Delete</a>
      </div>
    </div>
  </div>`;

    $("#employee-div").append(empAppend);
  }
});

{
  /* <div class="col-6">
<h4 class="card-title employeeProjects">${employeeProjects}</h4>
</div> */
}

// On click button
$(document).on("click", "#deleteEmployee", function() {
  var id = $(this).data("id");
  console.log("delete Employee on click capture of data-id attr: " + id);
  var delPrompt = confirm(
    "Are you sure you want to delete " + $(this).data("name")
  );
  if (delPrompt === true) {
    $.ajax({
      method: "DELETE",
      url: "/api/employee/" + id
    }).then(function() {
      location.reload();
    });
  } else {
    return false;
  }
});
