import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { SliderData } from './SliderData'
function ControlledCarousel() {
    const [index, setIndex] = useState(0)

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex)
    }

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {SliderData.map((slide, index) => {
                return (
                    <Carousel.Item key={index}>
                        <img
                            className="d-block w-100"
                            src={slide.image}
                            alt="Carousel"
                        />
                    </Carousel.Item>
                )
            })}
        </Carousel>
    )
}

export default ControlledCarousel
