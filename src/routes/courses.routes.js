const { Router } = require("express");
const router = Router();
const {
	getAllCourses,
	getAllCoursesWithCategories,
	getAllCourseWithVideos
} = require("../controllers/courses.controllers");

router.get("/courses", getAllCourses);
router.get("/courses/categories", getAllCoursesWithCategories);
router.get("/courses/videos", getAllCourseWithVideos);

module.exports = router;
