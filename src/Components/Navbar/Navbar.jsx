import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faMagnifyingGlass,
  faHeart,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <header className="w-full bg-white">
      <nav className="mx-auto flex h-[100px] max-w-[1286px] items-center justify-between px-6">

        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/logo_furniro.png"
            alt="Furino"
            className="h-auto w-[50px]"
            
          /><span className="text-[20px] font-bold text-black">FURINO</span>
        </div>

        {/* Navigation */}
        <div className="hidden items-center gap-12 md:flex">
          <a
            href="#"
            className="text-[16px] font-medium text-black"
          >
            Home
          </a>

          <a
            href="#"
            className="text-[16px] font-medium text-black"
          >
            Shop
          </a>

          <a
            href="#"
            className="text-[16px] font-medium text-black"
          >
            About
          </a>

          <a
            href="#"
            className="text-[16px] font-medium text-black"
          >
            Contact
          </a>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-7">

          <button className="text-black">
            <FontAwesomeIcon
              icon={faUser}
              className="text-[20px]"
            />
          </button>

          <button className="text-black">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-[21px]"
            />
          </button>

          <button className="text-black">
            <FontAwesomeIcon
              icon={faHeart}
              className="text-[21px]"
            />
          </button>

          <button className="text-black">
            <FontAwesomeIcon
              icon={faCartShopping}
              className="text-[21px]"
            />
          </button>

        </div>

      </nav>
    </header>
  );
};

export default Navbar;