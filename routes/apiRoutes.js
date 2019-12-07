var db = require("../models");
// var axios = require("axios");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  app.get("/api/employees", function(req, res) {
    db.Employees.findAll({}).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  app.get("/api/index", function(req, res) {
    db.Projects.findAll({}).then(function(dbProjects) {
      var array = [];
      console.log(eval(dbProjects[0].startDate));
      for (var i = 0; i < dbProjects.length; i++) {
        var ranArray = [];
        ranArray.push(dbProjects[i].id.toString());
        ranArray.push(dbProjects[i].owner);
        ranArray.push(dbProjects[i].projType);
        ranArray.push(dbProjects[i].startDate);
        ranArray.push(dbProjects[i].finishDate);
        ranArray.push(null);
        ranArray.push(null);
        ranArray.push(null);
        array.push(ranArray);
      }
      console.log(array);
      res.json(array);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  app.post("/api/add-employee", function(req, res) {
    db.Employees.create(req.body).then(function(dbEmployees) {
      res.json(dbEmployees);
    });
  });
  app.post("/api/add-project", function(req, res) {
    db.Projects.create(req.body).then(function(dbProjects) {
      res.json(dbProjects);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });

  app.delete("/api/remove-employee/:id", function(req, res) {
    db.Employees.destroy({
      where: { id: req.params.id }
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });
};
