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
            <GithubCorner href="https://github.com/username/repo" />
            <div className="box">
               <h1 className="mainH1">4 week Revolution</h1>
               <ul>
                  <NavLink to="/signup" style={{ color: "white" }}>
                     <li>Dashboard</li>
                  </NavLink>
                  <li>
                     <NavLink to="/calendar" style={{ color: "white" }}>
                        Calendar
                     </NavLink>
                  </li>
               </ul>
            </div>
         </Wrapper>
      );
   }
}

export default Home;
