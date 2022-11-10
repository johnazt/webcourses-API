const { Sequelize } = require("sequelize");

const db = new Sequelize({
	database: "webcourses",
	username: "janz",
	host: "localhost",
	port: "5432",
	password: "root",
	dialect: "postgres"
});

module.exports = db;
