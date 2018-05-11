const db = require("../models");

module.exports = {
    findAllUsers: function (req, res) {
        db.User
            .find({})
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },
    findOneUsers: function (req, res) {
        db.User
            .findone({
                _id: req.params.id
            })
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },




    updateUser: function (req, res) {

        db.User
            .findByIdAndUpdate({
                _id: req.params.id
            }, {
                $set: req.body,
            }
            // , {
            //     upsert: true,
            //     overwrite: true
            // }
        )
            .then(function (dbUser) {
                console.log(`dbuser: ${dbUser}`);
                res.json(dbUser)
            })
            .catch(err => res.status(422).json(err));
    },

    addExercise: function (req, res) {
        const id = req.params.id;
        console.log(`id: ${id}`);
        db.Exercise
            .create(req.body)
            .then(function (dbExercise) {
                console.log(`req.body ${JSON.stringify(req.body)}`);
                console.log(`dbExercise ${dbExercise}`);

                return
                db.User.findByIdAndUpdate({
                    id
                }, {
                    $push: {
                        exercise: dbExercise._id
                    }
                }, {
                    new: true
                });
            })
            .then(function (dbUser) {
                console.log(`dbUser ${dbUser}`);
                res.json(dbUser);
            }).catch(function (err) {
                res.json(err);
            })
    },



    PopulateUser: function (req, res) {
        db.User
            .findOne({
                _id: req.params.id
            })
            .populate("exercise")
            .then(function (dbUser) {
                res.json(dbUser)
            }).catch(function (err) {
                res.json(err)
            });

    }
}