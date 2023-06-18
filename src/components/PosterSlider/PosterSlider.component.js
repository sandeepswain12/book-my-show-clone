import React from "react";
import Slider from "react-slick";

//component
import Poster from "../Poster/Poster.componet";

//config
import settings from "../../config/PosterCarousal.confg";

//images

export const PostSlider = (props) => {
  return (
    <>
      <div className="flex flex-col items-start py-4">
        <h3 className={`text-xl font-bold ${props.isDark ? "text-white" : "text-gray-800"}`}>{props.title}</h3>
        <p className={`text-sm ${props.isDark ? "text-white" : "text-white"}`}>{props.subtitle}</p>
      </div>
      <Slider {...settings}>
        {props.images.map((image) => (
          <Poster {...image} isDark={props.isDark} />
        ))}
      </Slider>
    </>
  );
};

export default PostSlider;
