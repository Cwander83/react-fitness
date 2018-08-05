const initialState = {
   data: []
};

const workoutPlan = (state = initialState, action) => {
   switch (action.type) {
      case "RECIEVE_PLAN":
         return {
            ...state,
            data: action.workoutPlan
         };
      default:
         return state;
   }
};

export default workoutPlan;
