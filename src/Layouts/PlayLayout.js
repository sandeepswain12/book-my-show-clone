import React from "react";
import MovieNavbar from "../components/Navbar/movie.Navbar";
import HeroCorousel from "../components/HeroCorousel/herocorousel.component";

const PlayLayout = (props) => {
    return (
        <>
        <MovieNavbar />
        {props.children}
        </> 
    )
}

export default PlayLayout;