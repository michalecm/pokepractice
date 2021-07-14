import React from "react";
import logo from "./../pngegg.png";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="navbar">
      <div className="header">
        <img className="logo" src={logo} alt="logo" />
        <h2>My Pokedex</h2>
      </div>

      <ul className="nav-links">
        <Link className="nav-style" to="/">
          <li>Home</li>
        </Link>
        <Link className="nav-style" to="/pokedex">
          <li>Pokemon</li>
        </Link>
        <Link className="nav-style" to="/addpokemon">
          <li>Add Pokemon</li>
        </Link>
      </ul>
    </div>
  );
}
