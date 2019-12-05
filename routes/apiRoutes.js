var db = require("../models");
var axios = require("axios");

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

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  app.post("/api/add-employee", function(req, res) {
    db.Employees.create(req.body).then(function(dbPost) {
      res.json(dbPost);
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
