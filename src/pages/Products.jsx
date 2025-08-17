import React, { useEffect, useState } from "react";
import "../styles/index.css";
import { FiStar } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { IoStar } from "react-icons/io5";
import { getProducts } from "../utils/api";

function Products() {
  const [filtersOpen, setFiltersOpen] = useState(false);

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedRating, setSelectedRating] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    let temp = [...products];

    // Filter Brand
    if (selectedBrands.length > 0) {
      temp = temp.filter((p) =>
        selectedBrands.some((brand) =>
          p.title.toLowerCase().includes(brand.toLowerCase())
        )
      );
    }

    // Filter Price
    if (selectedPrices.length > 0) {
      temp = temp.filter((p) => {
        return selectedPrices.some((range) => {
          if (range === "all") return true;
          const [min, max] = range.split("-").map(Number);
          return p.price >= min && p.price <= max;
        });
      });
    }

    // Filter Rate
    if (selectedRating) {
      temp = temp.filter((p) => Math.floor(p.rating.rate) >= selectedRating);
    }

    setFilteredProducts(temp);
  }, [selectedBrands, selectedPrices, selectedRating, products]);

  const handleBrandChange = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const handlePriceChange = (range) => {
    setSelectedPrices((prev) =>
      prev.includes(range) ? prev.filter((p) => p !== range) : [...prev, range]
    );
  };

  const handleRatingChange = (rating) => {
    setSelectedRating(rating);
  };

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
          {/* Brands */}
          <div className="brands">
            <h2 className="text-base text-black font-bold mb-2">Brands</h2>
            <div className="space-y-2">
              {[
                "Jacket",
                "Shirts",
                "Portable ",
                "SanDisk SSD ",
                "Power ",
                "Samsung ",
                "Gold ",
                "Women's ",
              ].map((brand) => {
                return (
                  <label key={brand} className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2 size-3 rounded border-gray-300 shadow-sm"
                      checked={selectedBrands.includes(brand)}
                      onChange={() => handleBrandChange(brand)}
                    />
                    <span className="text-sm text-gray-800">{brand}</span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Prices */}
          <div className="prices mt-6">
            <h2 className="text-base text-black font-bold mb-2">Price</h2>
            <div className="space-y-2">
              {[
                { label: "All", value: "all" },
                { label: "$0 - $50", value: "0-50" },
                { label: "$50 - $100", value: "50-100" },
                { label: "$100 - $200", value: "100-200" },
              ].map((price) => {
                return (
                  <label key={price.value} className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2 size-3 rounded border-gray-300 shadow-sm"
                      checked={selectedPrices.includes(price.value)}
                      onChange={() => handlePriceChange(price.value)}
                    />
                    <span className="text-sm text-gray-800">{price.label}</span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Ratings */}
          <div className="review mt-6">
            <h2 className="text-base text-black font-bold mb-2">
              Customer Reviews
            </h2>
            {[4, 3, 2].map((r) => (
              <div
                key={r}
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => handleRatingChange(r)}
              >
                <div className="rating flex flex-row gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <IoStar
                      key={star}
                      className={`w-3 h-3 ${
                        star <= r ? "text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-700">& up</p>
              </div>
            ))}
          </div>
        </aside>

        {/* Products grid */}
        <section className="flex-1">
          {filteredProducts.length === 0 ? (
            <p>No products found</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white p-4 border border-gray-200 rounded hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-center mb-3">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-40 sm:h-48 object-contain"
                    />
                  </div>
                  <div className="p-2">
                    <h2 className="text-sm font-medium text-gray-900 line-clamp-2 h-10">
                      {product.title}
                    </h2>
                    <div className="flex items-center mt-1">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <FiStar
                            key={star}
                            className={`w-3 h-3 ${
                              star <= Math.floor(product.rating.rate)
                                ? "text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-blue-500 ml-1">
                        {product.rating.count}
                      </span>
                    </div>
                    <div className="mt-1">
                      <span className="text-sm font-bold">
                        ${product.price}
                      </span>
                    </div>
                    <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-xs py-1 px-3 rounded mt-2 border border-gray-300">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default Products;
