import React from "react";
import {
  IoLocationOutline,
  IoShieldCheckmarkOutline,
  IoCogOutline,
  IoNewspaperOutline,
} from "react-icons/io5";

const Policy = () => {
  const items = [
    {
      icon: <IoLocationOutline className="w-10 h-10 text-gray-600" />,
      title: "RETAILERS",
      desc: "FAIRWHALE’s authorized retail and service partners",
    },
    {
      icon: <IoShieldCheckmarkOutline className="w-10 h-10 text-gray-600" />,
      title: "WARRANTY",
      desc: "International warranty information",
    },
    {
      icon: <IoCogOutline className="w-10 h-10 text-gray-600" />,
      title: "MANUFACTURE CALIBRE",
      desc: "Proven robustness, premier performance and precision",
    },
    {
      icon: <IoNewspaperOutline className="w-10 h-10 text-gray-600" />,
      title: "ARTICLES",
      desc: "FAIRWHALE’s latest news",
      link: "Learn More >",
    },
  ];

  return (
    <div className="w-full py-10 flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-[90%] px-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="p-3 bg-white border border-gray-200 rounded-xl shadow-sm 
            hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          >
            <div className="mb-3">{item.icon}</div>

            <h2 className="font-bold text-lg tracking-wide mb-1">
              {item.title}
            </h2>

            <p className="text-sm text-gray-600 mb-1">{item.desc}</p>

            {item.link && (
              <p className="text-sm mt-2 text-black font-medium hover:underline">
                {item.link}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Policy;
