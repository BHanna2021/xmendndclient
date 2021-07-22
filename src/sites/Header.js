import React from 'react';

const ScrollingBanner = () => {
    
    return (
        <div id="BannerContainer">
            {/* Each image is 350px by 233px */}
            <div className="PhotoBanner">
                <img className="FirstPhoto" id="BannerPhotos" src="./assets/DMToken.png" alt="" />
                <img id="BannerPhotos" src="./assets/BarbarianToken.png" alt="" />
                <img id="BannerPhotos" src="./assets/BardToken.png" alt="" />
                <img id="BannerPhotos" src="./assets/ClericToken.png" alt="" />
                <img id="BannerPhotos" src="./assets/DruidToken.png" alt="" />
                <img id="BannerPhotos" src="./assets/FighterToken.png" alt="" />
                <img id="BannerPhotos" src="./assets/MonkToken.png" alt="" />
                <img id="BannerPhotos" src="./assets/PaladinToken.png" alt="" />
                <img id="BannerPhotos" src="./assets/RangerToken.png" alt="" />
                <img id="BannerPhotos" src="./assets/RogueToken.png" alt="" />
                <img id="BannerPhotos" src="./assets/SorcerorToken.png" alt="" />
                <img id="BannerPhotos" src="./assets/WarlockToken.png" alt="" />
                <img id="BannerPhotos" src="./assets/WizardToken.png" alt="" />
            </div>
        </div>
    );
}

export default ScrollingBanner;