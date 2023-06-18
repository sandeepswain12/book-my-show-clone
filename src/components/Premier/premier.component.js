import React from "react";
import Slider from "react-slick";
import settings from "../../config/PosterCarousal.confg";
import premierData from "../../config/TempPosters.config";
import Poster from "../Poster/Poster.componet";

const Premier = () => {

    return(<>
    <div className="flex flex-col items-start py-4">
    <h3 className="text-white text-xl font-bold">Premiers</h3>
    <p className="text-white text-sm">Brand new release every Friday</p>
    </div>
    <Slider {...settings}>{
        premierData.map((data) => (
            <Poster {...data} isDark/>
        ))
    }</Slider>
    </>)
}

export default Premier