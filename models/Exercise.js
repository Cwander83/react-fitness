const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Exercise = new Schema({
    
    exerciseUsed: {
        type: String,
        trim: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    exerciseData: [{
        type: Schema.Types.ObjectId,
        ref: "ExerciseData"
    }],

});


module.exports = mongoose.model('Exercise', Exercise);