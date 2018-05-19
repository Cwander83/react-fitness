import React from 'react';
import "./style.css";
import {Link} from 'react-router-dom';


const SignUp = (props) =>{
	

	return (
		<div>
		<h1>Sign UP</h1>
		<Link className="signLink"to = "/signin" >Go to sign in</Link>
			<form>
			
				<label>Email</label><br/>
				<input value = {props.username} onChange = {props.handleChange} name='username' type='name' placeholder = 'example@email.com'/>
				<br />
				<label>Password</label><br/>
				<input name='password' type='password' value = {props.password} onChange = {props.handleChange} />
				<br />
				<button type = 'submit' name = "/auth/signup" onClick = {props.handleSubmit}>Sign Up</button>
			</form>
		</div>
	);

};

export default SignUp;