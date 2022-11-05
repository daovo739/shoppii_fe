import { useState } from 'react'
import { Carousel } from 'react-bootstrap'
import { SliderData } from './SliderData'

function ControlledCarousel() {
    return (
        <Carousel controls={false}>
            {SliderData.map((slide, index) => {
                return (
                    <Carousel.Item key={index}>
                        <img
                            className="d-block w-100"
                            src={slide.image}
                            alt={index}
                        />
                    </Carousel.Item>
                )
            })}
        </Carousel>
    )
}

export default ControlledCarousel
