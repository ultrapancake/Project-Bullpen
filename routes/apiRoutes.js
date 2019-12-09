var db = require("../models");
// var axios = require("axios");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  app.get("/api/view-employees", function(req, res) {
    db.Employees.findAll({}).then(function(dbEmployees) {
      var tempObj = dbEmployees;
      var popProj = [];
      for (var i = 0; i < tempObj.length; i++) {
        db.populatedProject
          .findAll({
            where: { empID: tempObj[i].empID }
          })
          .then(function(dbPopulatedProject) {
            console.log(
              "PopProj apiRoutes line 25: " + JSON.stringify(dbPopulatedProject)
            );
            popProj.push(dbPopulatedProject);
          });
      }
      tempObj.push(popProj).Result;
      console.log(
        "dbEmployees apiRoutes.js line 14: " + JSON.stringify(dbEmployees)
      );
      console.log(
        "dbEmployees apiRoutes.js line 32: " + JSON.stringify(tempObj)
      );
      res.json(tempObj);
    });
  });

  app.get("/api/index", function(req, res) {
    db.Projects.findAll({}).then(function(dbProjects) {
      var array = [];
      // console.log(eval(dbProjects[0].startDate));
      for (var i = 0; i < dbProjects.length; i++) {
        var ranArray = [];
        ranArray.push(dbProjects[i].id.toString());
        ranArray.push(dbProjects[i].projName);
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

  app.get("/api/view-projects", function(req, res) {
    db.Projects.findAll({}).then(function(dbProjects) {
      //send full Object and allow front end to loop through what they need.
      res.json(dbProjects);
    });
  });

  app.get("/api/employee/:id", function(req, res) {
    db.Employees.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbEmployees) {
      res.json(dbEmployees);
    });
  });

  app.get("/api/project/:id", function(req, res) {
    db.Projects.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbProjects) {
      res.json(dbProjects);
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
  app.delete("/api/employee/:id", function(req, res) {
    db.Employees.destroy({ where: { id: req.params.id } }).then(function(
      dbEmployees
    ) {
      res.json(dbEmployees);
    });
  });

  app.delete("/api/project/:id", function(req, res) {
    db.Projects.destroy({ where: { id: req.params.id } }).then(function(
      dbProjects
    ) {
      res.json(dbProjects);
    });
  });
  // app.delete("/api/remove-employee/:id", function(req, res) {
  //   db.Employees.destroy({
  //     where: { id: req.params.id }
  //   }).then(function(dbPost) {
  //     res.json(dbPost);
  //   });
  // });
};
