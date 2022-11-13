const UsersCourses = require("../models/users_courses.models");
const UserServices = require("../services/users.services");

const getUserById = async (req, res) => {
	try {
		const { id } = req.params;
		const result = await UserServices.getById(id);
		res.status(200).json(result);
	} catch (error) {
		console.log(error);
	}
};

const getUserWithCourses = async (req, res) => {
	try {
		const { id } = req.params;
		const result = await UserServices.getUserJoinCourse(id);
		res.json(result);
	} catch (error) {
		console.log(error);
	}
};

const createUser = async (req, res) => {
	try {
		const newUser = req.body;
		const result = await UserServices.add(newUser);
		res.json(result);
	} catch (error) {
		console.log(error);
	}
};

const updateUser = async (req, res) => {
	try {
		const { id } = req.params;
		const data = req.body;
		const result = await UserServices.update(data, id);
		res.status(201).json(result);
	} catch (error) {
		console.log(error);
	}
};

module.exports = {
	getUserById,
	getUserWithCourses,
	createUser,
	updateUser
};
