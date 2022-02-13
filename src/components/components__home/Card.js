import React from 'react'

export default function Card(props) {
  return (
    <article className="card">
        <img className="card__image" src={props.cover} alt={props.title} />
        <div className="card__overlay"></div>
        <p className="card__text">{props.title}</p>
    </article>
  )
}
