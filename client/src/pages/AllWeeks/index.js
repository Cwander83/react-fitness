import React from "react";
import "../../styles/style.css";
import GithubCorner from "react-github-corner";
import Wrapper from "../../components/Wrapper";
import NavHeader from "../../components/NavHeader";
import { Route, Link } from "react-router-dom";
import { Jumbotron } from "reactstrap";
import { Week1, Week2, Week3, Week4 } from "../../components/Weeks";

const AllWeeks = ({ match }) => {
   console.log(match.url);
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
               <Route exact path={`${match.path}/week1`} component={Week1} />
               <Route exact path={`${match.path}/week2`} component={Week2} />
               <Route exact path={`${match.path}/week3`} component={Week3} />
               <Route exact path={`${match.path}/week4`} component={Week4} />
            </div>
         </Jumbotron>
      </Wrapper>
   );
};

export default AllWeeks;
