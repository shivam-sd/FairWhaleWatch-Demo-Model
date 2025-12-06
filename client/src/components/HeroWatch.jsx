import React from "react";

const HeroWatch = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 px-4 py-10">

      {/* Men's Watch Card */}
      <div className="relative group cursor-pointer overflow-hidden rounded-2xl">

        <img
          src="mens_watches.webp"
          alt="Men's Watches"
          className="
            w-full 
            h-[45vh] 
            sm:h-[50vh] 
            md:h-[60vh] 
            lg:h-[70vh] 
            object-cover 
            duration-500 
            group-hover:scale-105
          "
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80"></div>

        {/* Text Label */}
        <p
          className="
            absolute bottom-6 
            left-1/2 -translate-x-1/2
            text-white 
            text-xl sm:text-2xl md:text-3xl font-semibold
            tracking-wide drop-shadow-xl
            border-b-2 border-transparent 
            group-hover:border-white 
            duration-300
          "
        >
          Men's Watches
        </p>
      </div>

      {/* Women's Watch Card */}
      <div className="relative group cursor-pointer overflow-hidden rounded-2xl">

        <img
          src="womens_watches.webp"
          alt="Women's Watches"
          className="
            w-full 
            h-[45vh] 
            sm:h-[50vh] 
            md:h-[60vh] 
            lg:h-[70vh] 
            object-cover 
            duration-500 
            group-hover:scale-105
          "
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80"></div>

        {/* Text Label */}
        <p
          className="
            absolute bottom-6 
            left-1/2 -translate-x-1/2
            text-white 
            text-32 sm:text-2xl md:text-3xl font-semibold
            tracking-wide drop-shadow-xl
            border-b-2 border-transparent 
            group-hover:border-white 
            duration-300
          "
        >
          Women's Watches
        </p>
      </div>

    </div>
  );
};

export default HeroWatch;
