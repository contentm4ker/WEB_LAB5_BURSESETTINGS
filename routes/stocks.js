const express = require('express');
const router = express.Router();

let stocks = require('../data/stocks');

let stocksArr = [];
for (let key in stocks) {
  stocks[key].id = Number(key);
  stocksArr.push(stocks[key]);
}

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

module.exports = router;
module.exports.stocks = stocksArr;
