import React from "react";
import Navbar from "../components/Navbar/navbar.component";
import HeroCorousel from "../components/HeroCorousel/herocorousel.component";

const DefaultLayout = (props) => {
    return (
        <>
        <Navbar />
        <HeroCorousel />
        {props.children}
        </> 
    )
}

export default DefaultLayout;