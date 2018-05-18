import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import {BrowserRouter as Router, Route, Redirect, NavLink} from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from './pages/Home';
import Calendar from "./pages/Calendar";
import Dashboard from './pages/Dashboard';
import GithubCorner from 'react-github-corner';
import Wrapper from './components/Wrapper';
import WeeksDropDown from "./components/WeeksDropDown";
import LoginModal from "./components/LoginModal";
import SignUpModal from "./components/SignUpModal";

import {} from 'reactstrap';


class App extends Component {
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
		console.log(name);
		console.log(value);
			// Set the state for the appropriate input field
		this.setState({
		  [name]: value
		});
	  }
	
	  handleSubmit = (event) => {
		event.preventDefault();
		console.log(`event: ${event}`);
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
	
	render() {
		const loggedIn = this.state.auth.isAuthenticated;
return(
  <Router>
  <Wrapper>
					<GithubCorner href="https://github.com/username/repo"/>	
            <div className='box'>
		        <h1 className='mainH1'>4 week Revolution</h1>
						<ul>
					<li><LoginModal handleChange= {this.handleChange} handleSubmit = {this.handleSubmit} email = {this.state.email} password = {this.state.password} />/
					<SignUpModal handleChange= {this.handleChange} handleSubmit = {this.handleSubmit} email = {this.state.email} password = {this.state.password}/></li>
						<li><NavLink to="/dashboard" style={{color: 'white'}} activeStyle={{color: 'white'}}>Dashboard</NavLink></li>
						<li><NavLink to="/calendar" style={{color: 'white'}} activeStyle={{color: 'white'}}>Calendar</NavLink></li>
						<li>
							<WeeksDropDown />
							</li>
					</ul>
	
    <div className="routes">
        <Route path="/calendar" render = {()=> <Calendar/>} />
        <Route exact path="/" render= {()=><Home />}/>

        <Route exact path = "/???????singin" render = {()=> {
          if(loggedIn){
          return <Redirect to = "/dashboard" />
          } else{
          return <SignIn handleChange= {this.handleChange} handleSubmit = {this.handleSubmit} email = {this.state.email} password = {this.state.password} />} }}/>

        <Route exact path = "/??????signup" render = {()=> {
          if(loggedIn){
          return <Redirect to = "/dashboard" />
          } else{
          return <SignUp handleChange= {this.handleChange} handleSubmit = {this.handleSubmit} email = {this.state.email} password = {this.state.password} /> } }}/>
        <Route exact path = "/dashboard" render = {()=> {
          if(!loggedIn){
          return <Redirect to = "/" />
          } else {
          return <Dashboard handleLogout = {this.handleLogout} auth = { this.state.auth }/>
          } 
        }
        }/>
      
      </div>
      		</div>
	</Wrapper>
  </Router>
  
  
)
  }
}

export default App;