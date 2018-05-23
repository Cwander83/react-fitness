import React, { Component } from "react";
import "../../styles/style.css";
// import axios from "axios";
import { Form, FormGroup, FormText, Button, Input, Label } from "reactstrap";

class ProfileUpdate extends Component {
   render() {
      //console.log(this.match);
      console.log(this.props);
      return (
         <div>
            <h1>profile update</h1>
            <Form>
               <FormGroup>
                  <Label for="weightinput">Weight (lbs.)</Label>
                  <Input
                     value={this.props.weight}
                     onChange={this.props.handleChange}
                     type="number"
                     name="weight"
                     id="weightinput"
                  />
               </FormGroup>
               <FormGroup>
                  <Label for="phone">Phone Number</Label>
                  <Input
                     value={this.props.phone}
                     onChange={this.props.handleChange}
                     id="phone"
                     name="phone"
                  />
                  <FormText>please enter "10 digit number"</FormText>
               </FormGroup>
               <FormGroup>
                  <Label for="fitnessgoals">Fitness Goal</Label>
                  <Input
                     value={this.props.goals}
                     onChange={this.props.handleChange}
                     type="select"
                     name="goals"
                     id="fitnessgoals"
                  >
                     <option>Lose Weight</option>
                     <option>Gain Weight</option>
                     <option>Build Muscle</option>
                     <option>Transformation</option>
                     <option>Tone Up</option>
                  </Input>
               </FormGroup>
               <Button type="submit" onClick={this.props.handleSubmit}>
                  Submit
               </Button>
               <Button>Cancel</Button>
            </Form>
         </div>
      );
   }
}
export default ProfileUpdate;
