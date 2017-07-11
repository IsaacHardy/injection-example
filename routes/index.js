const express = require('express');
const router  = express.Router();
const models = require("../models");
const sequelize = require('sequelize');

router.get('/', function(req, res) {
  res.render('index');
});

router.get('/mutants/:role', function(req, res, next){
  // ') UNION SELECT usename||'_'||password FROM mutants --
  models.sequelize.query(
    "SELECT usename FROM mutants WHERE role like ('%" + req.params.role + "%')",
    {type: sequelize.QueryTypes.SELECT})
  .spread(function(data) {
    res.json(data);
  }).catch(function(err) {
    res.send(err);
  });
});

router.get('/mutants/safe/:role', function(req, res, next){
  var dbEscape = models.sequelize.escape(req.params.role);

  models.sequelize.query(
    "SELECT usename FROM mutants WHERE role like ('%" + dbEscape.replace(/['"]+/g, '') + "%')",
    {type: sequelize.QueryTypes.SELECT})
  .spread(function(data) {
    res.json(data);
  }).catch(function(err) {
    res.send(err);
  });
});

module.exports = router;
