module.exports = function (passport) {
	const path = require("path");
	const router = require('express').Router();
	const workoutcontroller = require('../controllers/workoutcontroller.js')
	// update user adding screenname, goals, phone number
    router.route("/create/:id")
	.post(workoutcontroller.CreateDB);
	
	router.route("/fullworkoutprogram")
	.get(workoutcontroller.FindAllWeeks);

	router.route("/weekone")
	.get(workoutcontroller.FindWeekOne);
	


	return router;
};