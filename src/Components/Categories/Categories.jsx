const categories = [
  {
    name: "Dining",
    image: "/dining.png",
  },
  {
    name: "Living",
    image: "/living.png",
  },
  {
    name: "Bedroom",
    image: "/bedroom.png  ",
  },
];

const CategoryCard = ({ name, image }) => {
  return (
    <div className="text-center">
      <img
        src={image}
        alt={name}
        className="w-full h-[390px] object-cover rounded-lg"
      />

      <h3 className="mt-6 text-[20px] font-bold text-gray-800">
        {name}
      </h3>
    </div>
  );
};

const BrowseRange = () => {
  return (
    <section className="py-10 px-5 md:px-10 lg:px-20">
      
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-[28px] md:text-[30px] font-bold text-gray-800">
          Browse The Range
        </h2>

        <p className="mt-1 text-[17px] text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
        {categories.map((category) => (
          <CategoryCard
            key={category.name}
            name={category.name}
            image={category.image}
          />
        ))}
      </div>

    </section>
  );
};

export default BrowseRange;