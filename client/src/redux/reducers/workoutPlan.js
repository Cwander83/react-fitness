import * as constants from '../constants'

const initialState = {
   data: []
};

const workoutPlan = (state = initialState, action) => {
   switch (action.type) {
      case constants.RECIEVE_PLAN:
         return {
            ...state,
            data: action.workoutPlan
            
         };
      default:
         return state;
   }
};

export default workoutPlan;
