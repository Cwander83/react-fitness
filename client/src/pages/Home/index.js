import React, {Component} from 'react';
import './style.css';

import {NavLink} from "react-router-dom";
// import SignIn from "../../components/SignIn";
// import SignUp from "../../components/SignUp";
// import Dashboard from "../Dashboard";
import GithubCorner from 'react-github-corner';
import Wrapper from '../../components/Wrapper';
// import WeeksDropDown from "../../components/WeeksDropDown";
// import LoginModal from "../../components/LoginModal";
// import SignUpModal from "../../components/SignUpModal";
import {} from 'reactstrap';


class Home extends Component {

	render() {
	
		return (
			
			<Wrapper>
			<GithubCorner href="https://github.com/username/repo"/>	
				<div className='box'>
				<h1 className='mainH1'>4 week Revolution</h1>
				<ul>

				<NavLink to="/signup" style={{color: 'white'}} activeStyle={{color: 'white'}}><li>Dashboard</li></NavLink>
				<li><NavLink to="/calendar" style={{color: 'white'}} activeStyle={{color: 'white'}}>Calendar</NavLink></li>
				
			</ul>
			</div>
			</Wrapper>
			
				)
		}
	
};

export default Home;