import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './MainCarouselData';
import './MainCarousel.css'; // Import your CSS file

const MainCarousel = () => {
    const items = mainCarouselData.map((item, index) => (
        <div key={index} className="carousel-item"> {/* Added a wrapper div */}
            <img
                className="carousel-image" // Apply the CSS class
                role="presentation"
                src={item.image}
                alt={`Carousel Image ${index + 1}`} // Added descriptive alt text
            />
        </div>
    ));

    return (

        <div>
            <AliceCarousel
                items={items}
                disableButtonsControls
                autoPlay
                autoPlayInterval={1000}
                infinite
                disableDotsControls
            />
        </div>
    );
};

export default MainCarousel;