import React from "react";

import Nature from "../../assets/Videos/Nature.mov";

import Button from "../Helper/Button/Button";
import GeneralInput from "../Helper/Input/GeneralInput";


const HomePage = () => {
  return (
    <main className="relative overflow-hidden h-screen z-10">
      <video
        autoPlay
        loop
        muted
        className="absolute -z-50 w-auto min-w-full tablet:min-h-full max-w-none"
      >
        <source src={Nature} type="video/mp4"></source>
      </video>
      <div className="grid place-items-center relative z-20 top-1/4">
        <div className="flex gap-10 flex-col justify-center items-center">
            <div className="w-[85%] flex flex-col gap-7 justify-center items-center p-5 bg-[#98abb593] rounded-xl shadow-xl">
                <h2 className="text-5xl font-Montserrat text-white text-justify">Great Travel is just one click away, Start Now!!!</h2>
                <p className="w-4/5 text-lg text-gray-200 font-Poppins text-justify">
                Welcome to our travel haven, where wanderlust meets seamless
                exploration. Our travel website is your passport to a world of
                adventure, designed to inspire and guide you on unforgettable
                journeys. Discover enticing destinations, browse curated travel
                guides, and find exclusive deals on flights, hotels, and experiences.
                From pristine beaches to vibrant cityscapes, we provide a gateway to
                diverse cultures and breathtaking landscapes. Whether you're a
                spontaneous traveler or a meticulous planner, our platform is your
                trusted companion for crafting personalized and memorable travel
                experiences. Embark on a virtual voyage with us, where every click
                brings you one step closer to your next extraordinary adventure. Your
                journey begins here.
                </p>
            </div>
            <div className="w-4/5 bg-white p-2 rounded-md flex justify-evenly shadow-[1px_1px_3px_#cccccc] absolute z-50 -bottom-1/4">
                <GeneralInput type="date" placeholder="Date" /> <span className="text-2xl">|</span>
                <GeneralInput type="text" placeholder="City" /> <span className="text-2xl">|</span>
                <GeneralInput type="number" placeholder="Persons" /> <span className="text-2xl">|</span>
                <Button type="button" className="bg-green-500 rounded-md text-xl">Find Now 🔍</Button>
            </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
