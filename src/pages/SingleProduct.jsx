import React, { useState, useContext } from "react";
import { FiHeart, FiShare2, FiStar, FiChevronRight } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { GrSecure } from "react-icons/gr";
import { CiCreditCard1 } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5";
import img from "../assets/images/WhatsApp Image 2025-08-15 at 14.53.26_c78ffe47.jpg";
import { cartContext } from "../context/cartContext/cart.context";
import { toast } from "react-hot-toast";
import '../styles/index.css';

function SingleProduct() {
  const { addToCart } = useContext(cartContext);
  const [quantity, setQuantity] = useState(1);

  const product = {
    id: "12345",
    title: "WDIRARA LG 7 Kg, 5 Star Washing Machine",
    price: 203.14,
    description: "Direct Drive Technology, Steam Wash, 6 Motion DD, Smart Diagnosis, Fully-Automatic Front Load",
    rating: 4.1,
    ratingsCount: 67,
    image: img,
    features: [
      "Brand: WDIRARA",
      "Model Name: LG 7 Kg, 5 Star, Direct Drive Technology",
      "Special Feature: Steam Wash, 6 Motion DD, Smart Diagnosis",
      "Capacity: 7 Kilograms"
    ]
  };

  const handleAddToCart = () => {
    addToCart(product.id, quantity);
    toast.success(`${quantity} ${product.title} added to cart!`, {
      position: "bottom-right"
    });
  };

  const handleBuyNow = () => {
    addToCart(product.id, quantity);
    // Navigate to checkout - you'll need to implement this
    toast.success(`Proceeding to checkout with ${product.title}`, {
      position: "bottom-right"
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row gap-2 border-b-2 border-gray-200 pb-4">
        {/* Product Images */}
        <div className="w-80">
          <div className="bg-gray-50 rounded-lg overflow-hidden mb-4">
            <img
              src={product.image}
              alt={product.title}
              className="w-64 h-96 object-cover"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="md:w-1/2">
          <div className="flex flex-col justify-between items-start mb-4">
            <div>
              <h1 className="text-1xl font-semibold text-blue-400">Brand: Wdirara</h1>
              <p className="text-gray-500">{product.description}</p>
            </div>
            <div className="rating mt-2 flex gap-2 flex-row">
              <p>{product.rating}</p>
              <div className="rating-stars flex gap-0.5 flex-row">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FiStar 
                    key={star} 
                    className={`w-5 h-5 ${star <= Math.round(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                  />
                ))}
                <IoIosArrowDown />
              </div>
              <p className="text-sm font-semibold text-blue-400">
                {product.ratingsCount} ratings |
              </p>
              <p className="text-sm font-semibold text-blue-400">search this page</p>
            </div>
          </div>
          <hr />
          <div className="price mt-4">
            <p className="text-1xl font-bold text-black-400">SAR {product.price.toFixed(2)}</p>
            <p>Inclusive of VAT</p>
            <p>
              <span className="text-xs text-gray-400">sign to redeem </span>
              <span className="bg-green-500 text-black-400">Extra 10% </span>
              off with meen credits cards.
            </p>
            <p className="capitalize text-1xl text-black-400">
              Enter code MEEM10 at checkout. discount by amazon
            </p>
          </div>
          <div className="mt-6 mb-6 flex gap-2">
            <div className="flex flex-row gap-3 w-96 justify-between items-center mb-2">
              <div className="flex flex-col gap-2 items-center w-1/2">
                <CiCreditCard1 />
                <p className="text-xs text-blue-400">Electronic payment</p>
              </div>
              <div className="flex flex-col gap-2 items-center w-1/2">
                <GrSecure />
                <p className="text-xs text-blue-400">30 Days Return</p>
              </div>
              <div className="flex flex-col gap-2 items-center w-1/2">
                <GrSecure />
                <p className="text-xs text-blue-400">Secure Transaction</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">About this item</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Purchase Box */}
        <div className="md:w-80 h-90 ml-8 p-4 border border-gray-200 rounded-md">
          <p className="text-2xl font-semibold text-gray-900 mb-2">SAR {product.price.toFixed(2)}</p>
          <p className="text-sm text-gray-600 mb-4">
            <span className="text-green-600 font-medium">FREE delivery</span> on eligible international items over $49
          </p>
          
          <p className="text-sm text-gray-600 mb-4">
            <span className="font-medium">Delivery:</span> Thursday, Aug 22 - Monday, Aug 26<br />
            <span className="text-blue-600 cursor-pointer hover:underline">Details</span>
          </p>
          
          <div className="mb-4">
            <p className="text-sm font-medium text-gray-900 mb-1">Quantity:</p>
            <select 
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>
          
          <button 
            onClick={handleAddToCart}
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 py-2 px-4 rounded-md font-medium mb-3 transition-colors"
          >
            Add to Cart
          </button>
          
          <button 
            onClick={handleBuyNow}
            className="w-full bg-orange-100 hover:bg-orange-200 text-gray-900 py-2 px-4 rounded-md font-medium mb-4 transition-colors"
          >
            Buy Now
          </button>
          
          <div className="text-xs text-gray-500 space-y-1">
            <div className="flex items-start">
              <input type="checkbox" className="mt-1 mr-2" />
              <span>Add gift options</span>
            </div>
            <div className="flex items-start">
              <input type="checkbox" className="mt-1 mr-2" />
              <span>Add a Protection Plan</span>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-sm font-medium text-gray-900 flex items-center">
              <IoLocationSharp className="mr-2 text-gray-600" />
              <span>Deliver to Egypt - <span className="text-blue-600 cursor-pointer hover:underline">Update location</span></span>
            </p>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-12 border-t border-gray-200 pt-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Customer Reviews</h2>
            <div className="flex items-center mt-1">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FiStar 
                    key={star} 
                    className={`w-5 h-5 ${star <= Math.round(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                  />
                ))}
                <span className="ml-2 text-gray-600">{product.rating} out of 5</span>
              </div>
              <span className="mx-2 text-gray-400">•</span>
              <span className="text-blue-600 hover:underline cursor-pointer">
                {product.ratingsCount} global ratings
              </span>
            </div>
          </div>
          <button className="text-sm font-medium text-blue-600 hover:underline flex items-center">
            See All Reviews <FiChevronRight className="ml-1 w-4 h-4" />
          </button>
        </div>

        {/* Rating Distribution */}
        <div className="mb-8">
          {[5, 4, 3, 2, 1].map((rating) => (
            <div key={rating} className="flex items-center mb-2">
              <span className="w-8 text-sm text-gray-600">{rating} star</span>
              <div className="flex-1 h-2 mx-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-yellow-400" 
                  style={{ 
                    width: `${rating === 5 ? 75 : rating === 4 ? 15 : rating === 3 ? 5 : rating === 2 ? 3 : 2}%` 
                  }}
                ></div>
              </div>
              <span className="w-8 text-xs text-gray-500 text-right">
                {rating === 5 ? '75%' : rating === 4 ? '15%' : rating === 3 ? '5%' : rating === 2 ? '3%' : '2%'}
              </span>
            </div>
          ))}
        </div>

        {/* Review Cards */}
        <div className="space-y-6">
          {/* Review 1 */}
          <div className="border-b border-gray-200 pb-6">
            <div className="flex items-center mb-2">
              <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-medium">
                JD
              </div>
              <div className="ml-3">
                <h4 className="font-medium text-gray-900">John D.</h4>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FiStar 
                      key={star} 
                      className={`w-4 h-4 ${star <= 5 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                  <span className="ml-1 text-sm text-gray-500">2 weeks ago</span>
                </div>
              </div>
            </div>
            <h3 className="font-medium text-gray-900 mb-1">Perfect washing machine for a small family</h3>
            <p className="text-gray-600 text-sm">
              This washing machine has been a great addition to our home. The steam function works wonders on tough stains and the machine is very quiet.
            </p>
            <div className="mt-2 text-xs text-gray-500">
              <span className="font-medium">Verified Purchase</span>
              <span className="mx-2">•</span>
              <span>Purchased 1 month ago</span>
            </div>
          </div>

          {/* Review 2 */}
          <div className="border-b border-gray-200 pb-6">
            <div className="flex items-center mb-2">
              <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-medium">
                SM
              </div>
              <div className="ml-3">
                <h4 className="font-medium text-gray-900">Sarah M.</h4>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FiStar 
                      key={star} 
                      className={`w-4 h-4 ${star <= 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                  <span className="ml-1 text-sm text-gray-500">1 month ago</span>
                </div>
              </div>
            </div>
            <h3 className="font-medium text-gray-900 mb-1">Great features but a bit noisy</h3>
            <p className="text-gray-600 text-sm">
              Love all the features especially the steam wash. The only downside is it can be a bit noisy during the spin cycle. Overall, very satisfied with the purchase.
            </p>
            <div className="mt-2 text-xs text-gray-500">
              <span className="font-medium">Verified Purchase</span>
              <span className="mx-2">•</span>
              <span>Purchased 2 months ago</span>
            </div>
          </div>
        </div>

        {/* See more reviews button */}
        <div className="mt-6 text-center">
          <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            See more reviews
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;