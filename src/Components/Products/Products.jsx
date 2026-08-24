import ProductCard from "./ProductCard";
import products from "../../Data/Products";

const Products = () => {
  return (
    <section className="px-5 py-10 md:px-10 lg:px-20">

      {/* Heading */}
      <h2 className="mb-5 text-center text-2xl font-bold text-gray-800">
        Our Products
      </h2>

      {/* Products Grid */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
          />
        ))}
      </div>

      {/* Show More */}
      <div className="mt-5 flex justify-center">
        <button className="border border-[#b88b35] px-12 py-2 text-sm font-medium text-[#b88b35] transition hover:bg-[#b88b35] hover:text-white">
          Show More
        </button>
      </div>

    </section>
  );
};

export default Products;