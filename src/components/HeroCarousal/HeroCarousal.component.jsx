import React from "react";
import HeroSlider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousal = () => {

    const settingsLG = {
        arrows: true,
        autoplay: true,
        centerMode: true,
        centerPadding ="300px",
        slideToshow: 1,
        infinite: true,
        slidesToScroll: 1,
    }

    const settings = {
        arrows: true,
        centerMode: true,
        centerPadding:"160px",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
       const images = ["https://images.unsplash.com/photo-1523274158540-2aa98c15ec26?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8cm5TS0RId3dZVWt8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                       "https://images.unsplash.com/photo-1523274158540-2aa98c15ec26?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8cm5TS0RId3dZVWt8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                        "https://images.unsplash.com/photo-1523274158540-2aa98c15ec26?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8cm5TS0RId3dZVWt8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                       "https://images.unsplash.com/photo-1523274158540-2aa98c15ec26?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8cm5TS0RId3dZVWt8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                        "https://images.unsplash.com/photo-1523274158540-2aa98c15ec26?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8cm5TS0RId3dZVWt8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",];
    return (
        <>
        <HeroSlider {...settings}>
          {images.map((image) => (
                  <div className="w-20 h-80">
                      <img src={image} alt="testing" className="w-full h-full"/>
                  </div>
              ))
          }
        </HeroSlider>
        </>
    );
};

export default HeroCarousal;