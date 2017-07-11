const express = require('express');
const router  = express.Router();
const models = require("../models");
const sequelize = require('sequelize');

router.get('/', function(req, res) {
  res.render('index');
});

router.get('/mutants/:role', function(req, res, next){
  models.sequelize.query(
    "SELECT * FROM mutants WHERE role like ('%" + req.params.role + "%')",
    {type: sequelize.QueryTypes.SELECT})
  .spread(function(data) {
    res.json(data);
  }).catch(function(err) {
    res.send(err);
  });
});

module.exports = router;
