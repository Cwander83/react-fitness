const db = require("../models");

module.exports = {
   CreateDB: function(req, res) {
      db.Workout.create(req.body)
         .then(function(dbWorkout) {
            return;
            db.WorkoutProgram.findByIdAndUpdate(req.params.id, {
               $push: {
                  workouts: dbWorkout._id
               }
            });
         })
         .then(dbWorkoutProgram => res.json(dbWorkoutProgram))
         .catch(err => res.status(422).json(err));
   },

   FindAllWeeks: function(req, res) {
      //console.log(req.query);
      //console.log(`query: ${JSON.stringify(req)}`);
      db.WorkoutProgram.find()
         .populate("workouts")
         .then(dbWorkoutProgram => res.json(dbWorkoutProgram))
         .catch(err => res.status(422).json(err));
   },

   FindWeek: function(req, res) {
      db.WorkoutProgram.find(req.query)
         .populate("workouts")
         .then(function(dbWorkoutProgram) {
            console.log(`db: ${dbWorkoutProgram}`);
            res.json(dbWorkoutProgram);
         })
         .catch(err => res.status(422).json(err));
   }
};
