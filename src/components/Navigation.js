import logo from "../logo.svg";
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navigation.css";

export default function Navigation() {
  return (
    <nav className="nav container">
      <img src={logo} alt="logo" className="nav__logo" />
      <ul className="nav__list">
        <li>
          <h4>
            <Link to="/">Home</Link>
          </h4>
        </li>
        <li>
          <h4>
            <Link to="/about">About</Link>
          </h4>
        </li>
      </ul>
    </nav>
  );
}
