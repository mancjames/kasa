import React from 'react'
import { useParams } from 'react-router-dom'
import Carousel, {CarouselItem} from '../components/components__accommodation/Carousel';
import '../styles/Accommodation.css'

export default function Accommodation(props) {
    let { id } = useParams();

    return (
        <div >               
            {
                props.data
                    .filter(place => place.id === id)
                    .map((place, index) => {
                        return (
                            <Carousel key={index} >
                               {
                                   place.pictures.map((pic, index) => {
                                       return (
                                        <CarouselItem key={index} ><img src={pic} alt="accommodation" /></CarouselItem>
                                       )
                                   })
                               }
                            </Carousel>
                        )
                    })
            }
        </div>
    )
}