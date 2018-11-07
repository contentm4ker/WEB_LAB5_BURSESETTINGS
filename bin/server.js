var app = require('../app');

var server = require('http').createServer(app);

var port = 3000;
server.listen(port, ()=>{
    console.log(`HTTP server started at http://localhost:${port}`);
});

/*Saving before server exit*/
function writeToFile(filepath, text, message) {
  const fs = require("fs");
  fs.writeFile(filepath, text, (err) => {
    if (err) throw err;
    console.log(message);
  });
}

//saving our auction in json
process.on('SIGINT', () => {
  server.close(function () {
    let brockers = app.brockers;
    let stocks = app.stocks;
    let settings = app.setts;

    let brokersObj = {};
    for (let i = 0; i < brockers.length; i++) {
      let id = brockers[i].id;
      delete brockers[i].id;
      brokersObj[id] = brockers[i];
    }

    let stocksObj = {};
    for (let i = 0; i < stocks.length; i++) {
      let id = stocks[i].id;
      delete stocks[i].id;
      stocksObj[id] = stocks[i];
    }

    writeToFile('../data/brokers.json', JSON.stringify(brokersObj), 'Brockers have been saved!');
    writeToFile('../data/bursesettings.json', JSON.stringify(settings), 'Burse settings have been saved!');
    writeToFile('../data/stocks.json', JSON.stringify(stocksObj), 'Stocks have been saved!');
  });
});

module.exports = server;
