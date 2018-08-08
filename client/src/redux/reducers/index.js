import { combineReducers } from "redux";
import user from "./user";
import workoutPlan from "./workoutPlan";

const rootReducer = combineReducers({
  user,
   workoutPlan
});

export default rootReducer;
