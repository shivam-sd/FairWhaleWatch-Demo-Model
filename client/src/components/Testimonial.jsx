import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { FaStar, FaRegStar } from "react-icons/fa";
import { motion } from "framer-motion";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  // Fetch Reviews From Backend
  const getReviews = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_BASE_URI}admin/getreview`);
      const data = await res.json();

      if (data.data) {
        setReviews(data.data);
      }
    } catch (err) {
      console.log("Error fetching reviews:", err);
    }
  };

  useEffect(() => {
    getReviews();
  }, []);

  return (
    <motion.section
      className="
        w-full mx-auto 
        bg-gradient-to-r from-indigo-50 to-blue-50 
        py-10 md:py-16 
        px-4 md:px-10 lg:px-20 
        rounded-md shadow-lg cursor-pointer
      "
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >

      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          480: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        autoplay={{ delay: 3200, disableOnInteraction: false }}
        loop={true}
      >
        {reviews.length > 0 &&
          reviews.map((review, idx) => (
            <SwiperSlide key={idx}>
              <motion.div
                className="
                  w-full max-w-xs sm:max-w-sm md:max-w-md 
                  mx-auto bg-white 
                  rounded-3xl shadow-xl overflow-hidden
                "
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {/* TOP IMAGE */}
                <div className="bg-gray-500 p-6 flex flex-col items-center">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-white overflow-hidden">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="bg-white px-6 pt-4 pb-6 text-center">
                  <h3 className="text-lg md:text-xl font-bold text-gray-800">
                    {review.name}
                  </h3>

                  <div className="flex justify-center mt-2 mb-3 text-yellow-500 text-sm md:text-base">
                    {[...Array(5)].map((_, i) =>
                      i < review.rating ? (
                        <FaStar key={i} />
                      ) : (
                        <FaRegStar key={i} />
                      )
                    )}
                  </div>

                  <p className="text-gray-700 text-sm md:text-base mb-4 px-2">
                    {review.review}
                  </p>

                  <button
                    className="
                      bg-blue-600 text-white 
                      px-4 py-2 rounded-xl 
                      text-sm hover:bg-blue-700 transition
                    "
                  >
                    View More
                  </button>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
      </Swiper>
    </motion.section>
  );
};

export default Testimonial;
