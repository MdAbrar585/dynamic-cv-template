import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-section container">
      <h3 className="text-center">Dynamic CV</h3>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/createCV">CreateCV</Link>
          </li>
          <li>
            <Link to="/cvlist">CVList</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
