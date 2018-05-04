import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";

//import Wrapper from './components/Wrapper';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

const App = () => (


  <Router>
    <div className="app">

        <Route exact path="/dashboard" render= {()=><Dashboard/>} />
        <Route exact path="/" render= {()=><Home />}/>
      
      </div>
  </Router>
  
  
)

export default App;