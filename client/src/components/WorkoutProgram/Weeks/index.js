import React, { Component } from "react";
import "./../../../styles/style.css";
import API from "./../../../utils/API";
//import {NavLink} from "react-router-dom";
import {} from "reactstrap";

class Weeks extends Component {
   state = {
      workoutprograms: []
   };

   componentDidMount() {
      this.loadProgram();
   }

   loadProgram = () => {
      API.FindWorkoutPlan()
         .then(res =>
            this.setState({
               workoutprograms: res.data
            })
         )
         .catch(err => console.log(err));
   };

   // to map out the day of the week input
   // mapOption() {}

   render() {
      console.log(this.state.workoutprograms);

      return (
         <div>
            <h1>Week {this.props.programWeek}</h1>

            <ul style={{ color: "black" }}>
               {this.state.workoutprograms
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

export default Weeks;
