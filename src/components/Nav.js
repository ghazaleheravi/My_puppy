import React from 'react';
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <ul className="ul">
        <li>
          <Link to="/">Home</Link>
        </li>     
        <li>
          <Link to="/adoption">Adoption</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;