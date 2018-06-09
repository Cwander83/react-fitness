import React, {Component} from "react";
import "../../styles/style.css";
import { Link } from "react-router-dom";
import { Form, Label, Input, FormGroup, Button, Jumbotron } from "reactstrap";
import Wrapper from "../../components/Wrapper";
import NavHeader from "../../components/NavHeader";
import GithubCorner from "react-github-corner";

class SignIn extends Component {
   // const isEnabled=(value) => {value.length < 4};
   render(){
   return (
      <Wrapper>
         <GithubCorner href="https://github.com/Cwander83/react-fitness" />
         <NavHeader />
         <Jumbotron className="dashboardJumbotron">
            <h1>Dashboard Sign In</h1>

            <div className="dashboardContent">
               <Link className="signLink" to="/signup">
                  Go to sign up
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
                     name="/auth/signin"
                     onClick={this.props.handleSubmit}
                  >
                     Sign In
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
};

export default SignIn;
