import React, { Component } from "react";
import "./../../../styles/style.css";
//import {NavLink} from "react-router-dom";
import {} from "reactstrap";
import { connect } from "react-redux";
import { uploadPlan } from "../../../redux/actions";

class Weeks extends Component {
   componentDidMount() {
      this.props.dispatch(uploadPlan());
   }

   render() {
      //console.log(this.props.data);
      console.log(this)

      return (
         <div>
            <h1>Week {this.props.programWeek}</h1>

            <ul style={{ color: "black" }}>
               {this.props.workoutPlan
                  .filter(weeks => weeks.week === this.props.programWeek)
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
                                          <h6>
                                             Muscle Group: {workout.bodypart}
                                          </h6>

                                          {workout.totalsets ? (
                                             <h6>
                                                Total Sets: {workout.totalsets}
                                             </h6>
                                          ) : (
                                             ""
                                          )}
                                          {workout.warmupreps ? (
                                             <h6>
                                                Warm Up Sets:{" "}
                                                {workout.warmupsets}x{
                                                   workout.warmupreps
                                                }{" "}
                                                Reps {workout.warmupdesc}
                                             </h6>
                                          ) : (
                                             " "
                                          )}
                                          {workout.regularsets ? (
                                             <h6>
                                                Working Sets:{" "}
                                                {workout.regularsets}x{
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
   }
}

const mapStateToProps = state => ({
   workoutPlan: state.workoutPlan.data
});

export default connect(mapStateToProps)(Weeks);
