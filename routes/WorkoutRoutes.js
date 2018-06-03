module.exports = function (passport) {
	const path = require("path");
	const router = require('express').Router();
	const workoutcontroller = require('../controllers/workoutcontroller.js')
	// update user adding screenname, goals, phone number
    router.route("/create/:id")
    .post(workoutcontroller.CreateDB);
	// router.route("/user/:id")
	// 	.get(usercontroller.findOneUsers)
	// 	.put(usercontroller.updateUser);

	// router.route("/exercise/:id")
	// 	.post(usercontroller.addExercise);

	// router.route("/allusers")
	// 	.get(usercontroller.findAllUsers);

	return router;
};