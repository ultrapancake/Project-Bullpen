$(document).ready(function() {
  $("#addEmp").click(function() {
    //grabbing user input from form on add-employee page
    event.preventDefault();
    var newEmployee = {
      firstName: $("#firstName").val(),
      lastName: $("#lastName").val(),
      empID: $("#empID").val(),
      title: $("#empTitle").val(),
      markets: $("#empMarkets").val()
    };
    $("#firstName").val("");
    $("#lastName").val("");
    $("#empID").val("");
    $("#empTitle").val("");
    $("#empMarkets").val("");
    $.ajax({
      url: "/api/add-employee",
      method: "POST",
      data: newEmployee
    }).then(function(response) {
      console.log(response);
      //do something there
    });
  });
});
