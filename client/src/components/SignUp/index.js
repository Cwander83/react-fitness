import React, { Component } from "react";
import "../../styles/style.css";
import { Link } from "react-router-dom";
import { Form, Label, Input, FormGroup, Button, Jumbotron } from "reactstrap";
import Wrapper from "../../components/Wrapper";
import NavHeader from "../../components/NavHeader";
import GithubCorner from "react-github-corner";

class SignUp extends Component {
   render() {
      return (
         <Wrapper>
            <GithubCorner href="https://github.com/Cwander83/react-fitness" />
            <NavHeader />
            <Jumbotron className="dashboardJumbotron">
               <h1>Dashboard Sign Up</h1>

               <div className="dashboardContent">
                  <Link className="signLink" to="/signin">
                     Go to sign in
                  </Link>
                  <Form>
                     <FormGroup>
                        <Label>Email</Label>

                        <Input
                           value={this.props.username}
                           onChange={this.props.handleChange}
                           name="username"
                           type="name"
                           placeholder="example@email.com"
                        />
                     </FormGroup>

                     <FormGroup>
                        <Label>Password</Label>
                        <Input
                           name="password"
                           type="password"
                           value={this.props.password}
                           onChange={this.props.handleChange}
                        />
                     </FormGroup>

                     <Button
                        type="submit"
                        name="/auth/signup"
                        onClick={this.props.handleSubmit}
                     >
                        Sign Up
                     </Button>
                     <Button>
                        <Link to="/" style={{ color: "white" }}>
                           Cancel
                        </Link>
                     </Button>
                  </Form>
               </div>
            </Jumbotron>
         </Wrapper>
      );
   }
}

export default SignUp;
