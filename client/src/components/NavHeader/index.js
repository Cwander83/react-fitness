import React from "react";
import "../../styles/style.css";
import { Link } from "react-router-dom";

const NavHeader = (props)=>{
    return (
        <ul className="dashNav">
               <Link to="/">
                  <li>Home</li>
               </Link>
               <Link to="/calendar">
                  <li>Calendar</li>
               </Link>
               <Link to="/">
                  <li>Workout</li>
               </Link>
            </ul>
    );
}

export default NavHeader;