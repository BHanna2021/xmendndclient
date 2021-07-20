import React from 'react';
// import './App.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // ???

const CharacterCarousel = (props) => {
    const carouselMapper = () => {
        return props.characters.map((character, index) => {
            
        })
    }

    return (
        <div className="carousel=wrapper">
            <div className='character-carousel' id='carousel'>
            <Carousel>
                <div>
                    <img src="Image1.jpg" alt="" />
                </div>
                <div>
                    <img src="Image2.jpg" alt="" />
                </div>
                <div>
                    <img src="Image3.jpg" alt="" />
                </div>
            </Carousel>
            </div>
            
        </div>
    );
}

export default CharacterCarousel;