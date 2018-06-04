import axios from "axios";

export default {
   // finds all user in the DB by userID
   findAllUsers: function() {
      return axios.get("/api/allusers");
   },
   // finds a single user by the userID in the dB
   findOneUsers: function(id) {
      return axios.get("/api/user/" + id);
   },
   // mainly for the profile page updates the bio of the user by the userID
   updateUser: function(id, data) {
      console.log(`API data: ${JSON.stringify(data)}`);
      console.log(`id: ${id}`);
      return axios.put("/api/user/" + id, data);
   },
   FindWorkoutPlan: function() {
      return axios.get("/workout/fullworkoutprogram");
   }
};
