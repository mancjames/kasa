import React from "react";
import { useParams } from "react-router-dom";
import Carousel, { CarouselItem } from "../components/Carousel";
import Tag from "../components/components__accommodation/Tag";
import Rating from "../components/Rating";
import Accordion from "../components/Accordion";
import Error from "./Error";
import "../styles/Accommodation.css";

export default function Accommodation(props) {
  let { id } = useParams();
  const place = props.data.find((place) => place.id === id);
  if (!place) {
    return <Error />;
  }

  const tags = place.tags.map((tag) => {
    return <Tag tag={tag} key={tag} />;
  });

  const equipments = place.Amenities.map((item, index) => {
    return <li key={index}>{item}</li>;
  });

  const carouselPicture = place.pictures.map((pic, index) => {
    return (
      <CarouselItem key={index}>
        <img src={pic} alt="accommodation" />
      </CarouselItem>
    );
  });

  return (
    <>
      <Carousel>{carouselPicture}</Carousel>
      <section className="accommodation__content container">
        <div className="accommodation__details">
          <div className="accommodation__title">
            <h3>{place.title}</h3>
            <h5>{place.location}</h5>
          </div>
          <div className="accommodation__tags-section">{tags}</div>
        </div>
        <div className="accommodation__host-details">
          <div className="accommodation__host">
            <h5 className="accommodation__name">{place.host.name}</h5>
            <img src={place.host.picture} alt={place.host.name} />
          </div>
          <div className="accommodation__ratings">
            <Rating rating={place.rating} />
          </div>
        </div>
      </section>
      <section className="accommodation__accordion-section container">
        <Accordion title="Description" content={place.description} />
        <Accordion
          title="Equipements"
          content={
            <ul className="accommodation__equipements-list">{equipments}</ul>
          }
        />
      </section>
    </>
  );
}
