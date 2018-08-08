import React, { Component } from "react";
import "../../styles/style.css";
import { Route, Link } from "react-router-dom";

import Wrapper from "../../components/Wrapper";
import Calendar from "../Calendar";
import Profile from "../../components/ProfileComponents/Profile";
import WorkoutInput from "../../components/WorkoutProgram/WorkoutInput";
import NavHeader from "../../components/NavHeader";
import { Jumbotron } from "reactstrap";
import API from "../../utils/API";

class Dashboard extends Component {
  
   componentWillMount() {
   
   }

   render() {
     
      return (
         <div>
            <Wrapper>
               <NavHeader />
               

               <Jumbotron className="dashboardJumbotron">
                  <ul className="dashboardHeader">
                     <li>
                        <Link to={`${this.props.match.url}/profile`}>
                           Profile
                        </Link>
                     </li>
                     <li>
                        <Link to={`${this.props.match.url}/personalcalendar`}>
                           Personal Calendar
                        </Link>
                     </li>
                     <li>
                        <Link to={`${this.props.match.url}/gym`}>
                           GYM TIME!!
                        </Link>
                     </li>
                  </ul>

                  <div className="dashboardContent">
                     <Route
                        exact
                        path={`${this.props.match.path}/profile`}
                        render={props => <Profile {...props} />}
                     />

                     <Route
                        exact
                        path={`${this.props.match.path}/personalcalendar`}
                        component={Calendar}
                     />
                     <Route
                        exact
                        path={`${this.props.match.path}/gym`}
                        component={WorkoutInput}
                     />
                  </div>
               </Jumbotron>
            </Wrapper>
         </div>
      );
   }
}

export default Dashboard;
