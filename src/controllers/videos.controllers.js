const VideoServices = require("../services/videos.services");

const createVideo = async (req, res) => {
	try {
		const newVideo = req.body;
		const result = await VideoServices.create(newVideo);
		res.json(result);
	} catch (error) {
		console.log(error);
	}
};

const deleteVideo = async (req, res) => {
	try {
		const { id } = req.params;
		const result = await VideoServices.delete(id);
		res.json(result);
	} catch (error) {
		console.log(error);
	}
};

module.exports = { createVideo, deleteVideo };
