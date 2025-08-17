import { useState } from "react"
import { MdDelete } from "react-icons/md"
import { CiShare2 } from "react-icons/ci"
import { Link } from "react-router-dom";

export default function Cart() {
    console.log("[v0] Component rendering started")

    const [cartItems, setCartItems] = useState([])
    const [activeTab, setActiveTab] = useState("saved")

    console.log("[v0] Current cart items:", cartItems)

    const sampleItem = {
        id: 1,
        name: "KIKO Milano 3D Hydra Lip Oil 03, Hydrating Lip Oil",
        price: 1499.0,
        currency: "EGP",
        image: "/pink-lip-oil.png",
        inStock: true,
        stockText: "Only 1 left in stock - order soon.",
        seller: "VIRIDis",
        delivery: "EGP 26 delivery 20 - 21 Aug",
        quantity: 1,
        selected: true,
    }

    const addSampleItem = () => {
        console.log("[v0] Adding sample item")
        setCartItems([sampleItem])
    }

    const removeItem = (id) => {
        console.log("[v0] Removing item:", id)
        setCartItems(cartItems.filter((item) => item.id !== id))
    }

    const updateQuantity = (id, newQuantity) => {
        if (newQuantity < 1) return
        console.log("[v0] Updating quantity for item:", id, "to:", newQuantity)
        setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
    }

    const toggleSelection = (id) => {
        console.log("[v0] Toggling selection for item:", id)
        setCartItems(cartItems.map((item) => (item.id === id ? { ...item, selected: !item.selected } : item)))
    }

    const clearCart = () => {
        console.log("[v0] Clearing all items from cart")
        setCartItems([])
    }

    const subtotal = cartItems.filter((item) => item.selected).reduce((sum, item) => sum + item.price * item.quantity, 0)
    const selectedCount = cartItems.filter((item) => item.selected).length

    console.log("[v0] Rendering with cart length:", cartItems.length)

    
    
    if (cartItems.length === 0) {
        console.log("[v0] Rendering empty cart state")
        return (
            <div className="min-h-screen bg-white">
                <div className="min-h-screen bg-gray-50">
                    <div className="max-w-7xl mx-auto p-2 sm:p-4">
                        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
                            {/* Main Content */}
                            <div className="flex-1">
                                <div className="bg-white rounded-lg p-4 sm:p-6 mb-4 sm:mb-6">
                                    <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                                        Your Amazon cart is empty
                                    </h1>
                                    <p className="text-sm sm:text-base text-gray-600 mb-2">
                                        Your shopping basket lives to serve. Give it purpose – fill it with groceries, clothing, household
                                        supplies, electronics and more.
                                    </p>
                                    <p className="text-sm sm:text-base text-gray-600">
                                        Continue shopping on the{" "}
                                        <Link to="/Home" className="text-blue-600 hover:text-blue-800 hover:underline">
                                        <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline">
                                            amazon.eg homepage
                                        </a>
                                        </Link>
                                        , learn about{" "}
                                        <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline">
                                            Today's Deals
                                        </a>
                                        , or visit your{" "}
                                        <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline">
                                            Wish List
                                        </a>
                                        .
                                    </p>
                                </div>

                                {/* Your Items Section */}
                                <div className="bg-white rounded-lg">
                                    <div className="border-b">
                                        <h2 className="text-lg sm:text-xl font-bold p-3 sm:p-4">Your items</h2>
                                        <div className="flex border-b overflow-x-auto">
                                            <button
                                                className={`px-3 sm:px-4 py-2 font-medium whitespace-nowrap text-sm sm:text-base ${activeTab === "saved"
                                                        ? "text-blue-600 border-b-2 border-blue-600"
                                                        : "text-gray-600 hover:text-gray-800"
                                                    }`}
                                                onClick={() => setActiveTab("saved")}
                                            >
                                                No items saved for later
                                            </button>
                                            <button
                                                className={`px-3 sm:px-4 py-2 font-medium whitespace-nowrap text-sm sm:text-base ${activeTab === "buyAgain"
                                                        ? "text-blue-600 border-b-2 border-blue-600"
                                                        : "text-gray-600 hover:text-gray-800"
                                                    }`}
                                                onClick={() => setActiveTab("buyAgain")}
                                            >
                                                Buy it again
                                            </button>
                                        </div>
                                    </div>
                                    <div className="p-3 sm:p-4">
                                        <div className="border-2 border-dashed border-gray-200 rounded-lg p-4 sm:p-8 text-center">
                                            <p className="text-gray-500 mb-4 text-sm sm:text-base">No items</p>
                                            <button
                                                onClick={addSampleItem}
                                                className="bg-yellow-400 hover:bg-yellow-500 text-black text-sm sm:text-base px-4 py-2 rounded font-medium transition-colors"
                                            >
                                                Add Sample Item
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Sidebar */}
                            <div className="w-full lg:w-80">
                                <div className="bg-white rounded-lg border shadow-sm mb-4">
                                    <div className="p-3 sm:p-4">
                                        <div className="flex items-center gap-2 mb-4">
                                            <div className="text-blue-600 font-bold text-sm sm:text-base">prime</div>
                                            <div className="text-xs sm:text-sm">
                                                <div className="font-medium">Sign up for Prime to get</div>
                                                <div>fast, FREE and unlimited deliveries.</div>
                                            </div>
                                        </div>
                                        <button className="w-full bg-transparent border border-gray-300 text-sm sm:text-base px-4 py-2 rounded hover:bg-gray-50 transition-colors">
                                            Join Prime
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    console.log("[v0] Rendering filled cart state")
    return (
        <div className="min-h-screen bg-white">
            <div className="min-h-screen bg-gray-50">
                <div className="max-w-7xl mx-auto p-2 sm:p-4">
                    <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
                        {/* Main Content */}
                        <div className="flex-1">
                            <div className="bg-white rounded-lg p-4 sm:p-6 mb-4 sm:mb-6">
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-2">
                                    <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Shopping Cart</h1>
                                    <button
                                        className="text-blue-600 hover:text-blue-800 text-sm self-start sm:self-auto"
                                        onClick={clearCart}
                                    >
                                        Clear Cart
                                    </button>
                                </div>

                                <div className="text-right mb-4 hidden sm:block">
                                    <span className="text-sm text-gray-600">Price</span>
                                </div>

                                {cartItems.map((item) => (
                                    <div key={item.id} className="border-b border-gray-200 pb-4 sm:pb-6 mb-4 sm:mb-6">
                                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                                            {/* Mobile: Checkbox and Image Row */}
                                            <div className="flex gap-3 sm:contents">
                                                {/* Product Image */}
                                                <div className="flex-shrink-0">
                                                    <img
                                                        src="/best-pink-lip-gloss-294711-1628733565829-main.jpg"
                                                        alt="Lip Gloss"
                                                        className="w-20 h-20 sm:w-32 sm:h-32 object-contain"
                                                    />
                                                </div>

                                                {/* Mobile: Price (show on mobile next to image) */}
                                                <div className="flex-1 text-right sm:hidden pt-2">
                                                    <div className="text-lg font-bold">
                                                        {item.currency} {item.price.toFixed(2)}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Product Details */}
                                            <div className="flex-1">
                                                <h3 className="font-medium text-gray-900 mb-2 text-sm sm:text-base">{item.name}</h3>
                                                {item.inStock && <p className="text-green-600 text-xs sm:text-sm mb-1">{item.stockText}</p>}
                                                <p className="text-xs sm:text-sm text-gray-600 mb-1">sold by: {item.seller}</p>
                                                <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">{item.delivery}</p>

                                                {/* Quantity and Actions */}
                                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                                                    <div className="flex items-center border rounded">
                                                        <button
                                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                            className="p-1.5 sm:p-2 hover:bg-gray-100"
                                                        >
                                                            <span className="w-3 h-3 sm:w-4 sm:h-4 text-xs">−</span>
                                                        </button>
                                                        <span className="px-2 sm:px-3 py-1.5 sm:py-2 min-w-[2.5rem] sm:min-w-[3rem] text-center text-sm">
                                                            {item.quantity}
                                                        </span>
                                                        <button
                                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                            className="p-1.5 sm:p-2 hover:bg-gray-100"
                                                        >
                                                            <span className="w-3 h-3 sm:w-4 sm:h-4 text-xs">+</span>
                                                        </button>
                                                    </div>

                                                    <div className="flex flex-wrap gap-3 sm:gap-4">
                                                        <button
                                                            onClick={() => removeItem(item.id)}
                                                            className="text-blue-600 hover:text-blue-800 text-xs sm:text-sm flex items-center gap-1"
                                                        >
                                                            <MdDelete className="w-3 h-3 sm:w-4 sm:h-4 text-xs" />
                                                            Delete
                                                        </button>

                                                        <button className="text-blue-600 hover:text-blue-800 text-xs sm:text-sm flex items-center gap-1">
                                                            <CiShare2 className="w-3 h-3 sm:w-4 sm:h-4 text-xs" />
                                                            Share
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Desktop Price */}
                                            <div className="flex-shrink-0 text-right hidden sm:block">
                                                <div className="text-lg font-bold">
                                                    {item.currency} {item.price.toFixed(2)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                <div className="text-right">
                                    <p className="text-base sm:text-lg">
                                        Subtotal ({selectedCount} item{selectedCount !== 1 ? "s" : ""}):{" "}
                                        <span className="font-bold">EGP {subtotal.toFixed(2)}</span>
                                    </p>
                                </div>
                            </div>

                            {/* Your Items Section */}
                            <div className="bg-white rounded-lg">
                                <div className="border-b">
                                    <h2 className="text-lg sm:text-xl font-bold p-3 sm:p-4">Your items</h2>
                                    <div className="flex border-b overflow-x-auto">
                                        <button
                                            className={`px-3 sm:px-4 py-2 font-medium whitespace-nowrap text-sm sm:text-base ${activeTab === "saved"
                                                    ? "text-blue-600 border-b-2 border-blue-600"
                                                    : "text-gray-600 hover:text-gray-800"
                                                }`}
                                            onClick={() => setActiveTab("saved")}
                                        >
                                            No items saved for later
                                        </button>
                                        <button
                                            className={`px-3 sm:px-4 py-2 font-medium whitespace-nowrap text-sm sm:text-base ${activeTab === "buyAgain"
                                                    ? "text-blue-600 border-b-2 border-blue-600"
                                                    : "text-gray-600 hover:text-gray-800"
                                                }`}
                                            onClick={() => setActiveTab("buyAgain")}
                                        >
                                            Buy it again
                                        </button>
                                    </div>
                                </div>
                                <div className="p-3 sm:p-4">
                                    <div className="border-2 border-dashed border-gray-200 rounded-lg p-4 sm:p-8 text-center">
                                        <p className="text-gray-500 text-sm sm:text-base">No items</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="w-full lg:w-80">
                            <div className="bg-white rounded-lg border shadow-sm mb-4">
                                <div className="p-3 sm:p-4">
                                    <div className="mb-4">
                                        <p className="text-base sm:text-lg mb-2">
                                            Subtotal ({selectedCount} item{selectedCount !== 1 ? "s" : ""}):{" "}
                                            <span className="font-bold">EGP {subtotal.toFixed(2)}</span>
                                        </p>
                                        <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium text-sm sm:text-base px-4 py-2 rounded transition-colors">
                                            Proceed to Buy
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg border shadow-sm mb-4">
                                <div className="p-3 sm:p-4">
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="text-blue-600 font-bold text-sm sm:text-base">prime</div>
                                        <div className="text-xs sm:text-sm">
                                            <div className="font-medium">Sign up for Prime to get</div>
                                            <div>fast, FREE and unlimited deliveries.</div>
                                        </div>
                                    </div>
                                    <button className="w-full bg-transparent border border-gray-300 text-sm sm:text-base px-4 py-2 rounded hover:bg-gray-50 transition-colors">
                                        Join Prime
                                    </button>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg border shadow-sm">
                                <div className="p-3 sm:p-4">
                                    <h3 className="font-medium mb-3 text-sm sm:text-base">
                                        Frequently bought with KIKO Milano 3D Hydra Lip Oil 03, Hydrating Lip Oil
                                    </h3>
                                    <div className="flex items-center gap-3 mb-3">
                                        <img
                                            src="/best-pink-lip-gloss-294711-1628733565829-main.jpg"
                                            alt="KIKO Milano Lip Gloss"
                                            className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                                        />
                                        <div className="flex-1">
                                            <p className="text-xs sm:text-sm font-medium">KIKO Milano 3D Hydra Lipgloss 41 - Limited...</p>
                                            <div className="flex items-center gap-1 text-xs sm:text-sm">
                                                <div className="flex text-yellow-400">★★★★☆</div>
                                                <span className="text-gray-600">1,773</span>
                                            </div>
                                            <div className="text-xs sm:text-sm">
                                                <span className="font-bold">EGP 1,499.00</span>
                                                <span className="text-gray-500 line-through ml-2">EGP 1,599.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="w-full text-xs sm:text-sm bg-transparent border border-gray-300 px-4 py-2 rounded hover:bg-gray-50 transition-colors">
                                        See all buying options
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}