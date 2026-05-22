// import React from 'react';

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <h1>My Store</h1>
        <div className="nav-links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            <li>
              <Link to="/Timer">Timer</Link>
            </li>
            <li>
              <Link to="/Product">Product</Link>
            </li>
            <li className="dropdown">
              <Link to="#">Tasks</Link>

              <div className="dropdown-content">
                <Link to="/task1">Task 1</Link>
                <Link to="/task2">Task 2</Link>
                <Link to="/task3">Task 3</Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
