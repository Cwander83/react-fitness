module.exports = function (passport) {
	const path = require("path");
	const router = require('express').Router();
	const usercontroller = require('../controllers/usercontroller.js')
	// update user adding screenname, goals, phone number

	router.route("/user/:id")
		.get(usercontroller.findOneUsers)
		.put(usercontroller.updateUser);

	router.route("/exercise/:id")
		.post(usercontroller.addExercise);

	router.route("/allusers")
		.get(usercontroller.findAllUsers);

	return router;
};