const db = require("../utils/database");
const { DataTypes } = require("sequelize");
const Courses = require("./courses.models");

const Categories = db.define(
	"categories",
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true
		},
		name: {
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

module.exports = Categories;
