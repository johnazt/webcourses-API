const CourseServices = require("../services/courses.services");

const getAllCourses = async (req, res) => {
	try {
		const result = await CourseServices.getAll();
		res.json(result);
	} catch (error) {
		console.log(error);
	}
};

const getAllCoursesWithCategories = async (req, res) => {
	try {
		const result = await CourseServices.getAllCourseJoinCategories();
		res.json(result);
	} catch (error) {
		console.log(error);
	}
};

const getAllCourseWithVideos = async (req, res) => {
	try {
		const result = await CourseServices.getAllCourseJoinVideos();
		res.json(result);
	} catch (error) {
		console.log(error);
	}
};

const createNewCourse = async (req, res) => {
	try {
		const newCourse = req.body;
		const result = CourseServices.createNew(newCourse);
		res.json(result);
	} catch (error) {
		console.log(error);
	}
};

const updateDescriptionCourse = async (req, res) => {
	try {
		const { id } = req.params;
		const newData = req.body;
		const result = await CourseServices.update(newData, id);
		res.json(result);
	} catch (error) {
		console.log(error);
	}
};
module.exports = {
	getAllCourses,
	getAllCoursesWithCategories,
	getAllCourseWithVideos,
	createNewCourse,
	updateDescriptionCourse
};
