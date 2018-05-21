import React, { Component } from "react";
import "./styles/style.css";
import axios from "axios";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
// import Profile from "./components/Profile";
import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import Dashboard from "./pages/Dashboard";
// import GithubCorner from 'react-github-corner';
// import Wrapper from './components/Wrapper';
// import WeeksDropDown from "./components/WeeksDropDown";
import {} from "reactstrap";

class App extends Component {
   state = {
      username: "",
      password: "",
      auth: {
         userId: "",
         username: "",
         isAuthenticated: false
      }
   };

   componentWillMount() {
      axios.get("/auth/isAuthenticated").then(result => {
         const { userId, isAuthenticated, username } = result.data;
         this.setState({
            auth: {
               userId,
               isAuthenticated,
               username
            }
         });
      });
   }

   handleChange = event => {
      const { name, value } = event.target;

      // Set the state for the appropriate input field
      this.setState({
         [name]: value
      });
   };

   handleSubmit = event => {
      event.preventDefault();

      // console.log(`event: ${event}`);
      // console.log(`event: ${event.target}`);

      //call a sign In function
      const newUser = {
         username: this.state.username,
         password: this.state.password
      };
      this.setState({
         username: "",
         password: ""
      });
      const { name } = event.target;
      axios.post(name, newUser).then(data => {
         if (data.data.isAuthenticated) {
            const { userId, isAuthenticated, username } = data.data;
            this.setState({
               auth: {
                  userId,
                  isAuthenticated,
                  username
               }
            });
         }
      });
   };

   handleLogout = event => {
      event.preventDefault();
      axios.get("/auth/logout").then(result => {
         this.setState({
            auth: {
               userId: "",
               username: "",
               isAuthenticated: false
            }
         });
      });
   };

   render() {
      const loggedIn = this.state.auth.isAuthenticated;
      return (
         <Router>
            <div className="routes">
               <Route path="/calendar" component={Calendar} />
               <Route exact path="/" component={Home} />
               <Route
                  path="/signin"
                  render={() =>
                     loggedIn ? (
                        <Redirect to="/dashboard" />
                     ) : (
                        <SignIn
                           handleChange={this.handleChange}
                           handleSubmit={this.handleSubmit}
                           email={this.state.email}
                           password={this.state.password}
                        />
                     )
                  }
               />
               <Route
                  path="/signup"
                  render={() =>
                     loggedIn ? (
                        <Redirect to="/dashboard" />
                     ) : (
                        <SignUp
                           handleChange={this.handleChange}
                           handleSubmit={this.handleSubmit}
                           email={this.state.email}
                           password={this.state.password}
                        />
                     )
                  }
               />
               <Route
                  path="/dashboard"
                  component={Dashboard}
                //   render={() =>
                //      !loggedIn ? (
                //         <Redirect to="/" />
                //      ) : (
                //         <Dashboard
                //            handleLogout={this.handleLogout}
                //            auth={this.state.auth}
                //         />
                //      )
                //   }
               />
            </div>
         </Router>
      );
   }
}

export default App;
