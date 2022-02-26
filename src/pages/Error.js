import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Error.css";

export default class Error extends Component {
  render() {
    return (
      <div className="error">
        <section className="error__hero">
          <h1 className="error__title">404</h1>
          <h3 className="error__text">
            Oops! It looks like this page doesn't exist
          </h3>
        </section>
        <h5 className="error__link">
          <Link to="/">Go back to the home page</Link>
        </h5>
      </div>
    );
  }
}
