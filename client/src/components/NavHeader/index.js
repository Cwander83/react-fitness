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
            <Link to="/fullprogram">Workout Program</Link>
         </li>
         <li>
            <Link to="/signup">Dashboard</Link>
         </li>
      </ul>
   );
};

export default NavHeader;
