import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const VideoCrousal = () => {
  const videos = ["v1.mp4", "v2.mp4", "v3.mp4", "v4.mp4", "v1.mp4", "v2.mp4"];

  return (
    <div className="w-full py-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 1 },   
          640: { slidesPerView: 2 },   
          1024: { slidesPerView: 3 },  
          1280: { slidesPerView: 4 },  
        }}
        className="w-full max-w-7xl mx-auto rounded-xl shadow-lg"
      >
        {videos.map((video, index) => (
          <SwiperSlide key={index} >
            <video
              className="w-full h-100 object-cover rounded-lg"
              src={video}
              autoPlay
              loop
              muted
              playsInline
            ></video>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default VideoCrousal;
