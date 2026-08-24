import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const RoomImage = ({
  image,
  number,
  category,
  title,
  large = false,
}) => {
  return (
    <div
      className={`relative overflow-hidden ${
        large ? "h-[310px] md:h-[310px]" : "h-[260px] md:h-[260px]"
      }`}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />

      {large && (
        <div className="absolute bottom-0 left-0 bg-white/90 px-5 py-4 w-[65%]">
          <p className="text-[11px] text-gray-500 mb-1">
            {number} — {category}
          </p>

          <div className="flex items-center justify-between">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700">
              {title}
            </h3>

            <button className="w-8 h-8 bg-[#c7942c] text-white flex items-center justify-center">
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-xs"
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoomImage;