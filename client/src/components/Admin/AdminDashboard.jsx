import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LayoutDashboard, Clock, Watch, Star } from "lucide-react";

const AdminDashboard = () => {
  const menuItems = [
    {
      label: "Hero Section",
      path: "/herosection",
      icon: <LayoutDashboard size={28} />,
    },
    {
      label: "Add Men's Watches",
      path: "/herowatches",
      icon: <Watch size={28} />,
    },
    {
      label: "Add Women's Watches",
      path: "/herowomenwatches",
      icon: <Clock size={28} />,
    },
    {
      label: "Add Reviews",
      path: "/addreview",
      icon: <Star size={28} />,
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col items-center px-6 py-12">
      
      {/* Title */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-white mb-12 tracking-wide"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Admin Dashboard
      </motion.h1>

      {/* Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {menuItems.map((item, index) => (
          <motion.div
            key={index}
            className="backdrop-blur-xl bg-white/10 border border-white/20 
              rounded-2xl p-8 shadow-xl flex flex-col items-center cursor-pointer
              hover:bg-white/20 transition-all duration-300 hover:scale-105"
            whileHover={{ y: -5 }}
          >
            <div className="text-blue-400 mb-4">{item.icon}</div>

            <h2 className="text-white text-lg font-semibold mb-3 text-center">
              {item.label}
            </h2>

            <Link
              to={item.path}
              className="px-5 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
            >
              Open
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AdminDashboard;
