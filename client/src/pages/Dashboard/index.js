import React from 'react';
import "./style.css";

import { NavLink, Route, Link} from "react-router-dom";
import GithubCorner from 'react-github-corner';
// import Home from '../Home';
// import Calendar from "../Calendar";
import Wrapper from '../../components/Wrapper';
import Calendar from '../Calendar';
import Profile from '../../components/Profile';
import Weeks from '../../components/Weeks';




const Dashboard =({match}) => {
	
		const currentUrl = match.url;
		console.log(currentUrl);
		const currentPath = match.path;
	return (
	
<div>
	<Wrapper>
	<GithubCorner href="https://github.com/username/repo"/>
		<h1>Hello to Dashboard!!</h1>
		<ul className="dashNav">
		   <NavLink to = "/" ><li>Home</li></NavLink>
	     <NavLink to = "/calendar" ><li>Calendar</li></NavLink>
	     <NavLink to = "/" ><li>Workout</li></NavLink>
	  </ul>

	<GithubCorner href="https://github.com/username/repo"/>	

	<div className="dashboardContainer">
	<ul>
	<li><Link to={`${currentUrl}/profile}`}>Profile</Link></li>
	<li><Link to={`${currentUrl}/weeks}`}>Weeks</Link></li>
	<li><Link to={`${currentUrl}/personalcalendar}`}>Calendar</Link></li>
	</ul>
	
	</div>
	<div className="dashboardContent">
	
	<Route path={`${currentPath}/profile`} component={Profile} />
	<Route path={`${currentPath}/profile`} component={Weeks} />
	<Route path={`${currentPath}/profile`} component={Calendar} />

</div>
</Wrapper>
</div>
)

};

export default Dashboard;