import React from "react";
import "./HeadSwipe.css";

const HeadSwipe = () => {
  return (
    <div className="inner-heading flex items-center justify-center sticky bg-cover bg-no-repeat"
    style={{backgroundImage: 'url(herobg.avif)'}}
    >
      <div className="text-wrapper w-full flex items-center justify-center">
        <div className="slide-box w-full text-center font-bold">
          <div className="w-full text-cente lg:text-lg: text-sm">
            Free Shipping On All Orders Stay Protected.
          </div>

          <div className="w-full text-center text-sm ">
            Only purchases made here are guaranteed authentic and supported.
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadSwipe;
