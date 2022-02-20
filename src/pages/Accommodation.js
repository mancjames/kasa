import React from 'react'
import { useParams } from 'react-router-dom'
import Carousel, {CarouselItem} from '../components/Carousel';
import Tag from '../components/components__accommodation/Tag';
import Rating from '../components/Rating'
import Accordion from '../components/Accordion';
import '../styles/Accommodation.css'

export default function Accommodation(props) {
    let { id } = useParams();

    return (
        <>               
            {
                props.data
                    .filter(place => place.id === id)
                    .map((place, index) => {
                        const tags = place.tags.map((tag) => {
                            return (
                                <Tag tag={tag} key={tag}  />
                            )
                        })

                        const equipments = place.Amenities.map(item => {
                            return (
                                <li>{item}</li>
                            )
                        })

                        return (
                            <>
                            <Carousel key={index} >
                               {
                                   place.pictures.map((pic, index) => {
                                       return (
                                        <CarouselItem key={index} ><img src={pic} alt="accommodation" /></CarouselItem>
                                       )
                                   })
                               }
                            </Carousel>
                            <section className="accommodation__content container">
                               <div className="accommodation__details">
                                   <div className="accommodation__title">
                                       <h1>{place.title}</h1>
                                       <h4>{place.location}</h4>
                                   </div>
                                    <div className="accommodation__tags-section">
                                        {tags}
                                    </div>
                               </div>
                               <div className="accommodation__host-details">
                                   <div className="accommodation__host">
                                        <h4 className="accommodation__name">{place.host.name}</h4>
                                        <img src={place.host.picture} alt={place.host.name} />
                                   </div>
                                   <div className="accommodation__ratings">
                                        <Rating rating={place.rating} />
                                   </div>
                               </div>
                            </section>
                            <section className="accommodation__accordion-section container">
                                <Accordion title="Description" content={place.description} width='100%' />
                                <Accordion title="Equipements" content={<ul className="accommodation__equipements-list" width='100%'>{equipments}</ul>} />
                            </section>
                            
                            </>
                        )
                    })
                    
            }
        </>
    )
}