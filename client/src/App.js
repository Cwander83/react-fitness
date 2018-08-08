import React, { Component } from "react";
import "./styles/style.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import {} from "reactstrap";
import AllWeeks from "./pages/AllWeeks";
import SignIn from "./components/SignIn";

class App extends Component {
	render() {
		return (
			<Router>
				<div className="routes">
					<Switch>
						<Route path="/fullprogram" component={AllWeeks} />
						<Route exact path="/" component={Home} />
						<Route path="/signin" component={SignIn} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
