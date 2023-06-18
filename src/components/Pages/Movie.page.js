import React from "react";
import MovieHero from "../MoiveHero/MoiveHero.component";
import { BiCameraMovie } from "react-icons/bi";

const launchRazorPay = () => {
    let options = {
      key: "rzp_test_yqhPoXwuu3vDDO",
      amount: 500*100,
      currency: "INR",
      name: "Book My Show Clone",
      description: "Movie Purchase on Rental",
      image: "https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png",
      handler: () => {
        alert("Payment Done")
      },
      theme: {color: "#c4242d"}
    };
    let rzp = new window.Razorpay(options);
    rzp.open();
  };

const MoivePage = () => {
    return (<>
        <MovieHero />
        <div className="my-12 container px-4 lg:w-1/2 lg:ml-64">
            <div className="flex flex-col items-start gap-3">
                <h2 className="text-gray-800 font-bold text-2xl">About the movie</h2>
                <p>Kapil and Somya are a happily married couple from Indore who live in a joint family and decide to get a divorce one fine day. Things don`t go as planned as their family gets to know of it, and thus begins a comedy of errors.</p>
            </div>
            <div className="my-8">
                <hr />
            </div>
            <div className="flex flex-col items-start gap-3">
                <h1 className="text-gray-800 font-bold text-2xl">Applicable Offers</h1>
                <div className="flex items-start gap-2 bg-yellow-100 border-yellow-400 border-dashed border-2 rounded-md p-3 w-80">
                    <div className="w-8 h-8">
                        <BiCameraMovie className="w-full h-full" />
                    </div>
                    <div className="flex flex-col items-start">
                        <h3 className="text-gray-900 text-lg">Filmy Pass</h3>
                        <p className="text-gray-600 text-sm">Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy Pass @Rs.99</p>
                    </div>
                </div>
            </div>

            <button onClick={launchRazorPay} class="mts-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-8 rounded my-4">
                Book tickets
            </button>

        </div>
    </>)
}

export default MoivePage;