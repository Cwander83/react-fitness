import React, { Component } from "react";
import "../../styles/style.css";
import API from "../../utils/API";
//import {NavLink} from "react-router-dom";
import {} from "reactstrap";

class Weeks extends Component {
   state = {
      workoutprograms: []
   };

   componentWillMount() {
      this.loadProgram();
   }

   loadProgram = () => {
      //const query = 1;
      API.FindWorkoutPlan()
         .then(res =>
            this.setState({
               workoutprograms: res.data
            })
         )
         .catch(err => console.log(err));
   };

   render() {
      console.log(this.state.workoutprograms);
      console.log(this.props);
      
      return (
         <div>
            <h1>Week {this.props.programWeek}</h1>

            <ul style={{ color: "black" }}>
               {this.state.workoutprograms
                  .filter(weeks => weeks.week === this.props.programWeek)
                  .map((plan, i) => {
                     return (
                        <li key={i}>
                           week: {plan.week} day: {plan.day}
                           <ul style={{ color: "black" }}>
                              {typeof plan.workouts === "object"}
                              {plan.workouts &&
                                 plan.workouts.map((workout, i) => {
                                    return (
                                       <li key={i}>
                                          exercisename: {workout.exercisename}
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
