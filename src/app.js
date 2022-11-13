const express = require("express");
const db = require("./utils/database");
const initModels = require("./models/initModels");

const userRoutes = require("./routes/users.routes");
const courseRoutes = require("./routes/courses.routes");
const videoRoutes = require("./routes/videos.routes");
const categoryRoutes = require("./routes/categories.routes");

const app = express();
app.use(express.json());
const PORT = 3000;
initModels();

db
	.authenticate()
	.then(() => console.log("Successful Authentication"))
	.catch(error => console.log(error));

db
	.sync({ force: false })
	.then(() => console.log("Database is sincronized..."))
	.catch(error => console.log(error));

app.get("/", (req, res) => {
	res.status(200).json({ message: "welcome to the server" });
});

// ROUTES
app.use("/api/v1", userRoutes);
app.use("/api/v1", courseRoutes);
app.use("/api/v1", videoRoutes);
app.use("/api/v1", categoryRoutes);

app.listen(PORT, () => {
	console.log(`Server running in PORT${PORT}...`);
});
