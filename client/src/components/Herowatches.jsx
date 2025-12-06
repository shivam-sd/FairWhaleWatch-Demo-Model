import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Herowatches.css";

const Herowatches = () => {
  const [watches, setWatches] = useState([]);

  useEffect(() => {
    fetchWatches();
  }, []);

  const fetchWatches = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URI}admin/herosection/getwatches`
      );
      console.log(res)
      setWatches(res.data.allWatches); 
    } catch (error) {
      console.log("Error fetching watches:", error);
    }
  };

  const loopData = [...watches, ...watches, ...watches];

  return (
    <div className="w-full py-10 overflow-hidden">
      <h2 className="text-center lg:text-4xl md:text-3xl text-xl font-bold mb-8">
        ELEVATE YOUR STYLE WITH ELEGANT WATCHES
      </h2>

      <div className="scroll-container">
        <div className="scroll-content">
          {loopData.map((item, index) => (
            <div
              key={index}
              className="card group relative rounded-xl overflow-hidden shadow-lg bg-white"
            >
              {/* IMAGE AREA */}
              <div className="relative w-full h-72 cursor-pointer">
                <img
                  src={item.image}
                  className="w-full h-full object-cover duration-300"
                />

                <img
                  src={item.hoverimage}
                  className="w-full h-full object-cover absolute top-0 left-0 opacity-0 group-hover:opacity-100 duration-300"
                />
              </div>

              {/* DETAILS */}
              <div className="p-4 text-center">
                <p className="font-semibold text-[15px] leading-tight">
                  {item.description}
                </p>

                <div className="mt-2">
                  <span className="line-through text-gray-500 text-sm">
                    Rs.{item.highprice}
                  </span>

                  <span className="ml-2 text-red-500 font-bold text-lg">
                    Rs.{item.lowprice}
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

export default Herowatches;
































// import React from "react";
// import "./Herowatches.css";

// const Herowatches = () => {
//   const watches = [
//     {
//       image: "Fairwhale-VYNTRO-Black-Edition.webp",
//       hoverimg: "Fairwhale-VYNTRO-Lifestyle.webp",
//       dec: "Mark Fairwhale FW-6004 VYNTRO – Men’s Skeleton Tourbillon Automatic Watch",
//       firstPrice: "Rs.74,800.00",
//       price: "Rs.31,700.00",
//     },
//     {
//       image: "Mark_Fairwhale_AETERNUS_Green_Edition.webp",
//       hoverimg: "Mark_Fairwhale_AETERNUS_Lifestyle_Shot.webp",
//       dec: "Mark Fairwhale FW-6004 VYNTRO – Men’s Skeleton Tourbillon Automatic Watch",
//       firstPrice: "Rs.74,800.00",
//       price: "Rs.31,700.00",
//     },
//     {
//       image: "Mark_Fairwhale_CARBONIX_Titanium_Frost_Gunmetal.webp",
//       hoverimg: "Mark_Fairwhale_CARBONIX_Obsidian_Core_Black.webp",
//       dec: "Mark Fairwhale FW-6004 VYNTRO – Men’s Skeleton Tourbillon Automatic Watch",
//       firstPrice: "Rs.74,800.00",
//       price: "Rs.31,700.00",
//     },
//     {
//       image: "Mark_Fairwhale_Tonneau_Mille_FW-6650_men_s_luxury_skeleton_watch.webp",
//       hoverimg: "Mark_Fairwhale_CARBONIX_Obsidian_Core_Black.webp",
//       dec: "Mark Fairwhale FW-6004 VYNTRO – Men’s Skeleton Tourbillon Automatic Watch",
//       firstPrice: "Rs.74,800.00",
//       price: "Rs.31,700.00",
//     },
//   ];

//   // duplicate array for infinite scrolling
//   const loopData = [...watches, ...watches, ...watches];

//   return (
//     <div className="w-full py-10 overflow-hidden">
//       <h2 className="text-center lg:text-4xl md:text-3xl text-xl font-bold mb-8">
//        ELEVATE YOUR STYLE WITH ELEGANT WATCHES
//       </h2>

//       <div className="scroll-container">
//         <div className="scroll-content">
//           {loopData.map((item, index) => (
//             <div
//               key={index}
//               className="card group relative rounded-xl overflow-hidden shadow-lg bg-white"
//             >
              
//               <div className="relative w-full h-72 cursor-pointer">
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

// export default Herowatches;
