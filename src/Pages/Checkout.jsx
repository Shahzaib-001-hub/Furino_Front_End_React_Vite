import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { useCart } from "../Components/Context/CartContext";
import Features from "../Components/Features/Features";

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems } = useCart();

  const [paymentMethod, setPaymentMethod] =
    useState("bank");

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

      {/* Checkout Banner */}
      <section
        className="relative flex h-[230px] items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/breadcrumb.png')",
        }}
      >
        <div className="absolute inset-0 bg-white/55" />

        <div className="relative z-10 text-center">
          <img
            src="/logo_furniro.png"
            alt="Furniro"
            className="mx-auto mb-1 w-[50px]"
          />

          <h1 className="text-[36px] font-semibold text-black">
            Checkout
          </h1>

          <div className="mt-2 flex items-center justify-center gap-2 text-sm">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="font-medium text-black"
            >
              Home
            </button>

            <span>›</span>

            <span className="text-gray-600">
              Checkout
            </span>
          </div>
        </div>
      </section>

      {/* Checkout Content */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">

          {/* LEFT SIDE - BILLING DETAILS */}
          <div>
            <h2 className="mb-8 text-[26px] font-semibold text-black">
              Billing details
            </h2>

            <form className="space-y-6">

              {/* First + Last Name */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-[12px] font-medium">
                    First Name
                  </label>

                  <input
                    type="text"
                    className="h-[48px] w-full rounded border border-[#9F9F9F] px-4 outline-none focus:border-black"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[12px] font-medium">
                    Last Name
                  </label>

                  <input
                    type="text"
                    className="h-[48px] w-full rounded border border-[#9F9F9F] px-4 outline-none focus:border-black"
                  />
                </div>
              </div>

              {/* Company */}
              <div>
                <label className="mb-2 block text-[12px] font-medium">
                  Company Name (Optional)
                </label>

                <input
                  type="text"
                  className="h-[48px] w-full rounded border border-[#9F9F9F] px-4 outline-none focus:border-black"
                />
              </div>

              {/* Country */}
              <div>
                <label className="mb-2 block text-[12px] font-medium">
                  Country / Region
                </label>

                <select className="h-[48px] w-full rounded border border-[#9F9F9F] px-4 text-sm text-[#9F9F9F] outline-none">
                  <option>Sri Lanka</option>
                  <option>Pakistan</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Canada</option>
                </select>
              </div>

              {/* Street */}
              <div>
                <label className="mb-2 block text-[12px] font-medium">
                  Street address
                </label>

                <input
                  type="text"
                  className="h-[48px] w-full rounded border border-[#9F9F9F] px-4 outline-none focus:border-black"
                />
              </div>

              {/* City */}
              <div>
                <label className="mb-2 block text-[12px] font-medium">
                  Town / City
                </label>

                <input
                  type="text"
                  className="h-[48px] w-full rounded border border-[#9F9F9F] px-4 outline-none focus:border-black"
                />
              </div>

              {/* Province */}
              <div>
                <label className="mb-2 block text-[12px] font-medium">
                  Province
                </label>

                <select className="h-[48px] w-full rounded border border-[#9F9F9F] px-4 text-sm text-[#9F9F9F] outline-none">
                  <option>Western Province</option>
                  <option>Central Province</option>
                  <option>Southern Province</option>
                </select>
              </div>

              {/* ZIP */}
              <div>
                <label className="mb-2 block text-[12px] font-medium">
                  ZIP code
                </label>

                <input
                  type="text"
                  className="h-[48px] w-full rounded border border-[#9F9F9F] px-4 outline-none focus:border-black"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-[12px] font-medium">
                  Phone
                </label>

                <input
                  type="tel"
                  className="h-[48px] w-full rounded border border-[#9F9F9F] px-4 outline-none focus:border-black"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-[12px] font-medium">
                  Email address
                </label>

                <input
                  type="email"
                  className="h-[48px] w-full rounded border border-[#9F9F9F] px-4 outline-none focus:border-black"
                />
              </div>

              {/* Additional */}
              <div>
                <input
                  type="text"
                  placeholder="Additional information"
                  className="h-[48px] w-full rounded border border-[#9F9F9F] px-4 text-sm outline-none placeholder:text-[#9F9F9F] focus:border-black"
                />
              </div>

            </form>
          </div>

          {/* RIGHT SIDE */}
          <div className="pt-3">

            {/* Product / Subtotal Heading */}
            <div className="flex items-center justify-between border-b pb-4">
              <h3 className="text-[20px] font-medium">
                Product
              </h3>

              <h3 className="text-[20px] font-medium">
                Subtotal
              </h3>
            </div>

            {/* Products */}
            <div className="space-y-4 py-5">
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between text-sm"
                  >
                    <div>
                      <span className="text-[#9F9F9F]">
                        {item.name}
                      </span>

                      <span className="mx-2 text-black">
                        ×
                      </span>

                      <span>{item.quantity}</span>
                    </div>

                    <span>
                      Rp{" "}
                      {formatPrice(
                        convertPrice(item.price) *
                          item.quantity
                      )}
                    </span>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-400">
                  No products in cart
                </p>
              )}

              {/* Subtotal */}
              <div className="flex items-center justify-between text-sm">
                <span>Subtotal</span>

                <span>
                  Rp {formatPrice(subtotal)}
                </span>
              </div>

              {/* Total */}
              <div className="flex items-center justify-between">
                <span className="text-sm">
                  Total
                </span>

                <span className="text-[20px] font-semibold text-[#B88E2F]">
                  Rp {formatPrice(subtotal)}
                </span>
              </div>
            </div>

            <div className="border-t pt-6">

              {/* Direct Bank Transfer */}
              <label className="flex cursor-pointer items-center gap-3">
                <input
                  type="radio"
                  name="payment"
                  value="bank"
                  checked={paymentMethod === "bank"}
                  onChange={(e) =>
                    setPaymentMethod(e.target.value)
                  }
                  className="accent-black"
                />

                <span className="text-sm font-medium">
                  Direct Bank Transfer
                </span>
              </label>

              {paymentMethod === "bank" && (
                <p className="mt-3 text-[12px] leading-5 text-[#9F9F9F]">
                  Make your payment directly into our bank
                  account. Please use your Order ID as the
                  payment reference. Your order will not be
                  shipped until the funds have cleared in our
                  account.
                </p>
              )}

              {/* Cash */}
              <label className="mt-4 flex cursor-pointer items-center gap-3">
                <input
                  type="radio"
                  name="payment"
                  value="cash"
                  checked={paymentMethod === "cash"}
                  onChange={(e) =>
                    setPaymentMethod(e.target.value)
                  }
                  className="accent-black"
                />

                <span className="text-sm text-[#9F9F9F]">
                  Cash On Delivery
                </span>
              </label>

              {/* Privacy */}
              <p className="mt-5 text-[12px] leading-5 text-black">
                Your personal data will be used to support
                your experience throughout this website, to
                manage access to your account, and for other
                purposes described in our{" "}
                <span className="font-semibold">
                  privacy policy
                </span>
                .
              </p>

              {/* Place Order */}
              <div className="mt-8 text-center">
                <button
                  type="button"
                  className="rounded-[8px] border border-black px-14 py-3 text-sm transition hover:bg-black hover:text-white"
                >
                  Place order
                </button>
              </div>

            </div>
          </div>

        </div>
      </section>
<Features />
      <Footer />
    </>
  );
};

export default Checkout;