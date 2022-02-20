import React, { useState , useEffect} from 'react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import '../styles/Carousel.css'

export default function Carousel({children}) {

    const [activeIndex, setActiveIndex] = useState(0)

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
          newIndex = React.Children.count(children) - 1;
        } else if (newIndex >= React.Children.count(children)) {
          newIndex = 0;
        }
    
        setActiveIndex(newIndex);
      };

    useEffect(() => {
        const interval = setInterval(() => {
            updateIndex(activeIndex + 1)
        }, 2500)

        return () => {
            if (interval) {
                clearInterval(interval)
            }
        }
    })

  return (
    <div className="carousel hero__container">
        <div className="carousel-inner" style={{transform: `translateX(-${activeIndex * 100}%)`}}>
            {React.Children.map(children, (child, index) => {
                return React.cloneElement(child, {width: "100%"})
            })}
        </div>
        <div className="carousel-indicators">
            <ArrowBackIosIcon className="carousel-indicators--prev" style={{ fontSize: 85 }} onClick={() => {
                updateIndex(activeIndex - 1)
            }} />
            <ArrowForwardIosIcon className="carousel-indicators--next" style={{ fontSize: 85 }}  onClick={() => {
                updateIndex(activeIndex + 1)
            }
            } />
        </div>
    </div>
  )
}

export const CarouselItem = ({ children, width}) => {
    return (
        <div className="carousel-item" style={{width: width}}>
            {children}
        </div>
    )
}