import React, {Component} from 'react';
import "./style.css";

import { NavLink} from "react-router-dom";
import GithubCorner from 'react-github-corner';
// import Home from '../Home';
// import Calendar from "../Calendar";
import Wrapper from '../../components/Wrapper';



 class Dashboard extends Component{
	
     render(){

     
	return (
	
<div>
	<Wrapper>
		<h1>Hello to Dashboard!!</h1>
		<ul className="dashNav">
		   <NavLink to = "/" ><li>Home</li></NavLink>
	     <NavLink to = "/calendar" ><li>Calendar</li></NavLink>
	     <NavLink to = "/" ><li>Workout</li></NavLink>
	  </ul>

	<GithubCorner href="https://github.com/username/repo"/>	
</Wrapper>
</div>
)
}
};

export default Dashboard;