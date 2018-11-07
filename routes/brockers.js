const express = require('express');
const router = express.Router();

let brokers = require('../data/brokers');

let brockersArr = [];
for (let key in brokers) {
  brokers[key].id = Number(key);
  brockersArr.push(brokers[key]);
}

router.get('/api/brockers', function (req, res) {
  res.status(200);
  res.send(brockersArr);
});

router.post('/api/brockers', function (req, res) {
  let body = req.body;
  if (!body) {
    res.status(400);
    res.json({message: "Bad Request"});
  } else {
    brockersArr.push(body);
    res.status(200);
    res.json({message: "Broker added"});
  }
});

router.put('/api/brockers', function (req, res) {
  let body = req.body;
  if (!body.id || !body.money) {
    res.status(400);
    res.json({message: "Bad Request"});
  } else {
    let ind = brockersArr.findIndex(function (element) {
      return element.id === body.id;
    });
    brockersArr[ind].money = body.money;
    res.status(200);
    res.json({message: "Broker updated"});
  }
});

router.delete('/api/brockers/:ind(\\d+)', function (req, res) {
  brockersArr.splice(Number(req.params.ind), 1);
  res.status(200);
  res.json({message: "Broker deleted"});
});

module.exports = router;
module.exports.brockers = brockersArr;
