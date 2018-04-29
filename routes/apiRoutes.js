module.exports = function (passport) {
	const path = require("path");
	const router = require('express').Router();
	const usercontroller = require('../controllers/usercontroller.js')
	// update user adding screenname, goals, phone number
	router.route("/userUpdateBio/:id")
		.put(usercontroller.updateUser);



	return router;
};