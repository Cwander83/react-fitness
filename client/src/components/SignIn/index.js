import React from "react";
import "../../styles/style.css";
import { Link } from "react-router-dom";
import { Form, Label, Input, FormGroup, Button } from "reactstrap";

const SignIn = props => {
   return (
      <div>
         <Link className="signLink" to="/signup">
            Go to sign up
         </Link>
         <Form>
            <FormGroup>
               <Label>Email</Label>
               <Input
                  value={props.username}
                  onChange={props.handleChange}
                  name="username"
                  type="email"
                  placeholder="example@email.com"
               />
            </FormGroup>
            <FormGroup>
               <Label>Password</Label>
               <Input
                  name="password"
                  type="password"
                  value={props.password}
                  onChange={props.handleChange}
               />
            </FormGroup>
            <Button
               type="submit"
               name="/auth/signin"
               onClick={props.handleSubmit}
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
   );
};

export default SignIn;
