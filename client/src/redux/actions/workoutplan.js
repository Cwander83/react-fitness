import API from "../../utils/API";




const RECIEVE_PLAN = "RECIEVE_PLAN";
export const recievePlan = (workoutPlan) => ({
   type: RECIEVE_PLAN,
   workoutPlan
});

export const uploadPlan = () => {
   return dispatch => {
      API.FindWorkoutPlan()
      .then(response => response.json())
      .then(workoutPlan => dispatch(recievePlan(workoutPlan)))
      .then(data => console.log(data))
      
         
   };
};
