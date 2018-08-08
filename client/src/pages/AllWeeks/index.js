import React, { Component } from "react";
import "../../styles/style.css";

import Wrapper from "../../components/Wrapper";
import NavHeader from "../../components/NavHeader";
import { Route, Link } from "react-router-dom";
import { Jumbotron } from "reactstrap";
import Weeks from "../../components/WorkoutProgram/Weeks";
import { connect } from "react-redux";
import { uploadPlan } from "../../redux/actions";

class AllWeeks extends Component {
	componentDidMount() {
		console.log("did mount");
	}
	componentWillMount() {
		console.log("willmount");
		this.props.dispatch(uploadPlan());
	}
	render() {
		return (
			<Wrapper>
				<NavHeader />
				<Jumbotron className="dashboardJumbotron">
					<ul className="dashboardHeader">
						<li>
							<Link to={`${this.props.match.url}/week1`}>
								<p className="weeksPTag">week </p>1
							</Link>
						</li>
						<li>
							<Link to={`${this.props.match.url}/week2`}>
								<p className="weeksPTag">week</p> 2
							</Link>
						</li>
						<li>
							<Link to={`${this.props.match.url}/week3`}>
								<p className="weeksPTag">week</p> 3
							</Link>
						</li>
						<li>
							<Link to={`${this.props.match.url}/week4`}>
								<p className="weeksPTag">week</p> 4
							</Link>
						</li>
					</ul>

					<div className="dashboardContent">
						<Route
							exact
							path={`${this.props.match.path}/week1`}
							render={() => <Weeks programWeek={1} />}
						/>
						<Route
							path={`${this.props.match.path}/week2`}
							render={() => <Weeks programWeek={2} />}
						/>
						<Route
							path={`${this.props.match.path}/week3`}
							render={() => <Weeks programWeek={3} />}
						/>
						<Route
							path={`${this.props.match.path}/week4`}
							render={() => <Weeks programWeek={4} />}
						/>
					</div>
				</Jumbotron>
			</Wrapper>
		);
	}
}
const mapStateToProps = (state) => ({
	workoutPlan: state.workoutPlan.data
});

export default connect(mapStateToProps)(AllWeeks);
