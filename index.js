const express = require("express");
const users = require("./users");

const app = express();
const PORT = 4000;

app.listen(PORT, () => {
	console.log(`API listening on PORT ${PORT} `);
});

app.get("/", (req, res) => {
	res.send(JSON.stringify(users(), null, 4));
});

// Export the Express API
module.exports = app;
