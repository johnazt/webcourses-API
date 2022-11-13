const CategoryServices = require("../services/categories.services");

const createCategory = async (req, res) => {
	try {
		const newCategory = req.body;
		const result = await CategoryServices.create(newCategory);
		res.json(result);
	} catch (error) {
		console.log(error);
	}
};

const deleteCategory = async (req, res) => {
	try {
		const { id } = req.params;
		const result = await CategoryServices.delete(id);
		res.json(result);
	} catch (error) {
		console.log(error);
	}
};

module.exports = { createCategory, deleteCategory };
