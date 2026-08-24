import { useState } from "react";
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

  const [liked, setLiked] = useState(false);

  // Open Single Product
  const handleProductClick = () => {
    navigate(`/product/${id}`);
  };

  // Compare
  const handleCompare = (e) => {
    e.stopPropagation();

    navigate("/comparison");
  };

  // Like
  const handleLike = (e) => {
    e.stopPropagation();

    setLiked((prev) => !prev);
  };

  // Share
  const handleShare = async (e) => {
    e.stopPropagation();

    const productUrl = `${window.location.origin}/product/${id}`;

    try {
      if (navigator.share) {
        await navigator.share({
          title: name,
          text: `Check out ${name}`,
          url: productUrl,
        });
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(productUrl);
        alert("Product link copied!");
      }
    } catch (error) {
      console.log("Share cancelled");
    }
  };

  return (
    <div
      onClick={handleProductClick}
      className="group relative cursor-pointer overflow-hidden bg-[#f4f5f7]"
    >
      {/* Product Image */}
      <div className="relative h-[220px] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover"
        />

        {/* Discount Badge */}
        {discount && (
          <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-red-400 text-[11px] text-white">
            {discount}
          </span>
        )}

        {/* New Badge */}
        {isNew && (
          <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#2ec4b6] text-[10px] text-white">
            New
          </span>
        )}

        {/* Hover Overlay */}
        <div
          className="
            absolute inset-0
            flex flex-col
            items-center justify-center
            bg-black/55
            opacity-0
            transition duration-300
            group-hover:opacity-100
          "
        >
          {/* View Product */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/product/${id}`);
            }}
            className="
              mb-5
              bg-white
              px-10 py-3
              text-sm font-semibold
              text-[#B88E2F]
              transition
              hover:bg-[#B88E2F]
              hover:text-white
            "
          >
            View Product
          </button>

          {/* Actions */}
          <div className="flex items-center gap-5 text-[12px] font-semibold text-white">

            {/* Share */}
            <button
              type="button"
              onClick={handleShare}
              className="flex items-center gap-1.5 transition hover:text-[#B88E2F]"
            >
              <FontAwesomeIcon icon={faShareNodes} />
              Share
            </button>

            {/* Compare */}
            <button
              type="button"
              onClick={handleCompare}
              className="flex items-center gap-1.5 transition hover:text-[#B88E2F]"
            >
              <FontAwesomeIcon icon={faCodeCompare} />
              Compare
            </button>

            {/* Like */}
            <button
              type="button"
              onClick={handleLike}
              className={`flex items-center gap-1.5 transition ${
                liked
                  ? "text-red-500"
                  : "text-white hover:text-red-400"
              }`}
            >
              <FontAwesomeIcon icon={faHeart} />
              {liked ? "Liked" : "Like"}
            </button>

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