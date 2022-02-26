import React from "react";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <Link to={`/accommodation/${props.id}`}>
      <article
        className="card"
        style={{ backgroundImage: `url(${props.cover})` }}
      >
        <p className="card__text">{props.title}</p>
        <div className="card__overlay"></div>
      </article>
    </Link>
  );
}
