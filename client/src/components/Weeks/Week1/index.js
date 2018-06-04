import React, { Component } from "react";
import "../../../styles/style.css";
import API from "../../../utils/API";
//import {NavLink} from "react-router-dom";
import {} from "reactstrap";

class Week1 extends Component {
   state = {
      workoutprograms: [],
      week: "",
      day: ""
   };
   componentWillMount() {
      this.loadProgram();
   }

   loadProgram = () => {
      API.FindWorkoutPlan()
         .then(res =>
            this.setState({ workoutprograms: res.data, week: "", day: "" })
         )
         .catch(err => console.log(err));
   };

   render() {
      console.log(this.state.workoutprograms);
      return (
         <div>
            <h1>Week 1</h1>
            <ul>
               {this.state.workoutprograms.map(plan => {
                  return <li key={plan.week}>{plan}</li>;
               })}
            </ul>
         </div>
      );
   }
}

export default Week1;
