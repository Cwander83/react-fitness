module.exports = function (passport) {
	const path = require("path");
	const router = require('express').Router();
	const usercontroller = require('../controllers/usercontroller.js')
	// update user adding screenname, goals, phone number
	router.route("/userUpdateBio/:id")
		.get(usercontroller.PopulateUser)
		.put(usercontroller.updateUser)
		.post(usercontroller.addExercise);

	router.route("/allUsers")
		.get(usercontroller.findAllUsers);

	return router;
};