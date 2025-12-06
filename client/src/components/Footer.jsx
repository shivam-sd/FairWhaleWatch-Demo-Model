import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { IoEarthOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-gray-300 py-14 px-5 md:px-14 lg:px-20">

      {/* TOP GRID SECTION */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* LOGO + TEXT */}
        <div className="space-y-4">
          <img src="/logo.png" alt="FAIRWHALE" className="w-36 md:w-40" />
          <p className="text-sm leading-6 text-gray-400">
            We're more than just a watch brand; we're artisans of time.
            Our commitment to precision and design has made us a name
            synonymous with elegance and sophistication.
          </p>
        </div>

        {/* MAIN MENU */}
        <div className="space-y-3">
          <h3 className="text-xs tracking-widest text-gray-400">MAIN MENU</h3>

          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Best Sellers</li>
            <li className="hover:text-white cursor-pointer">Men’s Watches</li>
            <li className="hover:text-white cursor-pointer">Women’s Watches</li>
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Support</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
          </ul>
        </div>

        {/* INFORMATION LINKS */}
        <div className="space-y-3">
          <h3 className="text-xs tracking-widest text-gray-400">INFORMATION</h3>

          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Refund & Return Policy</li>
            <li className="hover:text-white cursor-pointer">Shipping Policy</li>
            <li className="hover:text-white cursor-pointer">Terms of Service</li>
            <li className="hover:text-white cursor-pointer">Payment Policy</li>
          </ul>
        </div>

        {/* CONTACT SECTION */}
        <div className="space-y-4">
          <h3 className="text-xs tracking-widest text-gray-400">CONTACT US</h3>

          <p className="text-sm text-gray-400 leading-6">
            Don’t hesitate to get in touch  
            and send us a message at:
          </p>

          <p className="text-white text-sm font-medium">
            support@fairwhalewatch.com
          </p>

          <p className="text-sm text-gray-400 leading-6">
            111B S Governors Ave STE  
            28154 Dover
          </p>

          <p className="text-sm text-gray-400">+1 (315) 503-3961</p>

          <p className="text-sm text-gray-400">
            MONDAY - FRIDAY: 08:00 - 06:00pm
          </p>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="w-full border-t border-gray-800 my-10"></div>

      {/* BOTTOM GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* EXCLUSIVE BENEFITS */}
        <div className="w-full">
          <h3 className="text-xs tracking-widest text-gray-400 mb-3">
            EXCLUSIVE BENEFITS
          </h3>

          <div className="flex items-center border-b border-gray-700 pb-2">
            <input
              type="email"
              placeholder="Enter email here"
              className="w-full bg-transparent outline-none text-sm text-gray-200 placeholder-gray-500"
            />
            <FiArrowRight className="text-gray-300 text-xl cursor-pointer hover:text-white" />
          </div>

          <p className="text-sm text-gray-500 mt-4 leading-6 max-w-md">
            Join our free insider list and be the first to unlock exclusive deals, 
            VIP news, and special offers — straight to your inbox.
          </p>
        </div>

        {/* PAYMENT LOGOS */}
        <div className="flex items-center justify-center lg:justify-end gap-3 flex-wrap">
          <img src="https://d3lzcn6mbbadaf.cloudfront.net/media/details/ANI-20251112052651.jpg" className="h-6" />
          <img src="https://www.investopedia.com/thmb/F8CKM3YkF1fmnRCU2g4knuK0eDY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MClogo-c823e495c5cf455c89ddfb0e17fc7978.jpg" className="h-6" />
          <img src="https://media.licdn.com/dms/image/v2/D560BAQGlX0cKdGRk-w/company-logo_200_200/company-logo_200_200/0/1725506319701" className="h-6" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Apple_Pay_logo.svg" className="h-6" />
          <img src="https://play-lh.googleusercontent.com/HArtbyi53u0jnqhnnxkQnMx9dHOERNcprZyKnInd2nrfM7Wd9ivMNTiz7IJP6-mSpwk" className="h-6" />
          <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/shop-pay-icon-svg-download-png-10312151.png" className="h-6" />
          <img src="https://play-lh.googleusercontent.com/_b9kPmQ67GW0mCTmXhRRQYH9gYGVNoHuLPVZ0Ph0q5rj2Wjr2OycPNg9X771TasPSgA" className="h-6" />
        </div>
      </div>

      {/* COPYRIGHT SECTION */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-12 text-sm text-gray-500 gap-4">
        <p>© 2025, Fairwhalewatches. All rights reserved.</p>

        <div className="flex items-center gap-2 cursor-pointer text-gray-400 hover:text-white">
          <IoEarthOutline />
          <span>English</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
