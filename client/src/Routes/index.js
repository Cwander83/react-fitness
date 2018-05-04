import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';

class Routes extends Component {
    render() {
        return (
            <div>
                
                <Route exact path="/home" component={Home} />
                <Route exact path="/dashboard" render= {()=><Dashboard/>} />
                <Route exact path="/" render= {()=><Home/>}/>
                
            </div>
        )
    }
}

export default Routes;