import React from "react";
import "../../styles/style.css";
import { Link } from "react-router-dom";

const NavHeader = props => {
   return (
      <ul className="dashNav">
         <li>
            <Link to="/">Home</Link>
         </li>
         <li>
            <Link to="/calendar">Calendar</Link>
         </li>
         <li>
            
         </li>
      </ul>
   );
};

export default NavHeader;
