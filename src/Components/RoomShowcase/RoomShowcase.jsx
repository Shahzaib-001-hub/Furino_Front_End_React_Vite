import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import RoomImage from "./RoomImage";

const RoomShowcase = () => {
  return (
    <section className="w-full px-5 py-8 md:px-10">

      <div className="max-w-[1200px] mx-auto border-2 ">

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.7fr] gap-8 p-6 md:p-8">

          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-center px-2 md:px-8">

            <h2 className="text-3xl md:text-[30px] leading-[1.05] font-bold text-[#3d3d3d] max-w-[280px]">
              50+ Beautiful rooms inspiration
            </h2>

            <p className="mt-3 text-[12px] leading-5 text-gray-500 max-w-[280px]">
              Our designer already made a lot of beautiful
              prototype of rooms that inspire you
            </p>

            <button
              className="
                mt-4
                w-fit
                bg-[#c7942c]
                hover:bg-[#b38323]
                text-white
                text-[11px]
                font-medium
                px-6
                py-2.5
                transition
              "
            >
              Explore More
            </button>

          </div>

          {/* RIGHT IMAGES */}
          <div className="relative">

            <div className="grid grid-cols-1 sm:grid-cols-[1.1fr_1fr] gap-3">

              {/* MAIN IMAGE */}
              <RoomImage
                image="/Room1.png"
                number="01"
                category="Bed Room"
                title="Inner Peace"
                large={true}
              />

              {/* SECOND IMAGE */}
              <div className="relative overflow-hidden h-[260px] md:h-[260px]">

                <img
                  src="/Room2.png"
                  alt="Room inspiration"
                  className="w-full h-full object-cover"
                />

                {/* ARROW */}
                <button
                  className="
                    absolute
                    
                    bg-white
                    w-10
                    h-10
                    rounded-full
                    shadow-md
                    flex
                    items-center
                    justify-center
                    z-10
                  "
                >
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="text-[#c7942c] text-sm"
                  />
                </button>

              </div>

            </div>

            {/* SLIDER DOTS */}
            <div className="flex items-center gap-3 mt-5">

              <span
                className="
                  w-4
                  h-4
                  rounded-full
                  border
                  border-[#c7942c]
                  flex
                  items-center
                  justify-center
                "
              >
                <span className="w-1.5 h-1.5 bg-[#c7942c] rounded-full"></span>
              </span>

              <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>

              <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>

              <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default RoomShowcase;