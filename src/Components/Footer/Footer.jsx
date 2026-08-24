import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white px-6 sm:px-10 lg:px-16 pt-12 pb-7">
      <div className="max-w-[1320px] mx-auto">

        {/* Main Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20 pb-10">

          {/* Brand / Address */}
          <div>
            <h2 className="text-[22px] font-bold text-black mb-8">
              Furino.
            </h2>

            <p className="text-[14px] leading-6 text-gray-400 max-w-[250px]">
              400 University Drive Suite 200 Coral
              <br />
              Gables,
              <br />
              FL 33134 USA
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-[14px] text-gray-400 mb-8">
              Links
            </h3>

            <ul className="space-y-7">
              <li>
                <a
                  href="/"
                  className="text-[15px] text-black hover:text-gray-500 transition"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/shop"
                  className="text-[15px] text-black hover:text-gray-500 transition"
                >
                  Shop
                </a>
              </li>

              <li>
                <a
                  href="/about"
                  className="text-[15px] text-black hover:text-gray-500 transition"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="/contact"
                  className="text-[15px] text-black hover:text-gray-500 transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-[14px] text-gray-400 mb-8">
              Help
            </h3>

            <ul className="space-y-7">
              <li>
                <a
                  href="/payment-options"
                  className="text-[15px] text-black hover:text-gray-500 transition"
                >
                  Payment Options
                </a>
              </li>

              <li>
                <a
                  href="/returns"
                  className="text-[15px] text-black hover:text-gray-500 transition"
                >
                  Returns
                </a>
              </li>

              <li>
                <a
                  href="/privacy-policy"
                  className="text-[15px] text-black hover:text-gray-500 transition"
                >
                  Privacy Policies
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-[14px] text-gray-400 mb-8">
              Newsletter
            </h3>

            <form className="flex items-center gap-3">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="w-[180px] border-b border-gray-500 pb-2 text-[13px] text-gray-600 placeholder:text-gray-400 outline-none bg-transparent"
              />

              <button
                type="submit"
                className="text-[12px] font-medium uppercase text-black border-b border-black pb-2 hover:text-gray-500 hover:border-gray-500 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 pt-6">
          <p className="text-[14px] text-black">
            2023 furino. All rights reserved
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;