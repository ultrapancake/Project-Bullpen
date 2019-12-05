var db = require("../models");
var path = require("path");

module.exports = function(app) {
  // Load index page
  // app.get("/", function(req, res) {
  //   db.Example.findAll({}).then(function(dbExamples) {
  //     res.render("index", {
  //       msg: "Welcome!",
  //       examples: dbExamples
  //     });
  //   });
  // });

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
  app.get("/add-employee", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/add-game.html"));
  });
  app.get("/add-project", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/add-player.html"));
  });
  app.get("/remove-employee", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/remove-player.html"));
  });
  app.get("/remove-project", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/remove-game.html"));
  });
  app.get("/view-employees", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/view-players.html"));
  });
  app.get("/view-projects", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/view-games.html"));
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
