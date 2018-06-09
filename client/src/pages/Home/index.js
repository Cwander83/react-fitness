import React, { Component } from "react";
import "../../styles/style.css";
import { NavLink } from "react-router-dom";
import GithubCorner from "react-github-corner";
import Wrapper from "../../components/Wrapper";
import {} from "reactstrap";

class Home extends Component {
   render() {
      return (
         <Wrapper>
            <GithubCorner href="https://github.com/Cwander83/react-fitness" />
            <div className="box">
               <h1 className="mainH1">4 week Revolution</h1>
               <ul>
                  <li>
                     <NavLink to="/signup" style={{ color: "white" }}>
                        Dashboard Login
                     </NavLink>
                  </li>
                  <li>
                     <NavLink
                        to="/fullprogram/week1"
                        style={{ color: "white" }}
                     >
                        Workout Program
                     </NavLink>
                  </li>
               </ul>
            </div>
            <div />
         </Wrapper>
      );
   }
}

export default Home;
