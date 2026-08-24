import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faMagnifyingGlass,
  faHeart,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

import { useCart } from "../Context/CartContext";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

const Navbar = () => {
  const { cartOpen, setCartOpen } = useCart();

  return (
    <>
      <header className="w-full bg-white">
        <nav className="mx-auto flex h-[100px] max-w-[1286px] items-center justify-between px-6">

          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/logo_furniro.png"
              alt="Furino"
              className="h-auto w-[50px]"
            />

            <span className="text-[20px] font-bold text-black">
              FURINO
            </span>
          </div>

          {/* Navigation */}
          <div className="hidden items-center gap-12 md:flex">
            <a
              href="/"
              className="text-[16px] font-medium text-black"
            >
              Home
            </a>

            <a
              href="/shop"
              className="text-[16px] font-medium text-black"
            >
              Shop
            </a>

            <a
              href="/blog"
              className="text-[16px] font-medium text-black"
            >
              Blog
            </a>

            <a
              href="/contact"
              className="text-[16px] font-medium text-black"
            >
              Contact
            </a>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-7">

            <button
              type="button"
              className="text-black"
              aria-label="User"
            >
              <FontAwesomeIcon
                icon={faUser}
                className="text-[20px]"
              />
            </button>

            <button
              type="button"
              className="text-black"
              aria-label="Search"
            >
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="text-[21px]"
              />
            </button>

            <button
              type="button"
              className="text-black"
              aria-label="Wishlist"
            >
              <FontAwesomeIcon
                icon={faHeart}
                className="text-[21px]"
              />
            </button>

            {/* Cart Toggle */}
            <button
              type="button"
              onClick={() => setCartOpen(!cartOpen)}
              className="text-black"
              aria-label="Shopping Cart"
            >
              <FontAwesomeIcon
                icon={faCartShopping}
                className="text-[21px]"
              />
            </button>

          </div>

        </nav>
      </header>

      {/* Right Side Shopping Cart */}
      <ShoppingCart />
    </>
  );
};

export default Navbar;