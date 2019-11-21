import React, { Component } from "react";
import "../../styles/style.css";
import { NavLink } from "react-router-dom";

import Wrapper from "../../components/Wrapper";
import {} from "reactstrap";
import { connect } from "react-redux";
import { authenticatedUser } from "../../redux/actions";

class Home extends Component {
  componentWillMount() {
    this.props.dispatch(authenticatedUser());
  }
  render() {
    return (
      <Wrapper>
        <div className="box">
          <h1 className="mainH1">4 week Revolution</h1>

          <ul>
            <li>
              <NavLink to="/signin" style={{ color: "white" }}>
                Dashboard Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/fullprogram/week1" style={{ color: "white" }}>
                Workout Program
              </NavLink>
            </li>
          </ul>
        </div>
        <div />
      </Wrapper>
    );
  }
}

export default connect()(Home);
