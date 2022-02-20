import React from 'react'

export default function Rating(props) {
    const ratingString = []; 
    for(let i=0; i<props.rating; i++){
        ratingString.push(<span key={"Star_" + i} className="rating--full">&#9733;</span>) ;
    }
    for(let i=props.rating; i<5; i++){
        ratingString.push(<span key={"Star_" + i} className="rating--empty">&#9733;</span>);
    }

  return (
        <div className="rating">
            {ratingString}  
        </div>
  )
}
