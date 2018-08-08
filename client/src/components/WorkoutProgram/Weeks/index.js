import React from "react";
import "./../../../styles/style.css";
import {} from "reactstrap";
import { connect } from "react-redux";

const Weeks = props => {
  
   return (
      <div>
         <h1>Week {props.programWeek}</h1>
         <ul style={{ color: "black" }}>
            {props.workoutPlan
               .filter(weeks => weeks.week === props.programWeek)
               .map((plan, i) => {
                  return (
                     <li key={i}>
                        <h3>Day {plan.day}</h3>
                        <ul style={{ color: "black" }}>
                           {typeof plan.workouts === "object"}
                           {plan.workouts &&
                              plan.workouts.map((workout, i) => {
                                 return (
                                    <li key={i}>
                                       <h4>{workout.exercisename}</h4>
                                       <h6>Muscle Group: {workout.bodypart}</h6>

                                       {workout.totalsets ? (
                                          <h6>
                                             Total Sets: {workout.totalsets}
                                          </h6>
                                       ) : (
                                          ""
                                       )}
                                       {workout.warmupreps ? (
                                          <h6>
                                             Warm Up Sets: {workout.warmupsets}x{
                                                workout.warmupreps
                                             }{" "}
                                             Reps {workout.warmupdesc}
                                          </h6>
                                       ) : (
                                          " "
                                       )}
                                       {workout.regularsets ? (
                                          <h6>
                                             Working Sets: {workout.regularsets}x{
                                                workout.regularreps
                                             }{" "}
                                             Reps {workout.regulardesc}
                                          </h6>
                                       ) : (
                                          <h6>{workout.regulardesc}</h6>
                                       )}
                                       {workout.superset ? (
                                          <h6>Superset this exercise</h6>
                                       ) : (
                                          ""
                                       )}
                                    </li>
                                 );
                              })}
                        </ul>
                     </li>
                  );
               })}
         </ul>
      </div>
   );
};

const mapStateToProps = state => ({
   workoutPlan: state.workoutPlan.data
});

export default connect(mapStateToProps)(Weeks);
