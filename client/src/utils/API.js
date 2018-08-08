import axios from "axios";

export default {
   // finds all user in the DB by userID
   findAllUsers: function() {
      return fetch("/api/allusers");
   },
   // finds a single user by the userID in the dB
   findOneUsers: function(id) {
      return axios.get("/api/user/" + id);
   },
   // mainly for the profile page updates the bio of the user by the userID
   updateUser: function(id, data) {
 
      return axios.put("/api/user/" + id, data);
   },
   // Pulls the full 4 week program out of DB
   FindWorkoutPlan: function() {
      return fetch("/workout/fullworkoutprogram");
   }
};

