const Users = require("./users.models");
const UsersCourses = require("./users_courses.models");
const Courses = require("./courses.models");
const Categories = require("./categories.models");
const Videos = require("./videos.models");

const initModels = () => {
	// ONE TO MANY RELATION
	Categories.belongsTo(Courses, { as: "course", foreignKey: "course_id" });
	Courses.hasMany(Categories, { as: "categories", foreignKey: "course_id" });

	Videos.belongsTo(Courses, { as: "course", foreignKey: "course_id" });
	Courses.hasMany(Videos, { as: "videos", foreignKey: "course_id" });

	// MANY TO MANY RELATION
	UsersCourses.belongsTo(Users, { as: "user", foreignKey: "user_id" });
	Users.hasMany(UsersCourses, { as: "userCourses", foreignKey: "user_id" });

	UsersCourses.belongsTo(Courses, { as: "course", foreignKey: "course_id" });
	Courses.hasMany(UsersCourses, { as: "userCourses", foreignKey: "course_id" });
};

module.exports = initModels;
