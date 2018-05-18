module.exports = function (passport) {
	const path = require("path");
	const router = require('express').Router();
	const usercontroller = require('../controllers/usercontroller.js')
	// update user adding screenname, goals, phone number

	router.route("/userUpdate/:id")
		.get(usercontroller.PopulateUser)
		.put(usercontroller.updateUser);

	router.route("/exercise/:id")
		.post(usercontroller.addExercise);

	router.route("/allUsers")
		.get(usercontroller.findAllUsers);

	return router;
};