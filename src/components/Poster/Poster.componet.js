import React from "react";

const Poster = (props) => {
    return (
        <>
        <div className="flex flex-col items-start gap-2 px-2">
        <div className="w-84 h-80">
            <img src={props.src} alt={props.title} className="w-full h-full rounded-xl"/>
        </div>
        <div>
            <h3 className={`text-lg font-bold ${
                props.isDark ? "text-white" : "text-grey-700"
            }`}>{props.title}</h3>
            <p className={`text-sm font-bold ${
                props.isDark ? "text-white" : "text-grey-700"
            }`}>{props.subtitle}</p>
        </div>
        </div>
        </>
    )
}

export default Poster;