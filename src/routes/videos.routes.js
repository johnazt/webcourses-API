const { Router } = require("express");
const router = Router();
const {
	createVideo,
	deleteVideo
} = require("../controllers/videos.controllers");

router.post("/videos", createVideo);
router.delete("/videos/:id", deleteVideo);

module.exports = router;
