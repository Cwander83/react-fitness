import API from "../../utils/API";
import * as constants from "../constants";

export const recievePlan = workoutPlan => ({
   type: constants.RECIEVE_PLAN,
   workoutPlan
});

export const uploadPlan = () => {
   return dispatch => {
      API.FindWorkoutPlan()
         .then(response => response.json())
         .then(workoutPlan => dispatch(recievePlan(workoutPlan)))
         .then(data => console.log(data));
   };
};
