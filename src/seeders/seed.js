const Users = require("../models/users.models");
const UsersCourses = require("../models/users_courses.models");
const Courses = require("../models/courses.models");
const Categories = require("../models/categories.models");
const Videos = require("../models/videos.models");
const initModels = require("../models/initModels");
const db = require("../utils/database");

initModels();

const users = [
	{
		firstname: "John",
		lastname: "Asto",
		password: "alksdjf23",
		email: "john@gmail.com"
	},
	{
		firstname: "Liz",
		lastname: "Sinclair",
		password: "wewdjf23",
		email: "liz@gmail.com"
	},
	{
		firstname: "Alexander",
		lastname: "Asto",
		password: "iou879",
		email: "alexander@gmail.com"
	}
];

const courses = [
	{
		title: "Web Development",
		description: "Basics web",
		instructor: "Rafael Conte"
	},
	{ title: "Node JS", description: "Learn Node easy", instructor: "Ian Rosas" },
	{
		title: "React",
		description: "Best library to develop amazings websites",
		instructor: "Andrés Mendoza"
	},
	{ title: "GIT", description: "Basics Git", instructor: "Eduard Leiva" },
	{
		title: "Figma",
		description: "Learn best tool for design",
		instructor: "Pamela Allegri"
	},
	{
		title: "Python",
		description: "The best programming language to start",
		instructor: "Matias Almeida"
	},
	{
		title: "Storybook",
		description: "A new way to work with React",
		instructor: "Nolberto Solano"
	}
];

const uc = [
	{ userId: 1, courseId: 3 },
	{ userId: 1, courseId: 1 },
	{ userId: 1, courseId: 4 },
	{ userId: 1, courseId: 6 },
	{ userId: 1, courseId: 7 },
	{ userId: 2, courseId: 5 },
	{ userId: 2, courseId: 1 },
	{ userId: 2, courseId: 3 },
	{ userId: 3, courseId: 7 },
	{ userId: 3, courseId: 2 }
];

const categories = [
	{ name: "foundations", courseId: 1 },
	{ name: "backend", courseId: 2 },
	{ name: "frontend", courseId: 3 },
	{ name: "framework", courseId: 3 },
	{ name: "backend", courseId: 4 },
	{ name: "design", courseId: 5 },
	{ name: "backend", courseId: 6 },
	{ name: "framework", courseId: 7 },
	{ name: "frontend", courseId: 7 }
];

const videos = [
	{ title: "Learn Node", url: "https://course-video.com", courseId: 2 },
	{
		title: "How to start in Figma",
		url: "https://course-video.com",
		courseId: 5
	},
	{
		title: "Create a webpage in Figma",
		url: "https://course-video.com",
		courseId: 5
	},
	{ title: "What is Redux?", url: "https://course-video.com", courseId: 3 },
	{
		title: "How to install React ",
		url: "https://course-video.com",
		courseId: 3
	},
	{ title: "What is Storybook?", url: "https://course-video.com", courseId: 7 },
	{
		title: "Basic commands in GIT",
		url: "https://course-video.com",
		courseId: 4
	},
	{
		title: "How to create customHooks",
		url: "https://course-video.com",
		courseId: 3
	},
	{
		title: "What is a repository",
		url: "https://course-video.com",
		courseId: 1
	},
	{
		title: "This is what you need to start Python",
		url: "https://course-video.com",
		courseId: 6
	}
];

db
	.sync({ force: false })
	.then(() => {
		console.log("Adding informatino to database");

		users.forEach(user => Users.create(user));

		setTimeout(() => {
			courses.forEach(course => Courses.create(course));
		}, 100);
		setTimeout(() => {
			categories.forEach(category => Categories.create(category));
		}, 200);
		setTimeout(() => {
			videos.forEach(video => Videos.create(video));
		}, 300);
		setTimeout(() => {
			uc.forEach(u => UsersCourses.create(u));
		}, 400);
	})
	.catch(error => console.log(error));
