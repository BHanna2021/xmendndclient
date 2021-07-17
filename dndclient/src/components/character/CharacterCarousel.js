import React from 'react';
import './App.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // ???

function CharacterCarousel() {
    return (
        <div className="carousel=wrapper">
            <Carousel>
                <div>
                    <img src="dndclient\xmendndclient\dndclient\public\assets\Image1.jpg" alt="" />
                </div>
                <div>
                    <img src="dndclient\xmendndclient\dndclient\public\assets\Image2.jpg" alt="" />
                </div>
                <div>
                    <img src="dndclient\xmendndclient\dndclient\public\assets\Image3.jpg" alt="" />
                </div>
            </Carousel>
        </div>
    );
}

export default CharacterCarousel;