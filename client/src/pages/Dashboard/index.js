import React, {Component} from 'react';
import "./style.css";
import axios from 'axios';
//import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
//import SignIn from "./components/SignIn";
//import SignUp from "./components/SignUp";


 class Dashboard extends Component{
	state = {
		username: "",
		password: "",
		auth: {
		  userId:"",
		  username:"",
		  isAuthenticated:false
		}
	  };
	
	  componentWillMount(){
		axios.get("/auth/isAuthenticated").then((result)=>{
		  const {userId, isAuthenticated,username} = result.data
		  this.setState({
			auth:{
			  userId,
			  isAuthenticated,
			  username
			}
		  });
		});
	  }
	
	  handleChange = (event) => {
		const {name, value} = event.target;    
			// Set the state for the appropriate input field
		this.setState({
		  [name]: value
		});
	  }
	
	  handleSubmit = (event) => {
		event.preventDefault();
		console.log('a');
		//call a sign In function
		const newUser = {
		  username: this.state.username,
		  password: this.state.password
		};
		this.setState({
		  username: "",
		  password: ""
		}); 
		const {name} = event.target;
		axios.post(name, newUser).then((data) => {
		  if (data.data.isAuthenticated){
			const {userId, isAuthenticated,username} = data.data;
			this.setState({
			  auth:{
				userId,
				isAuthenticated,
				username
			  }
			});
		  }
		});
	  }
	
	  handleLogout = (event) => {
		event.preventDefault();
		axios.get("/auth/logout").then((result)=>{
		  this.setState({
			auth:{
			  userId: "",
			  username: "",
			  isAuthenticated: false
			}
		  });
		})
	  };
     render(){
		const loggedIn = this.state.auth.isAuthenticated;
     
	return (
		<div>
			
		</div>
    );
}
};

export default Dashboard;