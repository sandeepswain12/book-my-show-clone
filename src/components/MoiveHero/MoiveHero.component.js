import React from "react";
import { AiTwotoneStar } from "react-icons/ai"
import {BiChevronRight} from "react-icons/bi"

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

const MovieHero = () => {
  return (
    <>
   <div className="md:hidden">
    <img
      src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/zara-hatke-zara-bachke-et00359644-1684145200.jpg"
      alt="poster"
     />
   </div>

   <div className="hidden md:block lg:hidden">
   <img
     src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/zara-hatke-zara-bachke-et00359644-1684145200.jpg"
     alt="poster"
    />
   </div>

   <div className="relative hidden lg:block" style={{height: "29rem"}}>

<div className="absolute h-full w-full z-10"
style={{ backgroundImage: "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)"}}
/>

<div className="absolute z-30 w-50% h-96 left-64 top-10 flex">
<div>
<img
src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/zara-hatke-zara-bachke-et00359644-1684145200.jpg"
alt="poster"
className="h-full w-full rounded-xl"
/>
</div>
<div className="px-6 text-white text-gray-900 py-2">
<h1 className="text-4xl font-bold">Zara Hatke Zara Bachke</h1>
<h3 className="flex text-2xl items-center gap-2 py-5"><AiTwotoneStar/>6.5/10 47.9K Votes <BiChevronRight /></h3>
<div className="h-20 bg-gray-800 flex justify-between rounded-xl">
  <div className="py-3 px-4">
    <h1 className="font-bold">Add your rating & review</h1>
    <p className="text-gray-300">Your rating matter</p>
  </div>
  <div>
  <button class="mts-4 bg-white hover: text-gray-800 font-bold py-2 px-4 rounded my-4 mx-4">
                Rate now
            </button>
  </div>
</div>
<div className="flex gap-4 my-4 items-center py-2">
  <div className="bg-gray-100 text-black w-8 h-8 ">
    <h1 className="px-1 py-1">2D</h1>
  </div>
  <div className="bg-gray-100 text-black w-12 h-8 ">
  <h1 className="px-1 py-1">Hindi</h1>
  </div>
  </div>
  <h1>2h 12m
•
Comedy
,
Drama
,
Romantic
•
UA
•
2 Jun, 2023</h1>
<button onClick={launchRazorPay} class="mts-4 bg-red-500 hover:bg-red-700 text-white font-bold py-4 px-10 rounded my-4">
                Book tickets
            </button>
</div>
</div>
    
   <img
     src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/zara-hatke-zara-bachke-et00359644-1684145200.jpg"
     alt="poster"
     className="w-full h-full"
    />
   </div>
    </>
  )
};

export default MovieHero;