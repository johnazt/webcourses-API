const Categories = require("../models/categories.models");
const Courses = require("../models/courses.models");
const Videos = require("../models/videos.models");

class CourseServices {
	static async getAll() {
		try {
			const result = await Courses.findAll();
			return result;
		} catch (error) {
			throw error;
		}
	}

	static async getAllCourseJoinCategories() {
		try {
			const result = await Courses.findAll({
				include: {
					model: Categories,
					as: "categories",
					attributes: ["name"]
				},
				include: {
					model: Videos,
					as: "videos",
					attributes: ["title", "url"]
				}
			});
			return result;
		} catch (error) {
			throw error;
		}
	}

	static async getAllCourseJoinVideos() {
		try {
			const result = await Courses.findAll({
				include: {
					model: Videos,
					as: "videos",
					attributes: ["title", "url"]
				}
			});
			return result;
		} catch (error) {
			throw error;
		}
	}
}
module.exports = CourseServices;
