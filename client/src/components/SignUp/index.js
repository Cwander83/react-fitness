import React from "react";
import "../../styles/style.css";
import { Link } from "react-router-dom";
import { Form, Label, Input, FormGroup, Button } from "reactstrap";

const SignUp = props => {
   return (
      <div>
         <h1>Sign UP</h1>
         <Link className="signLink" to="/signin">
            Go to sign in
         </Link>
         <Form>
            <FormGroup>
               <Label>Email</Label>

               <Input
                  value={props.username}
                  onChange={props.handleChange}
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
                  value={props.password}
                  onChange={props.handleChange}
               />
            </FormGroup>

            <Button
               type="submit"
               name="/auth/signup"
               onClick={props.handleSubmit}
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
   );
};

export default SignUp;
