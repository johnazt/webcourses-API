const Courses = require("../models/courses.models");
const Users = require("../models/users.models");
const UsersCourses = require("../models/users_courses.models");

class UserServices {
	static async getById(id) {
		try {
			const result = await Users.findByPk(id, {
				attributes: { exclude: "password" }
			});
			return result;
		} catch (error) {
			throw error;
		}
	}

	static async getUserJoinCourse(id) {
		try {
			const result = await Users.findOne({
				where: { id },
				attributes: { exclude: "password" },
				include: {
					model: UsersCourses,
					as: "userCourses",
					attributes: ["course_id"],
					include: {
						model: Courses,
						as: "course",
						attributes: ["title"]
					}
				}
			});
			return result;
		} catch (error) {
			throw error;
		}
	}

	static async add(newUser) {
		try {
			const result = await Users.create(newUser);
			return result;
		} catch (error) {
			throw error;
		}
	}

	static async update(data, id) {
		try {
			const result = await Users.update(
				{
					firstname: data.firstname,
					lastname: data.lastname,
					password: data.password
				},
				{
					where: { id }
				}
			);
			return result;
		} catch (error) {
			throw error;
		}
	}
}

module.exports = UserServices;
