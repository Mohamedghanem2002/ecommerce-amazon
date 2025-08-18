import { useState, useContext, useEffect } from "react";
import { FiStar } from "react-icons/fi";
import { IoArrowDownSharp, IoLocationSharp } from "react-icons/io5";
import { GrSecure } from "react-icons/gr";
import { CiCreditCard1 } from "react-icons/ci";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/cartContext/cart.context";
import { getProductById } from "../utils/api";
import "../styles/index.css";

function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (err) {
        console.error("Error fetching product:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found!</p>;

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row gap-6 border-b-2 border-gray-200 pb-6">
        {/* Product Image */}
        <div className="w-full md:w-80 lg:w-96">
          <div className="bg-gray-50 rounded-lg overflow-hidden mb-4">
            <img
              src={product.image}
              alt={product.name}
              className="object-cover "
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1 min-w-0 flex flex-col justify-between">
          <div>
            <h1 className="text-xl font-semibold text-blue-400 mb-2">
              Brand: {product.brand}
            </h1>
            <p className="text-gray-500 mb-4">{product.description}</p>

            {/* Rating */}
            <div className="rating mt-2 flex gap-2 items-center">
              <p className="font-medium">{product.rating.rate}</p>
              <div className="rating-stars flex gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FiStar
                    key={star}
                    className={`w-5 h-5 ${
                      star <= Math.round(product.rating.rate)
                        ? "text-yellow-300 fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
                <IoArrowDownSharp className="ml-1" />
              </div>
              <p className="text-sm font-semibold text-blue-400">
                {product.rating.count} ratings
              </p>
            </div>
          </div>

          <hr className="my-4" />

          {/* Price */}
          <div className="price mt-4">
            <p className="text-2xl font-bold text-black mb-1">
              SAR {product.price}
            </p>
            <p className="text-gray-500 text-sm">Inclusive of VAT</p>
          </div>

          {/* Benefits */}
          <div className="mt-6 mb-6 flex gap-4">
            <div className="flex-1 flex flex-col items-center gap-2">
              <CiCreditCard1 className="w-6 h-6 text-blue-400" />
              <p className="text-xs text-blue-400 text-center">
                Electronic payment
              </p>
            </div>
            <div className="flex-1 flex flex-col items-center gap-2">
              <GrSecure className="w-6 h-6 text-blue-400" />
              <p className="text-xs text-blue-400 text-center">
                30 Days Return
              </p>
            </div>
            <div className="flex-1 flex flex-col items-center gap-2">
              <GrSecure className="w-6 h-6 text-blue-400" />
              <p className="text-xs text-blue-400 text-center">
                Secure Transaction
              </p>
            </div>
          </div>
        </div>

        {/* Cart Section */}
        <div className="md:w-80 h-auto p-4 border border-gray-200 rounded-md">
          <p className="text-2xl font-semibold text-gray-900 mb-2">
            SAR {product.price}
          </p>
          <p className="text-sm text-gray-600 mb-4">
            <span className="text-green-600 font-medium">FREE delivery</span>
          </p>

          {/* Quantity Selector */}
          <div className="mb-4">
            <p className="text-sm font-medium text-gray-900 mb-1">Quantity:</p>
            <select
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            >
              {[...Array(10).keys()].map((num) => (
                <option key={num + 1} value={num + 1}>
                  {num + 1}
                </option>
              ))}
            </select>
          </div>

          {/* Buttons */}
          <button
            onClick={handleAddToCart}
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 py-2 px-4 rounded-md font-medium mb-3 transition-colors"
          >
            Add to Cart
          </button>
          <button className="w-full bg-orange-100 hover:bg-orange-200 text-gray-900 py-2 px-4 rounded-md font-medium transition-colors">
            Buy Now
          </button>

          {/* Location */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-sm font-medium text-gray-900 flex items-center">
              <IoLocationSharp className="mr-2 text-gray-600" />
              Deliver to Egypt -{" "}
              <span className="text-blue-600 cursor-pointer hover:underline">
                Update location
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
