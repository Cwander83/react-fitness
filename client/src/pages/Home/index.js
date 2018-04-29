<Router>
<div>
<Route exact path = "/" render = {()=> {
  if(loggedIn){
	return <Redirect to = "/Dashboard" />
  } else{
	return <SignIn 
	  handleChange= {this.handleChange} 
	  handleSubmit = {this.handleSubmit}
	  email = {this.state.email}
	  password = {this.state.password}
	/>
  } 
}}/>
<Route exact path = "/signup" render = {()=> {
  if(loggedIn){
	return <Redirect to = "/Dashboard" />
  } else{
	return <SignUp 
	  handleChange= {this.handleChange} 
	  handleSubmit = {this.handleSubmit}
	  email = {this.state.email}
	  password = {this.state.password}
	/>
  }  
}}/>
<Route exact path = "/Dashboard" render = {()=> {
  if(!loggedIn){
	return <Redirect to = "/" />
  } else {
	return <Dashboard handleLogout = {this.handleLogout} auth = { this.state.auth }/>
  } 
}
}/>
</div>
</Router>