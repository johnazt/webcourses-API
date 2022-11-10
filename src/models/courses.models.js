const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const Courses = db.define(
	"courses",
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false
		},
		description: {
			type: DataTypes.STRING
		},
		instructor: {
			type: DataTypes.STRING
		}
	},
	{ timestamps: false }
);

module.exports = Courses;
