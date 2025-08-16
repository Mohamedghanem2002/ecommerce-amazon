import React from "react";
import '../styles/index.css';
import { FiHeart, FiShare2, FiStar, FiChevronRight } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { IoStar } from "react-icons/io5";
import img from '../assets/images/WhatsApp Image 2025-08-15 at 14.51.49_d9d33ac5.jpg';

function Products() {
  return (

    <div className="container  mx-6 p-2 mt-12 flex gap-4  ">
      <div className="sidebar max-w-sm w-1/4  p-4 mr-8">
        <div className="sidebar-header">

          <div>
            <h2 className="text-1xl  text-black font-bold  mb-2">Delivery Day</h2>
            <label htmlFor="" className="inline-flex items-center gap-3">
              <input
                type="checkbox"
                className="size-3 rounded border-gray-300 shadow-sm dark:border-gray-600 dark:bg-gray-900 dark:ring-offset-gray-900 dark:checked:bg-blue-600"
                id="Option1"
              />

              <span className="font-medium text-gray-700  w-full"> Get in 2 Days </span>
            </label>
          </div>

          <div className="review mt-8">
            <h2 className="text-1xl  text-black font-bold mb-2">Customer Reviews</h2>
            <div className=" flex  gap-2 flex-row">
              <div className="rating flex flex-row gap-0.2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <IoStar key={star} className="w-3 h-3 text-yellow-400 fill-current" />
                ))}
                
              </div>
              <p >& up</p>
            </div>

          </div>
          <div className="brands mt-8">
            <h2 className="text-1xl text-black font-bold mb-2">Brands</h2>

            <div>
              <input
                type="checkbox"
                className=" mr-2 size-3 rounded border-gray-300 shadow-sm dark:border-gray-600 dark:bg-gray-900 dark:ring-offset-gray-900 dark:checked:bg-blue-600"
                id="Option1"
              />
              <label htmlFor="Option1">Samsung</label>

            </div>
            <div>
              <input
                type="checkbox"
                className=" mr-2 size-3 rounded border-gray-300 shadow-sm dark:border-gray-600 dark:bg-gray-900 dark:ring-offset-gray-900 dark:checked:bg-blue-600"
                id="Option2"
              />
              <label htmlFor="Option2">LG</label>

            </div>

            <div>
              <input
                type="checkbox"
                className=" mr-2  size-3 rounded border-gray-300 shadow-sm dark:border-gray-600 dark:bg-gray-900 dark:ring-offset-gray-900 dark:checked:bg-blue-600"
                id="Option2"
              />
              <label htmlFor="Option2">Hier</label>

            </div>
            <div>
              <input
                type="checkbox"
                className=" mr-2 size-3 rounded border-gray-300 shadow-sm dark:border-gray-600 dark:bg-gray-900 dark:ring-offset-gray-900 dark:checked:bg-blue-600"
                id="Option2"
              />
              <label htmlFor="Option2">Daikin</label>

            </div>
            <div>
              <input
                type="checkbox"
                className=" mr-2 size-3 rounded border-gray-300 shadow-sm dark:border-gray-600 dark:bg-gray-900 dark:ring-offset-gray-900 dark:checked:bg-blue-600"
                id="Option2"
              />
              <label htmlFor="Option2">Godrej</label>

            </div>

            <div>
              <input
                type="checkbox"
                className=" mr-2 size-3 rounded border-gray-300 shadow-sm dark:border-gray-600 dark:bg-gray-900 dark:ring-offset-gray-900 dark:checked:bg-blue-600"
                id="Option2"
              />
              <label htmlFor="Option2">IFB</label>

            </div>

            <div>
              <input
                type="checkbox"
                className=" mr-2 size-3 rounded border-gray-300 shadow-sm dark:border-gray-600 dark:bg-gray-900 dark:ring-offset-gray-900 dark:checked:bg-blue-600"
                id="Option2"
              />
              <label htmlFor="Option2">Panasonic</label>

            </div>
          </div>

          <div className="prices mt-6">
            <h2 className="text-1xl  text-black font-bold mb-2">Price</h2>
            <div>
              <input className="mr-2 size-3 rounded border-gray-300 shadow-sm dark:border-gray-600 dark:bg-gray-900 dark:ring-offset-gray-900 dark:checked:bg-blue-600" type="checkbox" />
              <label htmlFor="">All</label>
            </div>
            <div>
              <input className="mr-2 size-3 rounded border-gray-300 shadow-sm dark:border-gray-600 dark:bg-gray-900 dark:ring-offset-gray-900 dark:checked:bg-blue-600" type="checkbox" />
              <label htmlFor="">$5000 - $10000</label>
            </div>
            <div>
              <input className="mr-2 size-3 rounded border-gray-300 shadow-sm dark:border-gray-600 dark:bg-gray-900 dark:ring-offset-gray-900 dark:checked:bg-blue-600" type="checkbox" />
              <label htmlFor="">$10000 - $15000</label>
            </div>
            <div>
              <input className="mr-2 size-3 rounded border-gray-300 shadow-sm dark:border-gray-600 dark:bg-gray-900 dark:ring-offset-gray-900 dark:checked:bg-blue-600" type="checkbox" />
              <label htmlFor="">$15000 - $20000</label>
            </div>
            <div>
              <input className="mr-2 size-3 rounded border-gray-300 shadow-sm dark:border-gray-600 dark:bg-gray-900 dark:ring-offset-gray-900 dark:checked:bg-blue-600" type="checkbox" />
              <label htmlFor="">$20000 - $25000</label>
            </div>
            <div>
              <input className="mr-2 size-3 rounded border-gray-300 shadow-sm dark:border-gray-600 dark:bg-gray-900 dark:ring-offset-gray-900 dark:checked:bg-blue-600" type="checkbox" />
              <label htmlFor="">$25000 - $30000</label>
            </div>


          </div>
        </div>
      </div>




      <div className="products w-full px-4 ml-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((product, index) => (
            <div key={index} className="bg-white p-4 border border-gray-200 rounded hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-3">
                <img
                  src={img}
                  alt={`Product ${index + 1}`}
                  className="h-40 object-contain"
                />
              </div>
              <div className="p-2">
                <h2 className="text-sm font-medium text-gray-900 line-clamp-2 h-10">
                  Product {index + 1} - High-quality product with amazing features
                </h2>
                <div className="flex items-center mt-1">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FiStar key={star} className="w-3 h-3 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <IoIosArrowDown className="w-3 h-3 text-gray-400 ml-1" />
                  <span className="text-xs text-blue-500 ml-1">13,900</span>
                </div>
                <div className="mt-1">
                  <span className="text-sm font-bold">${(49.99 + index * 10).toFixed(2)}</span>
                  <span className="text-xs text-gray-500 ml-1">List: </span>
                  <span className="text-xs text-gray-500 line-through">${(59.99 + index * 10).toFixed(2)}</span>
                  <span className="text-xs text-green-700 ml-1">(10% off)</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  FREE delivery <span className="font-medium">Sat, Aug 16</span>
                </p>
                <p className="text-xs text-green-700 mt-1">Prime</p>
                <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-xs py-1 px-3 rounded mt-2 border border-gray-300">
                  Add to Cart
                </button>
                
              </div>
            </div>
          ))}
        </div>
      </div>



    </div>

  );
}

export default Products;
