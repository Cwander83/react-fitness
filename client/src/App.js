import React, { Component } from "react";
import "./styles/style.css";
import axios from "axios";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import Dashboard from "./pages/Dashboard";
import {} from "reactstrap";
import AllWeeks from "./pages/AllWeeks";

class App extends Component {
   state = {
      username: "",
      usernameError: "",
      password: "",
      passwordError: "",
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
         [name]: value,
         
      });
   };

   handleSubmit = event => {
      event.preventDefault();
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
               <Route path="/fullprogram" component={AllWeeks} />
               <Route exact path="/" component={Home} />
               <Route
                  path="/signin"
                  render={() =>
                     loggedIn ? (
                        <Redirect to="/dashboard/profile" />
                     ) : (
                        <SignIn
                           handleChange={this.handleChange}
                           handleSubmit={this.handleSubmit}
                           

                           
                        />
                     )
                  }
               />
               <Route
                  path="/signup"
                  render={() =>
                     loggedIn ? (
                        <Redirect to="/dashboard/profile" />
                     ) : (
                        <SignUp
                           handleChange={this.handleChange}
                           handleSubmit={this.handleSubmit}
                          
                           
                        />
                     )
                  }
               />
               <Route
                  path="/dashboard/profile"
                  
                  render={() =>
                     !loggedIn ? (
                        <Redirect to="/" />
                     ) : (
                        <Dashboard
                           handleLogout={this.handleLogout}
                           auth={this.state.auth}
                        />
                     )
                  }
               />
            </div>
         </Router>
      );
   }
}

export default App;
