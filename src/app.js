const express = require("express");
const db = require("./utils/database");
const initModels = require("./models/initModels");
const app = express();
const PORT = 3000;
initModels();

db
	.authenticate()
	.then(() => console.log("Successful Authentication"))
	.catch(error => console.log(error));

db
	.sync({ force: true })
	.then(() => console.log("Database is sincronized..."))
	.catch(error => console.log(error));

app.get("/", (req, res) => {
	res.status(200).json({ message: "welcome to the server" });
});

app.listen(PORT, () => {
	console.log(`Server running in PORT${PORT}...`);
});
