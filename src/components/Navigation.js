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
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
