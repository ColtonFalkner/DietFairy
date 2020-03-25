// Inside the routes directory, create a file called api-routes.js. In this file, create both GET and POST routes for Notes.

const Recipe = require("../models/Recipe");

module.exports = function(app) {
  app.get("api/recipes", function(req, res) {
    Recipe.find({})
      .then(function(data) {
        res.json(data);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  app.post("api/recipes", function(req, res) {
    Recipe.create(req.body)
      .then(function(data) {
        res.json(data);
      })
      .catch(function(err) {
        res.json(err);
      });
  });
};
