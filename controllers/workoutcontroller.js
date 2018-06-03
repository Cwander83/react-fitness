const db = require("../models");

module.exports = {

    CreateDB: function (req, res) {
        console.log(`req.params.id: ${req.params.id}`);
        const data = req.body
        db.Workout.create(data)

            .then(function (dbWorkout) {
                console.log(`dbworkout ${dbWorkout}`);
                console.log(`body: ${JSON.stringify(req.body)}`);
                console.log(`body: ${JSON.stringify(data)}`);
                console.log(`req.params.id: ${req.params.id}`);
                return
                db
                    .WorkoutProgram
                    .findByIdAndUpdate(
                        req.params.id, { $set: {  workout: dbWorkout._id }})

            }).then(function(dbWorkoutProgram){  res.json(dbWorkoutProgram) 
            console.log(`dbpropgram: ${dbWorkoutProgram}`);
        })
            .catch(err => res.status(422).json(err));
    },
    FindAllWeeks: function (req, res) {
        db
            .WorkoutProgram
            .find({})
            .then(dbWorkoutProgram => res.json(dbWorkoutProgram))
            .catch(err => res.status(422).json(err));
    },

};