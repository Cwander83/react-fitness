import React, { Component } from "react";
import "./styles/style.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./pages/Home";
import {} from "reactstrap";
import AllWeeks from "./pages/AllWeeks";

class App extends Component {
   render() {
      return (
         <Router>
            <div className="routes">
               <Route path="/fullprogram" component={AllWeeks} />
               <Route exact path="/" component={Home} />
            </div>
         </Router>
      );
   }
}

export default App;
