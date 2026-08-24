import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faShareNodes,
  faCodeCompare,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

import { useNavigate } from "react-router-dom";

const ProductCard = ({
  id,
  image,
  name,
  description,
  price,
  oldPrice,
  discount,
  isNew,
}) => {
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div
      onClick={handleProductClick}
      className="group relative cursor-pointer overflow-hidden bg-[#f4f5f7]"
    >
      {/* Image */}
      <div className="relative h-[220px] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover"
        />

        {/* Discount */}
        {discount && (
          <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-red-400 text-[11px] text-white">
            {discount}
          </span>
        )}

        {/* New */}
        {isNew && (
          <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#2ec4b6] text-[10px] text-white">
            New
          </span>
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 opacity-0 transition duration-300 group-hover:opacity-100">
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/product/${id}`);
            }}
            className="mb-4 bg-white px-10 py-3 text-sm font-semibold text-[#b88b35]"
          >
            View Product
          </button>

          <div className="flex gap-4 text-xs text-white">
            <span
              onClick={(e) => e.stopPropagation()}
              className="cursor-pointer"
            >
              <FontAwesomeIcon icon={faShareNodes} /> Share
            </span>

            <span
              onClick={(e) => e.stopPropagation()}
              className="cursor-pointer"
            >
              <FontAwesomeIcon icon={faCodeCompare} /> Compare
            </span>

            <span
              onClick={(e) => e.stopPropagation()}
              className="cursor-pointer"
            >
              <FontAwesomeIcon icon={faHeart} /> Like
            </span>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="px-3 py-3">
        <h3 className="text-[15px] font-bold text-gray-700">
          {name}
        </h3>

        <p className="mt-1 text-[11px] text-gray-500">
          {description}
        </p>

        <div className="mt-1 flex items-center gap-3">
          <span className="text-[14px] font-bold text-gray-700">
            Rp {price}
          </span>

          {oldPrice && (
            <span className="text-[11px] text-gray-400 line-through">
              Rp {oldPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;