import React, {Component} from 'react';
import "./style.css";
import {Link} from 'react-router-dom';

class SignUp extends Component {
	render(){
	return (
		<div>
			<h1>SIGN UP</h1>
			<Link to = "/" >Go to sign in</Link>
			<form>
				<label>Email</label><br/>
				<input value = {this.props.username} onChange = {this.props.handleChange} name='username' type='email' placeholder = 'example@email.com'/>
				<br />
				<label>Password</label><br/>
				<input name='password' type='password' value = {this.props.password} onChange = {this.props.handleChange} />
				<br />
				<button type = 'submit' name = "/auth/signup" onClick = {this.props.handleSubmit}>Sign Up</button>
			</form>
		</div>
	);
	}
};

export default SignUp;