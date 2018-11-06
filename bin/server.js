var app = require('../app');

var server = require('http').createServer(app);

var port = 3000;
server.listen(port, ()=>{
    console.log(`HTTP server started at http://localhost:${port}`);
});

module.exports = server;