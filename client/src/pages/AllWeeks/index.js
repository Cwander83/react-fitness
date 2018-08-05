import React from "react";
import "../../styles/style.css";
import GithubCorner from "react-github-corner";
import Wrapper from "../../components/Wrapper";
import NavHeader from "../../components/NavHeader";
import { Route, Link } from "react-router-dom";
import { Jumbotron } from "reactstrap";
import Weeks from "../../components/WorkoutProgram/Weeks";

const AllWeeks = ({ match }) => {
 
   return (
      <Wrapper>
         <GithubCorner href="https://github.com/Cwander83/react-fitness" />
         <NavHeader />
         <Jumbotron className="dashboardJumbotron">
            <ul className="dashboardHeader">
               <li>
                  <Link to={`${match.url}/week1`}>week 1</Link>
               </li>
               <li>
                  <Link to={`${match.url}/week2`}>week 2</Link>
               </li>
               <li>
                  <Link to={`${match.url}/week3`}>week 3</Link>
               </li>
               <li>
                  <Link to={`${match.url}/week4`}>week 4</Link>
               </li>
            </ul>

            <div className="dashboardContent">
               <Route
                  exact
                  path={`${match.path}/week1`}
                  render={() => <Weeks programWeek={1} />}
               />
               <Route
                  
                  path={`${match.path}/week2`}
                  render={() => <Weeks programWeek={2} />}
               />
               <Route
                 
                  path={`${match.path}/week3`}
                  render={() => <Weeks programWeek={3} />}
               />
               <Route
                  
                  path={`${match.path}/week4`}
                  render={() => <Weeks programWeek={4} />}
               />
            </div>
         </Jumbotron>
      </Wrapper>
   );
};

export default AllWeeks;

