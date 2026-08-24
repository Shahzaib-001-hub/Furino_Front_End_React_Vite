import { useState } from "react";
import { useNavigate } from "react-router-dom";

import products from "../Data/Products";
import { useCart } from "../Components/Context/CartContext";
import Navbar from "../Components/Navbar/Navbar";
import Features from "../Components/Features/Features";
import Footer from "../Components/Footer/Footer";

const Comparison = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // Default comparison products
  const [selectedProducts, setSelectedProducts] = useState([
    products[0],
    products[1],
  ]);

  const handleAddProduct = (e) => {
    const productId = Number(e.target.value);

    if (!productId) return;

    const selectedProduct = products.find(
      (product) => product.id === productId
    );

    if (!selectedProduct) return;

    const alreadyAdded = selectedProducts.some(
      (product) => product.id === selectedProduct.id
    );

    if (alreadyAdded) return;

    // Screenshot jaisa 2 comparison products rakhenge
    setSelectedProducts((prev) => {
      if (prev.length >= 2) {
        return [prev[1], selectedProduct];
      }

      return [...prev, selectedProduct];
    });
  };

  const comparisonData = {
    general: [
      {
        label: "Sales Package",
        values: ["1 sectional sofa", "Three Seater, 2 Single Seater"],
      },
      {
        label: "Model Number",
        values: ["TFCBLIGRBL6SRHS", "DTUBLIGRBL568"],
      },
      {
        label: "Secondary Material",
        values: ["Solid Wood", "Solid Wood"],
      },
      {
        label: "Configuration",
        values: ["L-shaped", "L-shaped"],
      },
      {
        label: "Upholstery Material",
        values: ["Fabric + Cotton", "Fabric + Cotton"],
      },
      {
        label: "Upholstery Color",
        values: ["Bright Grey & Lion", "Bright Grey & Lion"],
      },
    ],

    product: [
      {
        label: "Filling Material",
        values: ["Foam", "Matte"],
      },
      {
        label: "Finish Type",
        values: ["Bright Grey & Lion", "Bright Grey & Lion"],
      },
      {
        label: "Adjustable Headrest",
        values: ["No", "Yes"],
      },
      {
        label: "Maximum Load Capacity",
        values: ["280 KG", "300 KG"],
      },
      {
        label: "Origin of Manufacture",
        values: ["India", "India"],
      },
    ],

    dimensions: [
      {
        label: "Width",
        values: ["265.32 cm", "265.32 cm"],
      },
      {
        label: "Height",
        values: ["76 cm", "76 cm"],
      },
      {
        label: "Depth",
        values: ["167.76 cm", "167.76 cm"],
      },
      {
        label: "Weight",
        values: ["45 KG", "65 KG"],
      },
      {
        label: "Seat Height",
        values: ["41.52 cm", "41.52 cm"],
      },
      {
        label: "Leg Height",
        values: ["5.46 cm", "5.46 cm"],
      },
    ],

    warranty: [
      {
        label: "Warranty Summary",
        values: [
          "1 Year Manufacturing Warranty",
          "1.2 Year Manufacturing Warranty",
        ],
      },
      {
        label: "Warranty Service Type",
        values: [
          "For Warranty Claims or Any Product Related Issues Please Email to operations@furniro.com",
          "For Warranty Claims or Any Product Related Issues Please Email to support@furniro.com",
        ],
      },
      {
        label: "Covered in Warranty",
        values: [
          "Warranty Against Manufacturing Defect",
          "Warranty of the product is limited to manufacturing defects only.",
        ],
      },
      {
        label: "Not Covered in Warranty",
        values: [
          "The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear.",
          "The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use.",
        ],
      },
      {
        label: "Domestic Warranty",
        values: ["1 Year", "3 Months"],
      },
    ],
  };

  const renderSection = (title, rows) => {
    return (
      <>
    
        {/* Section Heading */}
        <div className="border-r border-[#E8E8E8] px-5 py-6">
          <h3 className="text-[17px] font-medium text-black">
            {title}
          </h3>
        </div>

        <div className="border-r border-[#E8E8E8]" />
        <div className="border-r border-[#E8E8E8]" />

        {/* Rows */}
        {rows.map((row, index) => (
          <div key={`${title}-${index}`} className="contents">

            {/* Label */}
            <div className="border-r border-[#E8E8E8] px-5 py-3 text-[12px] text-black">
              {row.label}
            </div>

            {/* Product 1 */}
            <div className="border-r border-[#E8E8E8] px-5 py-3 text-[12px] leading-5 text-black">
              {row.values[0]}
            </div>

            {/* Product 2 */}
            <div className="border-r border-[#E8E8E8] px-5 py-3 text-[12px] leading-5 text-black">
              {row.values[1]}
            </div>

          </div>
        ))}
      </>
    );
  };

  return (
    <>
    <Navbar />
      {/* HERO */}
      <section
        className="relative flex h-[220px] items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/breadcrumb.png')",
        }}
      >
        <div className="absolute inset-0 bg-white/50" />

        <div className="relative z-10 text-center">
          <img
            src="/logo_furniro.png"
            alt="Furniro"
            className="mx-auto w-[45px]"
          />

          <h1 className="text-[34px] font-medium text-black md:text-[38px]">
            Product Comparison
          </h1>

          <div className="mt-1 flex items-center justify-center gap-2 text-[12px]">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="font-semibold"
            >
              Home
            </button>

            <span>›</span>

            <span>Comparison</span>
          </div>
        </div>
      </section>

      {/* TOP COMPARISON AREA */}
      <section className="mx-auto max-w-7xl px-5 py-10 md:px-10 lg:px-16">

        <div className="grid grid-cols-1 gap-8 border-b border-[#E8E8E8] pb-8 md:grid-cols-[1fr_1.3fr_1.3fr_1fr]">

          {/* Intro */}
          <div>
            <h2 className="max-w-[180px] text-[22px] font-medium leading-7">
              Go to Product page for more Products
            </h2>

            <button
              type="button"
              onClick={() => navigate("/shop")}
              className="mt-3 border-b border-[#727272] pb-1 text-[13px] text-[#727272]"
            >
              View More
            </button>
          </div>

          {/* Product 1 */}
          {selectedProducts[0] && (
            <div>
              <div className="flex h-[130px] items-center justify-center overflow-hidden rounded-[6px] bg-[#F9F1E7]">
                <img
                  src={selectedProducts[0].image}
                  alt={selectedProducts[0].name}
                  className="h-full w-full object-contain"
                />
              </div>

              <h3 className="mt-3 text-[16px] font-medium">
                {selectedProducts[0].name}
              </h3>

              <p className="mt-1 text-[13px] font-medium">
                Rs. {selectedProducts[0].price}
              </p>

              <div className="mt-1 text-[11px]">
                <span>4.7</span>
                <span className="ml-2 text-[#FFC700]">
                  ★★★★★
                </span>
              </div>
            </div>
          )}

          {/* Product 2 */}
          {selectedProducts[1] && (
            <div>
              <div className="flex h-[130px] items-center justify-center overflow-hidden rounded-[6px] bg-[#F9F1E7]">
                <img
                  src={selectedProducts[1].image}
                  alt={selectedProducts[1].name}
                  className="h-full w-full object-contain"
                />
              </div>

              <h3 className="mt-3 text-[16px] font-medium">
                {selectedProducts[1].name}
              </h3>

              <p className="mt-1 text-[13px] font-medium">
                Rs. {selectedProducts[1].price}
              </p>

              <div className="mt-1 text-[11px]">
                <span>4.2</span>
                <span className="ml-2 text-[#FFC700]">
                  ★★★★☆
                </span>
              </div>
            </div>
          )}

          {/* ADD PRODUCT */}
          <div>
            <h3 className="mb-3 text-[16px] font-semibold">
              Add A Product
            </h3>

            <select
              defaultValue=""
              onChange={handleAddProduct}
              className="h-[40px] w-full max-w-[190px] rounded-[4px] bg-[#B88E2F] px-4 text-[12px] text-white outline-none"
            >
              <option value="" disabled>
                Choose a Product
              </option>

              {products.map((product) => (
                <option
                  key={product.id}
                  value={product.id}
                  className="bg-white text-black"
                >
                  {product.name}
                </option>
              ))}
            </select>
          </div>

        </div>

        {/* COMPARISON TABLE */}
        <div className="mt-0 overflow-x-auto">

          <div className="grid min-w-[800px] grid-cols-[1fr_1.3fr_1.3fr]">

            {renderSection(
              "General",
              comparisonData.general
            )}

            {renderSection(
              "Product",
              comparisonData.product
            )}

            {renderSection(
              "Dimensions",
              comparisonData.dimensions
            )}

            {renderSection(
              "Warranty",
              comparisonData.warranty
            )}

            {/* Bottom Empty Label */}
            <div className="border-r border-[#E8E8E8] px-5 py-6" />

            {/* Add Product 1 To Cart */}
            <div className="border-r border-[#E8E8E8] px-5 py-6">
              {selectedProducts[0] && (
                <button
                  type="button"
                  onClick={() =>
                    addToCart(selectedProducts[0], 1)
                  }
                  className="bg-[#B88E2F] px-7 py-3 text-[12px] text-white transition hover:bg-[#9f7625]"
                >
                  Add To Cart
                </button>
              )}
            </div>

            {/* Add Product 2 To Cart */}
            <div className="border-r border-[#E8E8E8] px-5 py-6">
              {selectedProducts[1] && (
                <button
                  type="button"
                  onClick={() =>
                    addToCart(selectedProducts[1], 1)
                  }
                  className="bg-[#B88E2F] px-7 py-3 text-[12px] text-white transition hover:bg-[#9f7625]"
                >
                  Add To Cart
                </button>
              )}
            </div>

          </div>

        </div>
      </section>
      <Features />
      <Footer />
    </>
  );
};

export default Comparison;