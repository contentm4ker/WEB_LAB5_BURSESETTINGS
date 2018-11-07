const express = require('express');
const router = express.Router();

let settings = require('../data/bursesettings');

router.get('/api/settings', function (req, res) {
  res.status(200);
  res.send(settings);
});

router.put('/api/settings', function (req, res) {
  let body = req.body;
  if (!body) {
    res.status(400);
    res.json({message: "Bad Request"});
  } else {
    settings = body;
    res.status(200);
    res.json({message: "Broker updated"});
  }
});

module.exports = router;
module.exports.setts = settings;
