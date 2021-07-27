import React from 'react';
// import './App.css';
import { Carousel } from 'reactstrap';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // ???

const CharacterCarousel = () => {
    return (
        <div id="carousel">
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"  aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"  aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="Carouselbackground1.jpg" class="d-block w-100" alt="..."></img>
                        <div class="carousel-caption d-none d-md-block">
                            <h3>Creating Your Character</h3>
                            <hr/>
                            <h5>Select Your Race and Class</h5>
                            <p>Dwarves, elves, halflings and humans are the most common character races. Special traits and senses are granted to your character based on the race you choose.</p>
                            <p>Your class is your character's vocation.  Your character is granted special talents based on the class you choose.</p>
                        </div>
            </div>
                    <div class="carousel-item ">
                        <img src="Carouselbackground2.jpg" class="d-block w-100" alt="..."></img>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
            </div>
                        <div class="carousel-item">
                            <img src="Carouselbackground3.jpg" class="d-block w-100" alt="..."></img>
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>Third slide label</h5>
                                    <p>Some representative placeholder content for the third slide.</p>
                                </div>
            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
        </div>

                    )
}

export default CharacterCarousel;