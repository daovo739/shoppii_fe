import React, { useState, useEffect } from 'react'
import { SliderData } from './SliderData'
import { ArrowBack, ArrowForward } from '@mui/icons-material/'
import './index.css'
const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const slideLength = SliderData.length

    const autoScroll = true
    let slideInterval
    let intervalTime = 5000

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1)
        console.log('next')
    }

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1)
        console.log('prev')
    }

    function auto() {
        slideInterval = setInterval(nextSlide, intervalTime)
    }

    useEffect(() => {
        setCurrentSlide(0)
    }, [])

    useEffect(() => {
        if (autoScroll) {
            auto()
        }
        return () => clearInterval(slideInterval)
    }, [currentSlide])
    console.log(currentSlide)
    return (
        <div className="slider">
            <ArrowBack className="left-arrow" onClick={prevSlide} />
            <ArrowForward className="right-arrow " onClick={nextSlide} />
            {SliderData.map((slide, index) => {
                return (
                    <div
                        className={
                            index === currentSlide ? 'slide active' : 'slide'
                        }
                        key={index}
                    >
                        {index === currentSlide && (
                            <img
                                src={slide.image}
                                alt="rick and moldy"
                                className="image"
                            />
                        )}
                    </div>
                )
            })}
        </div>
    )
}
export default Carousel
