const http = require("http");

const users = require("./users/index");

http
	.createServer(function (req, res) {
		console.log(`Just got a request at ${req.url}!`);
		const usersList = users();
		console.log(usersList);
		res.write(JSON.stringify(usersList));

		res.end();
	})
	.listen(process.env.PORT || 3000);
