import React from "react";

export const NextArrow = (props) => {
    return (
        <>
        <div
        className={props.className}
        style={{...props.style , backgroundColor:"black",right: "-15px"}}
        onClick={props.onClick}
        />
        </>
    )
}

export const PrevArrow = (props) => {
    return (
        <>
        <div
        className={props.className}
        style={{...props.style , backgroundColor:"black",left: "-15px"}}
        onClick={props.onClick}
        />
        </>
    )
}