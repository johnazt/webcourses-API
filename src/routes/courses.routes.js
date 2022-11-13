const { Router } = require("express");
const router = Router();
const {
	getAllCourses,
	getAllCoursesWithCategories,
	getAllCourseWithVideos,
	createNewCourse,
	updateDescriptionCourse
} = require("../controllers/courses.controllers");

router.get("/courses", getAllCourses);
router.get("/courses/categories", getAllCoursesWithCategories);
router.get("/courses/videos", getAllCourseWithVideos);
router.post("/courses", createNewCourse);
router.put("/courses/:id", updateDescriptionCourse);
module.exports = router;
