import React, { Component } from "react";
import "../../styles/style.css";
// import axios from "axios";
import {} from "reactstrap";

class ProfileUpdate extends Component {
    render(){
        console.log(this.match)
        console.log(this.props.auth.username);
        return (
            <h1>profile update</h1>

        )
    }

}
export default ProfileUpdate;