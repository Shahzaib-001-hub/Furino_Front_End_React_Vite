import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

import products from "../Data/Products";

const SingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find product using URL ID
  const product = products.find(
    (item) => item.id === Number(id)
  );

  // Selected product image
  const [selectedImage, setSelectedImage] = useState(
    product?.image || ""
  );

  // Quantity
  const [quantity, setQuantity] = useState(1);

  // Update image when product changes
  useEffect(() => {
    setSelectedImage(product?.image || "");
    setQuantity(1);
  }, [product]);

  // Product not found
  if (!product) {
    return (
      <>
        <Navbar />

        <div className="flex min-h-[70vh] items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800">
              Product Not Found
            </h1>

            <button
              onClick={() => navigate("/shop")}
              className="mt-5 bg-[#b88b35] px-8 py-3 text-white"
            >
              Back To Shop
            </button>
          </div>
        </div>

        <Footer />
      </>
    );
  }

  // Increase quantity
  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  // Decrease quantity
  const decreaseQuantity = () => {
    setQuantity((prev) => {
      if (prev > 1) {
        return prev - 1;
      }

      return 1;
    });
  };

  // Related products
  const relatedProducts = product.relatedProducts
  ? product.relatedProducts
      .map((relatedId) =>
        products.find((item) => item.id === relatedId)
      )
      .filter(Boolean)
  : [];

  return (
    <>
      <Navbar />

      {/* Breadcrumb */}
      <section className="bg-[#F9F1E7] px-5 py-5 md:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">

          <div className="flex items-center gap-3 text-sm text-gray-500">

            <button
              onClick={() => navigate("/")}
              className="hover:text-black"
            >
              Home
            </button>

            <span>›</span>

            <button
              onClick={() => navigate("/shop")}
              className="hover:text-black"
            >
              Shop
            </button>

            <span>›</span>

            <span className="text-gray-800">
              {product.name}
            </span>

          </div>

        </div>
      </section>


      {/* Product Details */}
      <section className="mx-auto max-w-7xl px-5 py-10 md:px-10 lg:px-20">

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">

          {/* LEFT SIDE - PRODUCT IMAGE */}

          <div className="flex gap-5">

            {/* Thumbnail */}
            <div className="w-20">

              <button
                onClick={() => setSelectedImage(product.image)}
                className={`mb-4 h-20 w-20 overflow-hidden rounded bg-[#F9F1E7] ${
                  selectedImage === product.image
                    ? "ring-2 ring-[#b88b35]"
                    : ""
                }`}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              </button>

            </div>

            {/* Main Image */}
            <div className="flex h-[450px] flex-1 items-center justify-center overflow-hidden rounded bg-[#F9F1E7]">

              <img
                src={selectedImage}
                alt={product.name}
                className="h-full w-full object-contain"
              />

            </div>

          </div>


          {/* RIGHT SIDE - PRODUCT INFO */}

          <div>

            {/* Product Name */}
            <h1 className="text-3xl font-semibold text-gray-800 md:text-4xl">
              {product.name}
            </h1>


            {/* Price */}
            <div className="mt-3 flex items-center gap-4">

              <span className="text-xl font-medium text-gray-500">
                Rp {product.price}
              </span>

              {product.oldPrice && (
                <span className="text-sm text-gray-400 line-through">
                  Rp {product.oldPrice}
                </span>
              )}

            </div>


            {/* Rating */}
            <div className="mt-5 flex items-center gap-3">

              <div className="text-yellow-400">
                ★ ★ ★ ★ ★
              </div>

              <span className="text-sm text-gray-400">
                5 Customer Reviews
              </span>

            </div>


            {/* Description */}
            <p className="mt-6 max-w-xl text-sm leading-7 text-gray-600">
              {product.description}
            </p>


            {/* Quantity */}
            <div className="mt-8">

              <p className="mb-3 text-sm text-gray-500">
                Quantity
              </p>

              <div className="flex w-fit items-center rounded border border-gray-400">

                <button
                  onClick={decreaseQuantity}
                  className="px-4 py-3 text-gray-700 hover:bg-gray-100"
                >
                  -
                </button>

                <span className="min-w-[40px] text-center">
                  {quantity}
                </span>

                <button
                  onClick={increaseQuantity}
                  className="px-4 py-3 text-gray-700 hover:bg-gray-100"
                >
                  +
                </button>

              </div>

            </div>


            {/* Buttons */}
            <div className="mt-6 flex flex-wrap gap-4">

              <button
                className="rounded border border-gray-400 px-8 py-3 transition hover:bg-black hover:text-white"
              >
                Add To Cart
              </button>

              <button
                className="rounded border border-gray-400 px-8 py-3 transition hover:bg-black hover:text-white"
              >
                + Compare
              </button>

            </div>


            {/* Product Information */}
            <div className="mt-10 border-t pt-6">

              <div className="mb-3 flex text-sm text-gray-500">

                <span className="w-24">
                  SKU : 
                </span>

                <span>
                  : {product.SKU}
                </span>

              </div>

              <div className="mb-3 flex text-sm text-gray-500">

                <span className="w-24">
                  Category
                </span>

                <span>
                  : Furniture
                </span>

              </div>

              <div className="flex text-sm text-gray-500">

                <span className="w-24">
                  Tags
                </span>

                <span>
                  : Chair, Home, Furniture
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* Description */}
      <section className="border-t">

        <div className="mx-auto max-w-7xl px-5 py-12 md:px-10 lg:px-20">

          <div className="border-b pb-5">

            <div className="flex flex-wrap justify-center gap-8">

              <button className="font-semibold text-gray-800">
                Description
              </button>

              <button className="text-gray-400">
                Additional Information
              </button>

              <button className="text-gray-400">
                Reviews [5]
              </button>

            </div>

          </div>

          <div className="mx-auto mt-8 max-w-5xl">

            <p className="text-sm leading-7 text-gray-500">
              {product.description}
            </p>

            <p className="mt-5 text-sm leading-7 text-gray-500">
              This product is designed with comfort, quality,
              and modern style in mind. It is suitable for
              contemporary interiors and everyday use.
            </p>

          </div>

        </div>

      </section>


      {/* Related Products */}
      <section className="mx-auto max-w-7xl px-5 py-12 md:px-10 lg:px-20">

        <h2 className="mb-8 text-center text-3xl font-semibold text-gray-800">
          Related Products
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {relatedProducts.map((item) => (

            <div
              key={item.id}
              onClick={() => navigate(`/product/${item.id}`)}
              className="group cursor-pointer overflow-hidden bg-[#F4F5F7]"
            >

              <div className="h-[220px] overflow-hidden">

                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />

              </div>

              <div className="p-4">

                <h3 className="font-bold text-gray-700">
                  {item.name}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  {item.description}
                </p>

                <p className="mt-2 font-bold text-gray-700">
                  Rp {item.price}
                </p>

              </div>

            </div>

          ))}

        </div>

      </section>

      <Footer />
    </>
  );
};

export default SingleProduct;