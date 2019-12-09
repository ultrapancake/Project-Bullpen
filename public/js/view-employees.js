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

    let empAppend = `<div class="card mt-4 mr-4 ml-4">
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
          <a class="btn btn-fill btn-primary" id="editEmployee" data-id="${employeeId}">Edit Employee</a>
        </div>
        <div class="col-6">
          <a class="btn btn-red btn-danger float-right" id="deleteEmployee" data-id="${employeeId}">Delete</a>
      </div>
    </div>
  </div>`;

    $("#employee-div").append(empAppend);
  }
});

{/* <div class="col-6">
<h4 class="card-title employeeProjects">${employeeProjects}</h4>
</div> */}
