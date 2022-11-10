const express = require("express");
const db = require("./utils/database");
const app = express();
const PORT = 3000;

db
	.authenticate()
	.then(() => console.log("Successful Authentication"))
	.catch(error => console.log(error));

app.get("/", (req, res) => {
	res.status(200).json({ message: "welcome to the server" });
});

app.listen(PORT, () => {
	console.log("Server running...");
});
