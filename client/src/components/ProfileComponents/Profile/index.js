import React, { Component } from "react";
//import { Route, Link } from "react-router-dom";
import "../../../styles/style.css";
import ProfileUpdate from "../ProfileUpdate/index.js";
//import axios from "axios";
import API from "../../../utils/API";
import { Button } from "reactstrap";

class Profile extends Component {
   state = {
      weight: null,
      phone: null,
      goals: "",
      isUpdateVisible: false,
      auth: {
         userId: "",
         username: "",
         weight: null,
         phone: null,
         goals: "",
         isAuthenticated: false
      }
   };
   
   componentWillMount() {
       console.log("componentdidmount");
       //console.log(this.props.auth.userId);
       //const id = this.props.auth.userId
       console.log("id");
      //API.findOneUsers(id)
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

   handleSubmit = event => {
      event.preventDefault();
      const id = this.state.auth.userId;
      const newProfile = {
         weight: this.state.weight,
         phonenumber: this.state.phone,
         goals: this.state.goals
      };
      API.updateUser(id, newProfile);
      
      //   setTimeout(
      //      function() {
      //         this.setState({ isUpdateVisible: false });
      //      }.bind(this),
      //      3000
      //   );
   };

   render() {
     

      return (
         <div>
            <div>
               {!this.state.isUpdateVisible ? (
                  <div>
                     <Button onClick={() => this.handleUpdate()}>
                        Edit Profile
                     </Button>

                     <h2>Welcome Back, {this.state.auth.username} </h2>
                     <br />
                     <h3>phone number: {this.state.auth.phone} </h3>
                     <h3>Goals: {this.state.auth.goals}</h3>
                     <h3>Weight: {this.state.auth.weight}</h3>
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
