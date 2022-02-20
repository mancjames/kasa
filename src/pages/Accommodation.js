import React from 'react'
import { useParams } from 'react-router-dom'

export default function Accommodation(props) {
    let { id } = useParams();

    return (
        <div>               
            {
                props.data
                    .filter(place => place.id === id)
                    .map(place => {
                        return (
                            <div key={place.id}>{place.description}</div>
                        )
                    })
            }
        </div>
    )
}