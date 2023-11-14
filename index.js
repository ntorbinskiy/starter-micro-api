const http = require("http");
const users = require("./users/index");

http
  .createServer(function (req, res) {
    console.log(`Just got a request at ${req.url}!`);
    res.write(users());
    res.end();
  })
  .listen(process.env.PORT || 3000);
