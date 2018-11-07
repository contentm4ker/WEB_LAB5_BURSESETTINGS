const express = require('express');
const router = express.Router();

let brokers = require('../data/brokers');
let stocks = require('../data/stocks');
let settings = require('../data/bursesettings');

let brockersArr = [];
for (let key in brokers) {
  brokers[key].id = Number(key);
  brockersArr.push(brokers[key]);
}

let stocksArr = [];
for (let key in stocks) {
  stocks[key].id = Number(key);
  stocksArr.push(stocks[key]);
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

router.get('/api/stocks', function (req, res) {
  res.status(200);
  res.send(stocksArr);
});

router.post('/api/stocks', function (req, res) {
  let body = req.body;
  if (!body) {
    res.status(400);
    res.json({message: "Bad Request"});
  } else {
    stocksArr.push(body);
    res.status(200);
    res.json({message: "Stock added"});
  }
});

router.delete('/api/stocks/:ind(\\d+)', function (req, res) {
  stocksArr.splice(Number(req.params.ind), 1);
  res.status(200);
  res.json({message: "Stock deleted"});
});

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
