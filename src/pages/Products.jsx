import React, { useState } from "react";
import "../styles/index.css";
import { FiStar } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { IoStar } from "react-icons/io5";
import img from "../assets/images/WhatsApp Image 2025-08-15 at 14.51.49_d9d33ac5.jpg";

function Products() {
  const [filtersOpen, setFiltersOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
      {/* Mobile filters toggle */}
      <div className="md:hidden mb-4">
        <button
          onClick={() => setFiltersOpen((v) => !v)}
          className="w-full inline-flex items-center justify-between rounded border border-gray-300 bg-white py-2 px-3 text-sm font-medium shadow-sm hover:bg-gray-50"
        >
          <span>Filters</span>
          <IoIosArrowDown
            className={`h-4 w-4 transition-transform ${
              filtersOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      <div className="flex flex-col md:flex-row md:items-start gap-6">
        {/* Sidebar (filters) */}
        <aside
          className={`w-full md:w-64 lg:w-72 shrink-0 rounded border border-gray-200 bg-white p-4 ${
            filtersOpen ? "block" : "hidden"
          } md:block`}
        >
          <div className="sidebar-header">
            <div>
              <h2 className="text-base text-black font-bold mb-2">
                Delivery Day
              </h2>
              <label
                htmlFor="delivery2days"
                className="inline-flex items-center gap-3"
              >
                <input
                  type="checkbox"
                  className="size-3 rounded border-gray-300 shadow-sm"
                  id="delivery2days"
                />
                <span className="font-medium text-gray-700">Get in 2 Days</span>
              </label>
            </div>

            <div className="review mt-6">
              <h2 className="text-base text-black font-bold mb-2">
                Customer Reviews
              </h2>
              <div className="flex items-center gap-2">
                <div className="rating flex flex-row gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <IoStar
                      key={star}
                      className="w-3 h-3 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-700">& up</p>
              </div>
            </div>

            <div className="brands mt-6">
              <h2 className="text-base text-black font-bold mb-2">Brands</h2>
              <div className="space-y-2">
                {[
                  "Samsung",
                  "LG",
                  "Hier",
                  "Daikin",
                  "Godrej",
                  "IFB",
                  "Panasonic",
                ].map((brand, i) => {
                  const id = `brand_${i}`;
                  return (
                    <label key={id} htmlFor={id} className="flex items-center">
                      <input
                        id={id}
                        type="checkbox"
                        className="mr-2 size-3 rounded border-gray-300 shadow-sm"
                      />
                      <span className="text-sm text-gray-800">{brand}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            <div className="prices mt-6">
              <h2 className="text-base text-black font-bold mb-2">Price</h2>
              <div className="space-y-2">
                {[
                  "All",
                  "$5000 - $10000",
                  "$10000 - $15000",
                  "$15000 - $20000",
                  "$20000 - $25000",
                  "$25000 - $30000",
                ].map((label, i) => {
                  const id = `price_${i}`;
                  return (
                    <label key={id} htmlFor={id} className="flex items-center">
                      <input
                        id={id}
                        type="checkbox"
                        className="mr-2 size-3 rounded border-gray-300 shadow-sm"
                      />
                      <span className="text-sm text-gray-800">{label}</span>
                    </label>
                  );
                })}
              </div>
            </div>
          </div>
        </aside>

        {/* Products grid */}
        <section className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((product, index) => (
              <div
                key={index}
                className="bg-white p-4 border border-gray-200 rounded hover:shadow-md transition-shadow"
              >
                <div className="flex justify-center mb-3">
                  <img
                    src={img}
                    alt={`Product ${index + 1}`}
                    className="h-40 sm:h-48 object-contain"
                  />
                </div>
                <div className="p-2">
                  <h2 className="text-sm font-medium text-gray-900 line-clamp-2 h-10">
                    Product {index + 1} - High-quality product with amazing
                    features
                  </h2>
                  <div className="flex items-center mt-1">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <FiStar
                          key={star}
                          className="w-3 h-3 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <IoIosArrowDown className="w-3 h-3 text-gray-400 ml-1" />
                    <span className="text-xs text-blue-500 ml-1">13,900</span>
                  </div>
                  <div className="mt-1">
                    <span className="text-sm font-bold">
                      ${(49.99 + index * 10).toFixed(2)}
                    </span>
                    <span className="text-xs text-gray-500 ml-1">List: </span>
                    <span className="text-xs text-gray-500 line-through">
                      ${(59.99 + index * 10).toFixed(2)}
                    </span>
                    <span className="text-xs text-green-700 ml-1">
                      (10% off)
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    FREE delivery{" "}
                    <span className="font-medium">Sat, Aug 16</span>
                  </p>
                  <p className="text-xs text-green-700 mt-1">Prime</p>
                  <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-xs py-1 px-3 rounded mt-2 border border-gray-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Products;
