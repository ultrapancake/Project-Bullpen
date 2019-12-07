$(document).ready(function() {
  // Date Format must be converted to: new Date(2014, 8, 22)
  // Before pushing to ajax POST
  $("#addProj").click(function() {
    //grabbing user input from form on add-Project page
    event.preventDefault();
    var sDate = $("#projStart")
      .val()
      .split(/\s*\-\s*/g)
      .toString()
      .split(",")
      .join(", ");

    var startDate = "new Date(";
    startDate = startDate + sDate + ")";
    var fDate = $("#projFinish")
      .val()
      .split(/\s*\-\s*/g)
      .toString()
      .split(",")
      .join(", ");

    var finishDate = "new Date(";
    finishDate = finishDate + fDate + ")";

    var newProject = {
      projName: $("#projName").val(),
      owner: $("#projOwn").val(),
      contractValue: $("#projVal").val(),
      market: $("#projMarket").val(),
      startDate: startDate,
      finishDate: finishDate
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
