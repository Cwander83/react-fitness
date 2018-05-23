const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const User = new Schema({
	//you may replace this 'name' field with anything you like
	exercise: [{
		type: Schema.Types.ObjectId,
		ref: "Exercise"
	}],
	goals: {
		type: String
	},
	phone: {
		type: String
	},
	weight: {
		type: Number
	},
	newsletter: {
		type: Boolean
	}
});
//passport-local-mongoose creates a 'username' and some 'password' fields for you
//you can add some other fields here too if you like

User.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", User);