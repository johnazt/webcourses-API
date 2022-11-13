const Videos = require("../models/videos.models");

class VideoServices {
	static async create(newVideo) {
		try {
			const result = await Videos.create(newVideo);
			return result;
		} catch (error) {
			throw error;
		}
	}

	static async delete(id) {
		try {
			const result = Videos.destroy({
				where: { id }
			});
			return result;
		} catch (error) {
			throw error;
		}
	}
}

module.exports = VideoServices;
