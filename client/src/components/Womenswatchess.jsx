import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Herowatches.css";

const Womenswatchess = () => {
  const [watches, setWatches] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch watches from backend
  useEffect(() => {
    const fetchWatches = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BASE_URI}admin/herowomensection/getwatches`
        );
        setWatches(res.data.allWatches || []);
      } catch (err) {
        console.log("Error fetching watches:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchWatches();
  }, []);

  // Infinite loop data
  const loopData = [...watches, ...watches, ...watches];

  if (loading) {
    return (
      <div className="w-full py-20 text-center text-xl font-semibold">
        Loading Women Watches...
      </div>
    );
  }

  return (
    <div className="w-full py-10 overflow-hidden">
      <h2 className="text-center text-4xl font-bold mb-8 lg:text-4xl md:text-3xl text-xl">
        ELEVATE YOUR STYLE WITH ELEGANT WATCHES
      </h2>

      <div className="scroll-container">
        <div className="scroll-content">
          {loopData.map((item, index) => (
            <div
              key={index}
              className="card group relative rounded-xl overflow-hidden shadow-lg bg-white"
            >
              {/* Image */}
              <div className="relative w-full h-72 cursor-pointer">
                <img
                  src={item.image}
                  className="w-full h-full object-cover duration-300"
                  alt="watch"
                />

                <img
                  src={item.hoverimage}
                  className="w-full h-full object-cover absolute top-0 left-0 opacity-0 group-hover:opacity-100 duration-300"
                  alt="hover watch"
                />
              </div>

              {/* DETAILS */}
              <div className="p-4 text-center">
                <p className="font-semibold text-[15px] leading-tight">
                  {item.description}
                </p>

                <div className="mt-2">
                  <span className="line-through text-gray-500 text-sm">
                    ₹{item.highprice}
                  </span>
                  <span className="ml-2 text-red-500 font-bold text-lg">
                    ₹{item.lowprice}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Womenswatchess;





























// import React from "react";
// import "./Herowatches.css";

// const Womenswatchess = () => {
//   const watches = [
//     {
//       image: "./womens/Mark_Fairwhale_3560_DIAMORA_women_s_watch_showing_its_360_rotating (1).webp",
//       hoverimg: "./womens/Mark_Fairwhale_3560_DIAMORA_women_s_watch_showing_its_360_rotating.webp",
//       dec: "Mark Fairwhale FW-6004 VYNTRO – Men’s Skeleton Tourbillon Automatic Watch",
//       firstPrice: "Rs.74,800.00",
//       price: "Rs.31,700.00",
//     },
//     {
//       image: "./womens/Mark_Fairwhale_3590_VIVENA_women_s_retro_watch_with_white_silicone_strap.webp",
//       hoverimg: "./womens/Mark_Fairwhale_3590_VIVENA_women_s_retro_watch_with_white_silicone_-strap.webp",
//       dec: "Mark Fairwhale FW-6004 VYNTRO – Men’s Skeleton Tourbillon Automatic Watch",
//       firstPrice: "Rs.74,800.00",
//       price: "Rs.31,700.00",
//     },
//     {
//       image: "./womens/Mark_Fairwhale_3770_ASTREA_women_s_luxury_tonneau_watch.webp",
//       hoverimg: "./womens/Mark_Fairwhale_3770_ASTREA_women_s-_luxury_tonneau_watch.webp",
//       dec: "Mark Fairwhale FW-6004 VYNTRO – Men’s Skeleton Tourbillon Automatic Watch",
//       firstPrice: "Rs.74,800.00",
//       price: "Rs.31,700.00",
//     },
  
//   ];

//   // duplicate array for infinite scrolling
//   const loopData = [...watches, ...watches, ...watches];

//   return (
//     <div className="w-full py-10 overflow-hidden">
//       <h2 className="text-center text-4xl font-bold mb-8 lg:text-4xl md:text-3xl text-xl">
//        ELEVATE YOUR STYLE WITH ELEGANT WATCHES
//       </h2>

//       <div className="scroll-container">
//         <div className="scroll-content">
//           {loopData.map((item, index) => (
//             <div
//               key={index}
//               className="card group relative rounded-xl overflow-hidden shadow-lg bg-white"
//             >
            
//               <div className="relative w-full h-72 cursor-pointer ">
//                 <img
//                   src={item.image}
//                   className="w-full h-full object-cover duration-300"
//                 />

               
//                 <img
//                   src={item.hoverimg}
//                   className="w-full h-full object-cover absolute top-0 left-0 opacity-0 group-hover:opacity-100 duration-300"
//                 />
//               </div>

//               {/* DETAILS */}
//               <div className="p-4 text-center">
//                 <p className="font-semibold text-[15px] leading-tight">
//                   {item.dec}
//                 </p>

//                 <div className="mt-2">
//                   <span className="line-through text-gray-500 text-sm">
//                     {item.firstPrice}
//                   </span>
//                   <span className="ml-2 text-red-500 font-bold text-lg">
//                     {item.price}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//     </div>
//   );
// };

// export default Womenswatchess;
