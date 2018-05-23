const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const WorkoutProgram = new Schema({

    week: {
        type: Number
    },
    // days will be 1 - 7
    day: {
        type: Number
    },
    workout: [{
        type: Schema.Types.ObjectId,
        ref: "workout"
    }],

});


module.exports = mongoose.model('WorkoutProgram', WorkoutProgram);