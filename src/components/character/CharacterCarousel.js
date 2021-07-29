import React from 'react';

const CharacterCarousel = () => {
    return (
        <div id="carousel">
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="./assets/Carouselbackground3.jpg" class="d-block w-100" alt="..."></img>
                        <div class="carousel-caption d-none d-md-block">
                            <h3>Creating Your Character</h3>
                            <hr />
                            <h5>Select Your Race and Class</h5>
                            <p>Dwarves, elves, halflings and humans are the most common character races. Special traits and senses are granted to your character based on the race you choose.</p>
                            <p>Your class is your character's vocation.  Your character is granted special talents based on the class you choose.</p>
                        </div>
                    </div>
<<<<<<< HEAD
                    <div class="carousel-item">
                        <img src="Carouselbackground2.jpg" class="d-block w-100" alt="..."></img>
                            <div class="carousel-caption d-none d-md-block">
                                <h3>Determine Your Abilities</h3>
                                <hr/>
                                <p>Your character's potential relies on ability scores.</p>
                                <p>Strength measures physical power. Dexterity measures agility. Constitution measures endurance. Intelligence measures reasoning and memory. Wisdom measures perception and insight. Charisma measures the force of your personality.</p>
                            </div>
=======
                    <div class="carousel-item active">
                        <img src="./assets/Carouselbackground2.jpg" class="d-block w-100" alt="..."></img>
                        <div class="carousel-caption d-none d-md-block">
                            <h3>Determine Your Abilities</h3>
                            <hr />
                            <p>Your character's potential relies on ability scores.</p>
                            <p>Strength measures physical power. Dexterity measures agility. Constitution measures endurance. Intelligence measures reasoning and memory. Wisdom measures perception and insight. Charisma measures the force of your personality.</p>
                        </div>
>>>>>>> 3571dcd18a66dfb5c92f9e7cd2ec7ef880e1b79d
                    </div>
                    <div class="carousel-item">
                        <img src="./assets/Carouselbackground1.jpg" class="d-block w-100" alt="..."></img>
                        <div class="carousel-caption d-none d-md-block">
                            <h3>Create a Background for Your Character</h3>
                            <hr />
                            <p>Your character's backstory and personality affects the decisions your character makes during gameplay.</p>
                            <p>Most importantly your character needs a name!</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="./assets/Carouselbackground4.jpg" class="d-block w-100" alt="..."></img>
                        <div class="carousel-caption d-none d-md-block">
                            <h3>Equip Your Character</h3>
                            <hr />
                            <p>Your starting equipment is determined by your character's class and background.</p>
                            <p>This includes your Armor Class and the weapons that your character wields.</p>
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