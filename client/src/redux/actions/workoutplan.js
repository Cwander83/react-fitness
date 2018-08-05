import API from "../../utils/API";



const RECIEVE_PLAN = "RECIEVE_PLAN";
export const recievePlan = data => ({
   type: RECIEVE_PLAN,
   data
});

export const uploadPlan = () => {
   return dispatch => {
      API.FindWorkoutPlan()
      .then(data => dispatch(recievePlan(data)))
      
         
   };
};
