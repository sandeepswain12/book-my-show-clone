import React, { useState, useEffect } from "react";
import HeroSlider from "react-slick";
import axios from "axios";

import { NextArrow, PrevArrow } from "./Arrows.component";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCorousel = () => {

  // const [images, setImages] = useState([]);

  // useEffect(() => {
  //   const requestNowPlayingMovies = async () => {
  //     const getImages = await axios.get("/movie/now_playing");
  //     setImages(getImages.data.results);
  //   };
  //   requestNowPlayingMovies();
  // }, []);



  const settingsLg = {
    arrows: true,
    autoplay: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "300px",
    infinite: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  }

  const settings = {
    arrows: true,
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };


  const images = [
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1685616248053_motogpweb.jpg",
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1686055294202_magicmikedesktop.jpg",
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1682617779318_webbannernpa.jpg",
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1685964734910_summeractiviesdesktop.avif",
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1680083241797_rewardsweb.jpg"
  ]

  return (
    <>
      <div className="lg:hidden">
        <HeroSlider {...settings}>
          {
            images.map((image) => (
              <div className="w-full h-48 md:h-80 py-3">
                <img src={image} alt="testing" className="w-full h-full rounded-md" />
              </div>
            ))
          }
        </HeroSlider>
      </div>

      <div className="hidden lg:block">
        <HeroSlider {...settingsLg}>
          {
            images.map((image) => (
              <div className="w-full h-96 px-2 py-3">
                <img src={image} alt="testing" className="w-full h-full rounded-md" />
              </div>
            ))
          }
        </HeroSlider>
      </div>
    </>
  );
}

export default HeroCorousel;