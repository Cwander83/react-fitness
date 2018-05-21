import React, { Component } from "react";
//import { Route, Link } from "react-router-dom";
import "../../styles/style.css";
import ProfileUpdate from "../../components/ProfileUpdate";
import axios from "axios";
import { Button } from "reactstrap";

class Profile extends Component {
   state = {
       weight: "",
       phonenumber: "",
       goals: "",
      isUpdateVisible: false,
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

   handleUpdate() {
      this.setState({ isUpdateVisible: true });
   }

   handleChange = event => {
      const { name, value } = event.target;

      // Set the state for the appropriate input field
      this.setState({
         [name]: value
      });
   };

   render() {
      console.log(this.state.auth);
      console.log(this.props.match);
      return (
         <div>
            <div>
               {!this.state.isUpdateVisible ? (
                  <div>
                     <Button onClick={() => this.handleUpdate()}>
                        Edit Profile
                     </Button>
                     <h1>Hello world this is Profile</h1>
                     <h3>user name</h3>
                     <h3>Email: {this.state.auth.username}</h3>
                     <h3>user phone number </h3>
                     <h3>user goals</h3>
                     <h3>user exercise history</h3>
                  </div>
               ) : null}
            </div>
            <div>
               {this.state.isUpdateVisible ? (
                  <ProfileUpdate
                     handleChange={this.handleChange}
                     handleSubmit={this.handleSubmit}
                  />
               ) : null}
            </div>
         </div>
      );
   }
}

export default Profile;
