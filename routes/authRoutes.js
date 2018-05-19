const User = require("../models").User;
module.exports = function (passport) {
	const path = require("path");
	const router = require('express').Router();

	router.get("/isAuthenticated", function (req, res) {
		if (req.isAuthenticated()) {
			res.json({
				userId: req.user._id,
				username: req.user.username,
				goals: req.user.goals,
				phone: req.user.phone,
				isAuthenticated: true
			});
			//you can also pass up any other fields you with to expose
			//for example, 
			//nickname: req.user.nickname
		} else {
			res.json({
				goals: null,
				phone: null,
				userId: null,
				username: null,
				isAuthenticated: false
			});
		}
	});

	router.post("/signup", function (req, res) {
		console.log(`req.body:${req.body}`);
		const newUser = req.body;
		User.register(newUser, newUser.password, (err, user) => {
			if (err) {
				console.log(`error ${err}`);
				return res.json(err.message);
			}
			console.log(`newUser: ${newUser}`);
			res.json({
				userId: user._id,
				username: user.username,				
				goals: user.goals,
				phone: user.phone,
				isAuthenticated: true
			})
			
		});
	});

	router.post("/signin", passport.authenticate('local'), function (req, res) {
		console.log(`req.user from route singin ${req.user}`);
		res.json({
			userId: req.user._id,
			username: req.user.username,
			goals: req.user.goals,
			phone: req.user.phone,
			isAuthenticated: true
		});
	});

	router.get('/logout', function (req, res) {
		req.logout();
		res.json();
	});

	return router;
};