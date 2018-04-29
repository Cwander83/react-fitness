const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ExerciseData = new Schema({
    reps: {
        type: Number,
        trim: true
    },
    sets: {
        type: Number,
        trim: true
    },
    note: {
        type: String,
    }


});


module.exports = mongoose.model('ExerciseData', ExerciseData);