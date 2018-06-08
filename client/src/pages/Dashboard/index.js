import React from "react";
import "../../styles/style.css";
import { Route, Link } from "react-router-dom";
import GithubCorner from "react-github-corner";
import Wrapper from "../../components/Wrapper";
import Calendar from "../Calendar";
import Profile from "../../components/Profile";
import WorkoutInput from "../../components/WorkoutProgram/WorkoutInput";
import NavHeader from "../../components/NavHeader";
import { Jumbotron } from "reactstrap";


const Dashboard = ({ match }) => {
   //    console.log(match);

   return (
      <div>
         <Wrapper>
            <NavHeader />
            <GithubCorner href="https://github.com/username/repo" />

            <Jumbotron className="dashboardJumbotron">
               <ul className="dashboardHeader">
                  <li>
                     <Link to={`${match.url}/profile`}>Profile</Link>
                  </li>
                  <li>
                     <Link to={`${match.url}/personalcalendar`}>
                        Personal Calendar
                     </Link>
                  </li>
                  <li>
                     <Link to={`${match.url}/gym`}>GYM TIME!!</Link>
                  </li>
               </ul>

               <div className="dashboardContent">
                  <Route
                     exact
                     path={`${match.path}/profile`}
                     render={match => <Profile {...match} />}
                  />
                 
                  <Route
                     exact
                     path={`${match.path}/personalcalendar`}
                     component={Calendar}
                  />
                  <Route
                     exact
                     path={`${match.path}/gym`}
                     component={WorkoutInput}
                  />
               </div>
            </Jumbotron>
         </Wrapper>
      </div>
   );
};

export default Dashboard;
