import React from "react";
import {Link } from "react-router-dom";

const Navibar = () => {
  return (
    <div>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link" to="/"> Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/add">Form</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/display"> Display</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navibar;
