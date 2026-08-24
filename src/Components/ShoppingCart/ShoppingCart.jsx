import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";

const ShoppingCart = () => {
  const navigate = useNavigate();

  const {
    cartItems,
    cartOpen,
    closeCart,
    removeFromCart,
  } = useCart();

  // "2,500,000" => 2500000
  const convertPrice = (price) => {
    return Number(String(price).replace(/,/g, ""));
  };

  // Calculate subtotal
  const subtotal = cartItems.reduce((total, item) => {
    return total + convertPrice(item.price) * item.quantity;
  }, 0);

  // Format price
  const formatPrice = (price) => {
    return Number(price).toLocaleString("en-US");
  };

  // Go to Cart page
  const handleCartClick = () => {
    closeCart();
    navigate("/cart");
  };

  // Go to Checkout page
  const handleCheckoutClick = () => {
    closeCart();
    navigate("/checkout");
  };

  return (
    <>
      {/* Dark Overlay */}
      <div
        onClick={closeCart}
        className={`fixed inset-0 z-[998] bg-black/20 transition-opacity duration-300 ${
          cartOpen
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      />

      {/* Cart Drawer */}
      <div
        className={`fixed right-0 top-0 z-[999] flex h-screen w-[420px] max-w-[90%] flex-col bg-white shadow-xl transition-transform duration-300 ease-in-out ${
          cartOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="px-7 pt-7">
          <div className="flex items-center justify-between">
            <h2 className="text-[24px] font-semibold text-black">
              Shopping Cart
            </h2>

            <button
              type="button"
              onClick={closeCart}
              className="text-[19px] text-[#9F9F9F] hover:text-black"
            >
              <FontAwesomeIcon icon={faBagShopping} />
            </button>
          </div>

          <div className="mt-6 h-[1px] bg-[#D9D9D9]" />
        </div>

        {/* Cart Products */}
        <div className="flex-1 overflow-y-auto px-7 py-7">
          {cartItems.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center">
              <FontAwesomeIcon
                icon={faBagShopping}
                className="mb-4 text-4xl text-gray-300"
              />

              <p className="text-sm text-gray-500">
                Your cart is empty
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4"
                >
                  {/* Product Image */}
                  <div className="h-[105px] w-[105px] flex-shrink-0 overflow-hidden rounded-[10px] bg-[#F9F1E7]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="min-w-0 flex-1">
                    <h3 className="truncate text-[16px] text-black">
                      {item.name}
                    </h3>

                    <div className="mt-3 flex items-center gap-3">
                      <span className="text-[16px] text-black">
                        {item.quantity}
                      </span>

                      <span className="text-[12px] text-black">
                        X
                      </span>

                      <span className="text-[12px] font-medium text-[#B88E2F]">
                        Rp {item.price}
                      </span>
                    </div>
                  </div>

                  {/* Remove */}
                  <button
                    type="button"
                    onClick={() => removeFromCart(item.id)}
                    className="text-[18px] text-[#9F9F9F] hover:text-red-500"
                  >
                    <FontAwesomeIcon icon={faCircleXmark} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Bottom */}
        <div className="bg-white">
          {/* Subtotal */}
          <div className="flex items-center justify-between px-7 py-5">
            <span className="text-[16px] text-black">
              Subtotal
            </span>

            <span className="text-[16px] font-semibold text-[#B88E2F]">
              Rp {formatPrice(subtotal)}
            </span>
          </div>

          <div className="h-[1px] bg-[#D9D9D9]" />

          {/* Buttons */}
          <div className="flex items-center gap-3 px-7 py-5">

            <button
              type="button"
              onClick={handleCartClick}
              className="rounded-full border border-black px-6 py-2 text-[12px] transition hover:bg-black hover:text-white"
            >
              Cart
            </button>

            <button
              type="button"
              onClick={handleCheckoutClick}
              className="rounded-full border border-black px-6 py-2 text-[12px] transition hover:bg-black hover:text-white"
            >
              Checkout
            </button>

            <button
  type="button"
  onClick={() => {
    closeCart();
    navigate("/comparison");
  }}
  className="rounded-full border border-black px-6 py-2 text-[12px] transition hover:bg-black hover:text-white"
>
  Comparison
</button>

          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;