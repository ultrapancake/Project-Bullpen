$(document).ready(function() {
  $("#addEmp").click(function() {
    //grabbing user input from form on add-employee page
    $("#added-message").remove();
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

    var message = $("<p>");
    message.text("Employee has been added.");
    message.attr({
      id: "added-message"
    });
    message.addClass("text-strong added-message");
    $("#add-employee-form").append(message);
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
