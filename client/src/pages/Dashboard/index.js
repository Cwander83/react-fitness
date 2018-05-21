import React from "react";
import "../../styles/style.css";
import { NavLink, Route, Link } from "react-router-dom";
import GithubCorner from "react-github-corner";
import Wrapper from "../../components/Wrapper";
import Calendar from "../Calendar";
import Profile from "../../components/Profile";
import Weeks from "../../components/Weeks";
import { Jumbotron } from "reactstrap";

const Dashboard = ({ match }) => {
   console.log(match);

   return (
      <div>
         <Wrapper>
            <GithubCorner href="https://github.com/username/repo" />

            <ul className="dashNav">
               <NavLink to="/">
                  <li>Home</li>
               </NavLink>
               <NavLink to="/calendar">
                  <li>Calendar</li>
               </NavLink>
               <NavLink to="/">
                  <li>Workout</li>
               </NavLink>
            </ul>
            <Jumbotron>
               <ul className="dashboardHeader">
                  <li>
                     <Link to={`${match.url}/profile`}>Profile</Link>
                  </li>
                  <li>
                     <Link to={`${match.url}/weeks`}>Weeks</Link>
                  </li>
                  <li>
                     <Link to={`${match.url}/personalcalendar`}>Calendar</Link>
                  </li>
               </ul>

               <div className="dashboardContent">
                  <Route
                     exact
                     path={`${match.path}/profile`}
                     component={Profile}
                  />
                  <Route exact path={`${match.path}/weeks`} component={Weeks} />
                  <Route
                     exact
                     path={`${match.path}/personalcalendar`}
                     component={Calendar}
                  />
               </div>
            </Jumbotron>
         </Wrapper>
      </div>
   );
};

export default Dashboard;
