$(document).ready(function() {
  // Date Format must be converted to: new Date(2014, 8, 22)
  // Before pushing to ajax POST
  $("#addProj").click(function() {
    //grabbing user input from form on add-Project page
    event.preventDefault();
    var newProject = {
      projName: $("#projName").val(),
      owner: $("#projOwn").val(),
      contractValue: $("#projVal").val(),
      market: $("#projMarket").val(),
      startDate: $("#projStart").val(),
      finishDate: $("#projFinish").val()
    };

    $("#projName").val("");
    $("#projOwn").val("");
    $("#projVal").val("");
    $("#projMarket").val("");
    $("#projStart").val("");
    $("#projFinish").val("");

    $.ajax({
      url: "/api/add-project",
      method: "POST",
      data: newProject
    }).then(function(response) {
      console.log(response);
      //do something there
    });
  });
});
