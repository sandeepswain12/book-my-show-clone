import React from "react";
import EntertainmentCardSlider from "../Entertainment/Entertainment.component";
import Premier from "../Premier/premier.component";
import PostSlider from "../PosterSlider/PosterSlider.component";
import premierData from "../../config/TempPosters.config";

const HomePage = () => {
    return (
        <>
            <div className="flex flex-col gap-10">
            <div className="container mx-auto px-4">
                <PostSlider images={premierData} title="Recommended Movies" subtitle="Brand New Releases Every Friday" isDark={false} />
            </div>

                <div className="container mx-auto px-4">
                    <h1 className="text-2xl font-bold text-gray-800">
                        The Best of Live Events
                    </h1>
                    <br />
                    <EntertainmentCardSlider />
                </div>

                <div className="bg-sandeep-700 py-16">
                    <div className="container mx-auto px-4">
                        <div className="flex">
                            <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                                alt="Rupay"
                                className="w-full h-full"
                            />
                        </div>
                        <PostSlider images={premierData} title="Premiers" subtitle="Brand New Releases Every Friday" isDark />
                    </div>
                </div>
            </div>
            <br />
            <div className="container mx-auto px-4">
                <PostSlider images={premierData} title="Events Happenings Near You" subtitle="Brand New Releases Every Friday" isDark={false} />
            </div>
            <br />
            <div className="container mx-auto px-4">
                <PostSlider images={premierData} title="Online Streaming Events" subtitle="Brand New Releases Every Friday" isDark={false} />
            </div>
            <br />
            <div className="container mx-auto px-4">
                <PostSlider images={premierData} title="Outdoor Events" subtitle="Brand New Releases Every Friday" isDark={false} />
            </div>
            <br />
        </>
    )
}

export default HomePage;