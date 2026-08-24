import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSliders,
  faTableCells,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

function FilterBar() {
  return (
    <div className="w-full bg-[#faf5ed] px-8 py-4">
      <div className="flex items-center justify-between">

        {/* Left Side */}
        <div className="flex items-center gap-6">

          {/* Filter */}
          <button className="flex items-center gap-2 text-sm text-black">
            <FontAwesomeIcon icon={faSliders} />
            <span>Filter</span>
          </button>

          {/* Grid Icon */}
          <FontAwesomeIcon
            icon={faTableCells}
            className="text-lg text-black"
          />

          {/* List Icon */}
          <FontAwesomeIcon
            icon={faBars}
            className="text-lg text-black"
          />

          {/* Divider */}
          <div className="h-7 w-px bg-gray-400"></div>

          {/* Results */}
          <p className="text-sm text-black">
            Showing 1–16 of 32 results
          </p>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-5">

          {/* Show */}
          <div className="flex items-center gap-3">
            <span className="text-sm text-black">
              Show
            </span>

            <div className="flex h-10 w-10 items-center justify-center bg-white text-sm text-gray-400">
              16
            </div>
          </div>

          {/* Sort */}
          <div className="flex items-center gap-3">
            <span className="text-sm text-black">
              Short by
            </span>

            <div className="flex h-10 w-32 items-center bg-white px-4 text-sm text-gray-400">
              Default
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default FilterBar;