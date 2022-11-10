const Users = require("./users.models");
const UsersCourses = require("./users_courses.models");
const Courses = require("./courses.models");
const Categories = require("./categories.models");
const Videos = require("./videos.models");

const initModels = () => {
	Users;
	UsersCourses;
	Courses;
	Categories;
	Videos;
};

module.exports = initModels;
