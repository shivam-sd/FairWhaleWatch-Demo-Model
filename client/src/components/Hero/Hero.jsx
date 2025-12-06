import React, { useEffect, useState } from 'react';
import axios from "axios";

const Hero = () => {
  const [Data, setData] = useState(null);

  // Fetch details
  useEffect(() => {
    const getDetails = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BASE_URI}admin/herosection/details`
        );

        const d = res.data.details[0]; 
        setData(d);

      } catch (err) {
        console.log("Error fetching details:", err);
      }
    };

    getDetails();
  }, []);

  const link = () => {
    window.location.href =
      "https://www.fairwhalewatch.com/collections/men-s-watches";
  };

  return (
    <div
      className="flex items-center justify-center bg-cover bg-center flex-col bg-no-repeat 
      lg:py-20 md:py-10 py-4 cursor-pointer"
      onClick={link}
      style={{ backgroundImage: "url('herobg.avif')" }}
    >
      {/* 15% OFF Image */}
      <div className="absolute lg:right-[29.6vw] md:right-[29.6vw] right-[7vw] lg:top-46 md:top-40 top-50">
        <img src="15off.png" alt="offer" className="lg:w-36 md:w-36 w-26" />
      </div>

      <div
        className="w-full h-full grid lg:grid-cols-3 md:grid-cols-3 
        lg:px-10 md:px-10 relative"
      >
        {/* First Watch (Left) */}
        <div className="first lg:flex hidden">
          <img src="herowatch1.png" alt="" />
        </div>

        {/* Center Content */}
        <div className="second w-full flex flex-col">
          <p className="lg:text-2xl md:text-2xl text-xl lg:text-left text-center font-Pacifico text-shadow-lg">
            {Data?.subheading}
          </p>

          <h1 className="lg:text-7xl md:text-6xl text-2xl font-bold 
            lg:text-left text-center font-DancingScript">
            {Data?.heading}
          </h1>

          <p className="lg:mt-7 md:mt-7 mt-1 lg:text-3xl md:text-3xl text-xl 
            lg:text-left text-center font-bold flex items-center justify-center lg:justify-start gap-2">
            Use Code:
            <span className="text-red-500 font-extrabold text-shadow-lg 
              lg:text-5xl md:text-5xl text-4xl">
              {Data?.usecode}
            </span>
          </p>
        </div>

        {/* Mobile Watches */}
        <div className="mt-10 z-10 flex lg:hidden">
          <img src="heromulwatch.png" alt="" className="w-90" />
        </div>

        {/* Right Watch */}
        <div className="third z-10 lg:flex hidden">
          <img src="herowatch2.png" alt="" />
        </div>
      </div>

      <button
        onClick={link}
        className="lg:p-4 md:p-3 p-1 lg:px-14 md:px-8 px-5 bg-white text-black 
        font-bold text-lg rounded-full cursor-pointer lg:mt-0 mt-4"
      >
        SHOP Now!
      </button>
    </div>
  );
};

export default Hero;
