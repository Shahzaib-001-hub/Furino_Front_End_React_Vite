import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { useCart } from "../Components/Context/CartContext";
import Features from "../Components/Features/Features"

import heroImage from "../assets/hero.png";

const Cart = () => {
  const navigate = useNavigate();

  const {
    cartItems,
    removeFromCart,
    updateQuantity,
  } = useCart();

  // "2,500,000" => 2500000
  const convertPrice = (price) => {
    return Number(String(price).replace(/,/g, ""));
  };

  const formatPrice = (price) => {
    return Number(price).toLocaleString("en-US");
  };

  const subtotal = cartItems.reduce((total, item) => {
    return total + convertPrice(item.price) * item.quantity;
  }, 0);

  return (
    <>
      <Navbar />

      {/* Cart Banner */}
      <section
        className="relative flex h-[230px] items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/breadcrumb.png')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/55"></div>

        <div className="relative z-10 text-center">
          <h1 className="text-[36px] font-semibold text-black">
            Cart
          </h1>

          <div className="mt-2 flex items-center justify-center gap-2 text-sm">
            <button
              onClick={() => navigate("/")}
              className="font-medium text-black"
            >
              Home
            </button>

            <span>›</span>

            <span className="text-gray-600">
              Cart
            </span>
          </div>
        </div>
      </section>

      {/* Cart Content */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-10 lg:px-20">

        {cartItems.length === 0 ? (
          /* Empty Cart */
          <div className="py-20 text-center">
            <h2 className="text-2xl font-semibold">
              Your cart is empty
            </h2>

            <button
              onClick={() => navigate("/shop")}
              className="mt-6 bg-[#B88E2F] px-8 py-3 text-white"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[2fr_1fr]">

            {/* LEFT SIDE */}
            <div>

              {/* Table Header */}
              <div className="hidden grid-cols-[2.2fr_1fr_0.8fr_1fr_40px] items-center bg-[#F9F1E7] px-6 py-4 text-sm font-medium md:grid">
                <span>Product</span>
                <span>Price</span>
                <span>Quantity</span>
                <span>Subtotal</span>
                <span></span>
              </div>

              {/* Products */}
              <div className="mt-6 space-y-6">

                {cartItems.map((item) => {
                  const itemSubtotal =
                    convertPrice(item.price) * item.quantity;

                  return (
                    <div
                      key={item.id}
                      className="grid grid-cols-1 items-center gap-5 border-b pb-6 md:grid-cols-[2.2fr_1fr_0.8fr_1fr_40px] md:border-none md:px-3 md:pb-0"
                    >

                      {/* Product */}
                      <div className="flex items-center gap-4">

                        <div className="h-[90px] w-[90px] flex-shrink-0 overflow-hidden rounded bg-[#F9F1E7]">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-full w-full object-cover"
                          />
                        </div>

                        <p className="text-sm text-[#9F9F9F]">
                          {item.name}
                        </p>

                      </div>

                      {/* Price */}
                      <div className="text-sm text-[#9F9F9F]">
                        <span className="mr-2 font-medium text-black md:hidden">
                          Price:
                        </span>

                        Rp {item.price}
                      </div>

                      {/* Quantity */}
                      <div>
                        <span className="mr-2 font-medium md:hidden">
                          Quantity:
                        </span>

                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) =>
                            updateQuantity(
                              item.id,
                              Number(e.target.value)
                            )
                          }
                          className="h-[35px] w-[45px] rounded border border-gray-300 text-center outline-none"
                        />
                      </div>

                      {/* Subtotal */}
                      <div className="text-sm font-medium text-black">
                        <span className="mr-2 md:hidden">
                          Subtotal:
                        </span>

                        Rp {formatPrice(itemSubtotal)}
                      </div>

                      {/* Delete */}
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id)}
                        className="text-[#B88E2F] transition hover:text-red-500"
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>

                    </div>
                  );
                })}

              </div>
            </div>

            {/* RIGHT SIDE - CART TOTALS */}
            <div className="h-fit bg-[#F9F1E7] px-8 py-8">

              <h2 className="text-center text-[24px] font-semibold">
                Cart Totals
              </h2>

              <div className="mt-8 space-y-6">

                {/* Subtotal */}
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">
                    Subtotal
                  </span>

                  <span className="text-[#9F9F9F]">
                    Rp {formatPrice(subtotal)}
                  </span>
                </div>

                {/* Total */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">
                    Total
                  </span>

                  <span className="text-[18px] font-semibold text-[#B88E2F]">
                    Rp {formatPrice(subtotal)}
                  </span>
                </div>

              </div>

              {/* Checkout */}
              <div className="mt-8 text-center">
                <button
                  type="button"
                  onClick={() => navigate("/checkout")}
                  className="rounded-[8px] border border-black px-10 py-3 text-sm transition hover:bg-black hover:text-white"
                >
                  Check Out
                </button>
              </div>

            </div>

          </div>
        )}

      </section>
<Features />
      <Footer />
    </>
  );
};

export default Cart;