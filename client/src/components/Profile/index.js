import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "../../styles/style.css";
import ProfileUpdate from "../../components/ProfileUpdate";
import axios from "axios";
import {} from "reactstrap";

class Profile extends Component {
   state = {
      url: "profile",
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

   render() {
      console.log(this.state.auth);
      console.log(this.state);
      return (
         <div>
            <h1>
               Hello world this is Profile<Link to={"/dashboard/profile/profileupdate"}>
                  Update
               </Link>
            </h1>
            <h3>user name</h3>
            <h3>Email: {this.state.auth.username}</h3>
            <h3>user phone number </h3>
            <h3>user goals</h3>
            <h3>user exercise history</h3>

            <Route
               exact
               path={"/dashboard/profile/profileupdate"}
               render={() => <ProfileUpdate username ={this.state.auth.username}/>}
            />
         </div>
      );
   }
}

export default Profile;
