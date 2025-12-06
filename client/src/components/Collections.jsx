import React from "react";

const Collections = () => {
  return (
    <div className="w-full py-12 flex flex-col items-center gap-6 px-4">

      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold tracking-wide text-center">
        COLLECTIONS
      </h1>

      {/* Description */}
      <p className="text-lg text-gray-700 max-w-3xl text-center leading-relaxed px-2">
        Our three collections – Independence, Adventure and Freedom – are 
        exclusively equipped with mechanical movements and original striking 
        design elements.
      </p>

      {/* Grid Section */}
      <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-6 place-items-center mt-4">

        {/* Image 1 */}
        <img
          src="collection1.png"
          alt="Collection 1"
          className="
            w-full max-w-xs
            rounded-xl shadow-md cursor-pointer
            transition-transform duration-300 hover:scale-105
          "
        />

        
        <img
          src="collection2.png"
          alt="Collection 2"
          className="
            w-full max-w-xs
            rounded-xl shadow-md cursor-pointer
            transition-transform duration-300 hover:scale-105
          "
        />

        
        
        <img
          src="collection3.png"
          alt="Collection 3"
          className="
            hidden 
            md:flex 
            w-full max-w-xs
            rounded-xl shadow-md cursor-pointer
            transition-transform duration-300 hover:scale-105
          "
        />
      </div>

      <div className="md:hidden flex justify-center w-full mt-4">
        <img
          src="collection3.png"
          alt="Collection 3"
          className="
            w-full max-w-xs
            rounded-xl shadow-md cursor-pointer
            transition-transform duration-300 hover:scale-105
          "
        />
      </div>

    </div>
  );
};

export default Collections;
