import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaBars, FaFlagUsa, FaSearch, FaOpencart } from "react-icons/fa";

function Navbar() {
  return(


     <div className=" bg-white">
      {/* Header */}
      <header id="head" className="bg-[#131921] text-white relative z-50">
        {/* Top Navigation */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between px-3 sm:px-4 lg:px-6 py-2 sm:py-3 gap-3 lg:gap-0">
          {/* Left Section */}
          <div className="flex items-center justify-between lg:justify-start gap-3 lg:gap-6">
            {/* Amazon Logo */}
            <div className="flex items-center flex-shrink-0">
              <img src="src\assets\images\Amazon.png"/>
            </div>

            {/* Delivery Location */}
            <div className="hidden md:flex items-center gap-2 text-sm hover:border hover:border-white hover:border-opacity-50 p-1 rounded transition-all cursor-pointer">
              <CiLocationOn className="text-lg lg:text-xl flex-shrink-0" />
              <div className="min-w-0">
                <div className="text-xs text-gray-300 truncate">Delivering to Surat 394210</div>
                <div className="font-semibold text-xs lg:text-sm truncate">Update location</div>
              </div>
            </div>
            <button className="lg:hidden p-2 hover:border hover:border-white hover:border-opacity-50 rounded transition-all min-w-[44px] min-h-[44px] flex items-center justify-center">
              <FaBars className="text-lg" />
            </button>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-none lg:max-w-3xl xl:max-w-4xl lg:mx-6 xl:mx-8 order-3 lg:order-2">
            <div className="flex shadow-sm">
              <select className="bg-gray-200 text-black px-2 sm:px-0.5 py-2.5 sm:py-3 rounded-l border-r border-gray-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-orange-500">
                <option>All</option>
                <option>Books</option>
                <option>Electronics</option>
                <option>Fashion</option>
              </select>
              <input
                placeholder="Search Amazon.in"
                className="flex-1 rounded-none border-0 focus:ring-2 focus:ring-orange-500 text-black px-3 sm:px-4 py-2.5 sm:py-3 outline-none text-sm sm:text-base"
              />
              <button className="bg-[#febd69] hover:bg-[#f3a847] text-black rounded-r px-4 sm:px-5 py-2.5 sm:py-3 transition-colors min-w-[44px] flex items-center justify-center">
                <FaSearch className="text-sm sm:text-base" />
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3 sm:gap-4 lg:gap-6 order-2 lg:order-3">
            {/* Language */}
            <div className="hidden sm:flex items-center gap-1 text-xs lg:text-sm hover:border hover:border-white hover:border-opacity-50 p-1 rounded transition-all cursor-pointer">
              <FaFlagUsa className="flex-shrink-0" />
              <span>EN</span>
              <span className="text-xs">▼</span>
            </div>

            {/* Account */}
            <div className="text-xs lg:text-sm hover:border hover:border-white hover:border-opacity-50 p-1 rounded transition-all cursor-pointer min-w-0">
              <div className="text-xs hidden sm:block text-gray-300">Hello, sign in</div>
              <div className="font-semibold flex items-center gap-1">
                Account & Lists
                <span className="text-xs hidden sm:inline">▼</span>
              </div>
            </div>

            {/* Returns & Orders */}
            <div className="text-xs lg:text-sm hidden md:block hover:border hover:border-white hover:border-opacity-50 p-1 rounded transition-all cursor-pointer">
              <div className="text-xs text-gray-300">Returns</div>
              <div className="font-semibold">& Orders</div>
            </div>

            {/* Cart */}
            <div className="flex items-center gap-2 hover:border hover:border-white hover:border-opacity-50 p-1 rounded transition-all cursor-pointer min-w-[44px] min-h-[44px]">
              <FaOpencart className="text-lg lg:text-xl flex-shrink-0" />
              <span className="font-semibold text-xs lg:text-sm">Cart</span>
            </div>
          </div>
        </div>

        {/* Secondary Navigation */}
        <div className="bg-[#232f3e] px-3 sm:px-4 lg:px-6 py-2 sm:py-3">
          <div className="flex items-center gap-4 sm:gap-6 lg:gap-8 text-xs sm:text-sm overflow-x-auto scrollbar-hide">
            <div className="flex items-center gap-2 flex-shrink-0 p-1 rounded transition-all cursor-pointer">
              <FaBars />
              <a href="#hero">
                <span>All</span>
              </a>
            </div>
            {[
              { text: "Sell", href: "#hero" },
              { text: "Amazon miniTV", href: "#", hideOn: "sm" },
              { text: "Best Sellers", href: "#best" },
              { text: "Today's Deals", href: "#" },
              { text: "Mobiles", href: "#" },
              { text: "Fashion", href: "#", hideOn: "lg" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`flex-shrink-0  p-1 rounded transition-all cursor-pointer ${
                  item.hideOn === "sm"
                    ? "hidden sm:inline"
                    : item.hideOn === "md"
                      ? "hidden md:inline"
                      : item.hideOn === "lg"
                        ? "hidden lg:inline"
                        : item.hideOn === "xl"
                          ? "hidden xl:inline"
                          : ""
                }`}
              >
                <span>{item.text}</span>
              </a>
            ))}
          </div>
        </div>
      </header>
    </div>
  ) ;
}

export default Navbar;
