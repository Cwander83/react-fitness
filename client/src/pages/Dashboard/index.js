import React, {Component} from 'react';
import "./style.css";
import axios from 'axios';
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import GithubCorner from 'react-github-corner';
import SignIn from "../../components/SignIn";
import SignUp from "../../components/SignUp";
import Wrapper from '../../components/Wrapper';


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
		<Router>
<div>
	<Wrapper>
	<GithubCorner href="https://github.com/username/repo"/>	
<Route exact path = "/dashboard" render = {()=> {
  if(loggedIn){
	return <Redirect to = "/dashboard" />
  } else{
	return <SignIn 
	  handleChange= {this.handleChange} 
	  handleSubmit = {this.handleSubmit}
	  email = {this.state.email}
	  password = {this.state.password}
	/>
  } 
}}/>
<Route exact path = "/signup" render = {()=> {
  if(loggedIn){
	return <Redirect to = "/dashboard" />
  } else{
	return <SignUp 
	  handleChange= {this.handleChange} 
	  handleSubmit = {this.handleSubmit}
	  email = {this.state.email}
	  password = {this.state.password}
	/>
  }  
}}/>
<Route exact path = "/dashboard" render = {()=> {
  if(!loggedIn){
	return <Redirect to = "/dashboard" />
  } else {
	return <Dashboard handleLogout = {this.handleLogout} auth = { this.state.auth }/>
  } 
}
}/>
</Wrapper>
</div>
</Router>)
}
};

export default Dashboard;