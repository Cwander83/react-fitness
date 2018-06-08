import React, { Component } from "react";
//import { Route, Link } from "react-router-dom";
import "../../styles/style.css";
import ProfileUpdate from "../../components/ProfileUpdate";
import axios from "axios";
import API from "../../utils/API";
import { Button } from "reactstrap";

class Profile extends Component {
   state = {
      weight: null,
      phone: "",
      goals: "",
      isUpdateVisible: false,
      auth: {
         userId: "",
         username: "",
         weight: null,
         phone: "",
         goals: "",
         isAuthenticated: false
      }
   };

   componentDidMount() {
      axios.get("/auth/isAuthenticated").then(result => {
         const {
            userId,
            isAuthenticated,
            username,
            weight,
            phone,
            goals
         } = result.data;
         this.setState({
            auth: {
               userId,
               isAuthenticated,
               username,
               weight,
               phone,
               goals
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

   handleSubmit = event => {
      event.preventDefault();
      const id = this.state.auth.userId;
      const newProfile = {
         weight: this.state.weight,
         phonenumber: this.state.phone,
         goals: this.state.goals
      };
      API.updateUser(id, newProfile);
      this.setState({isUpdateVisible: false})
    //   setTimeout(
    //      function() {
    //         this.setState({ isUpdateVisible: false });
    //      }.bind(this),
    //      3000
    //   );
   };

   render() {
      console.log(this.state.auth);
      // console.log(this.props.match);

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
