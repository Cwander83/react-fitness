const db = require("../models");

module.exports = {
    updateUser: function(req, res) {
        db.User
          .findOneAndUpdate({ _id: req.params.id }, req.body)
          .then(dbUser => res.json(dbUser))
          .catch(err => res.status(422).json(err));
      },
}
