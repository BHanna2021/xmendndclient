import React from 'react';

const ScrollingBanner = () => {
    return (
        <div id="BannerContainer" style={{backgroundColor: "black"}}>
            <logo-slider>
                <div>
                    <img src="./assets/DMToken" alt="" />
                    <img src="./assets/BarbarianToken.png" alt="" />
                    <img src="./assets/BardToken.png" alt="" />
                    <img src="./assets/ClericToken.png" alt="" />
                    <img src="./assets/DruidToken.png" alt="" />
                    <img src="./assets/FighterToken.png" alt="" />
                    <img src="./assets/MonkToken.png" alt="" />
                    <img src="./assets/PaladinToken.png" alt="" />
                    <img src="./assets/RangerToken.png" alt="" />
                    <img src="./assets/RogueToken.png" alt="" />
                    <img src="./assets/SorcererToken.png" alt="" />
                    <img src="./assets/WarlockToken.png" alt="" />
                    <img src="./assets/WizardToken.png" alt="" />
                </div>
            </logo-slider>
        </div>
    );
}

export default ScrollingBanner;