const db = require("../utils/database");
const { DataTypes } = require("sequelize");
const Courses = require("./courses.models");

const Videos = db.define(
	"videos",
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
			allowNull: false
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false
		},
		url: {
			type: DataTypes.STRING,
			allowNull: false
		},
		courseId: {
			type: DataTypes.INTEGER,
			references: {
				model: Courses,
				key: "id"
			},
			field: "course_id",
			allowNull: false
		}
	},
	{ timestamps: false }
);

module.exports = Videos;
