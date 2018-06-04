import React, { Component } from "react";
import "../../../styles/style.css";
import API from "../../../utils/API";
//import {NavLink} from "react-router-dom";
import {} from "reactstrap";

class Week1 extends Component {
   state = {
      workoutprograms: [],
      week: "",
      day: "",
      workouts: [],

      totalsets: "",
      regularsets: "",
      regularreps: "",
      exercisename: "",
      superset: "",
      warmupsets: "",
      warmupreps: "",
      warmupdesc: "",
      bodypart: "",
      regulardesc: ""
   };
   componentWillMount() {
      this.loadProgram();
   }

   loadProgram = () => {
     const query = 1;
      API.FindWorkoutPlan(query)
         .then(res =>
            this.setState({
               workoutprograms: res.data,
               week: "",
               day: "",
               workouts: res.data.workouts,
               totalsets: "",
      regularsets: "",
      regularreps: "",
      exercisename: "",
      superset: "",
      warmupsets: "",
      warmupreps: "",
      warmupdesc: "",
      bodypart: "",
      regulardesc: ""
            })
         )
         .catch(err => console.log(err));
   };

   render() {
      console.log(this.state.workoutprograms);
      console.log(this.state.workouts);
      return (
         <div>
            <h1>Week 1</h1>

            {this.state.workoutprograms.length ? (
               <ul style={{ color: "black" }}>
                  {this.state.workoutprograms.map((plan, i) => {
                     return (
                        <li key={i}>
                           week: {plan.week}day: {plan.day}
                           {this.state.workoutprograms.workouts.length} ? (
                           <ul style={{ color: "black" }}>
                              {this.state.workoutprograms.workouts.map(
                                 (workout, i) => {
                                    return (
                                       <li key={i}>
                                          exercisename: {workout.exercisename}
                                       </li>
                                    );
                                 }
                              )}
                           </ul>) : (<h3>no workouts to display</h3>)
                        </li>
                     );
                  })}
               </ul>
            ) : (
               <h3>no results to display</h3>
            )}
         </div>
      );
   }
}

export default Week1;
