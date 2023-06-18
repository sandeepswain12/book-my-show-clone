import React from "react";
import MovieNavbar from "../components/Navbar/movie.Navbar";
import HeroCorousel from "../components/HeroCorousel/herocorousel.component";

const MovieLayout = (props) => {
    return (
        <>
        <MovieNavbar />
        {props.children}
        </> 
    )
}

export default MovieLayout;