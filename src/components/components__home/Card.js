import React from "react";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <Link to={`/accommodation/${props.id}`}>
      <article className="card">
        <img className="card__image" src={props.cover} alt={props.title} />
        <div className="card__overlay"></div>
        <p className="card__text">{props.title}</p>
      </article>
    </Link>
  );
}
