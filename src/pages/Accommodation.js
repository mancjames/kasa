import React from 'react'
import { useParams } from 'react-router-dom'
import Carousel, {CarouselItem} from '../components/Carousel';
import Tag from '../components/components__accommodation/Tag';
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
                            <div className="accommodation__tags-section">
                                {tags}
                            </div>
                            </>
                        )
                    })
                    
            }
        </>
    )
}