import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

import ProductCard from "../Components/Products/ProductCard";
import products from "../Data/Products";

const Shop = () => {
  return (
    <>
      <Navbar />

      <main>

        {/* Breadcrumb */}
        <section
          className="relative bg-cover bg-center py-20"
          style={{
            backgroundImage:
              "url('/images/breadcrumb-bg.jpg')",
          }}
        >

          <div className="absolute inset-0 bg-black/20"></div>

          <div className="relative z-10 text-center">

            <h1 className="text-4xl font-bold text-white">
              Shop
            </h1>

            <div className="mt-3 flex justify-center gap-2 text-sm text-white">

              <span>
                Home
              </span>

              <span>›</span>

              <span>
                Shop
              </span>

            </div>

          </div>

        </section>


        {/* Products */}
        <section className="mx-auto max-w-7xl px-6 py-12">

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {products.map((product) => (

              <ProductCard
                key={product.id}
                {...product}
              />

            ))}

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
};

export default Shop;