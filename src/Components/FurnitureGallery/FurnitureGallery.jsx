const FurnitureGallery = () => {
  const galleryImages = [
    {
      src: "/gallery/furniture-1.png",
      alt: "Furniture setup",
      className:
        "left-[0%] top-[0%] w-[5.5%] h-[53%]",
    },
    {
      src: "/gallery/furniture-2.png",
      alt: "Desk setup",
      className:
        "left-[6.5%] top-[9%] w-[31.5%] h-[44%]",
    },
    {
      src: "/gallery/furniture-3.png",
      alt: "Dining room",
      className:
        "left-[38.9%] top-[20%] w-[20.6%] h-[55%]",
    },
    {
      src: "/gallery/furniture-4.png",
      alt: "Home decor",
      className:
        "left-[6.5%] top-[55%] w-[24%] h-[43%]",
    },
    {
      src: "/gallery/furniture-5.png",
      alt: "Chair",
      className:
        "left-[0%] top-[55%] w-[12.8%] h-[45%]",
    },
    {
      src: "/gallery/furniture-6.png",
      alt: "Bedroom",
      className:
        "left-[60.5%] top-[10%] w-[20.3%] h-[50%]",
    },
    {
      src: "/gallery/furniture-7.png",
      alt: "Kitchen",
      className:
        "left-[82%] top-[0%] w-[18%] h-[50%]",
    },
    {
      src: "/gallery/furniture-8.png",
      alt: "Home decor",
      className:
        "left-[60.5%] top-[61%] w-[12.2%] h-[30%]",
    },
    {
      src: "/gallery/furniture-9.png",
      alt: "Kitchen interior",
      className:
        "left-[73%] top-[61%] w-[27%] h-[30%]",
    },
  ];

  return (
    <section className="w-full bg-white py-12 sm:py-16">
      {/* Heading */}
      <div className="mb-8 text-center">
        <p className="mb-1 text-sm font-medium text-gray-500">
          Share your setup with
        </p>

        <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">
          #FuniroFurniture
        </h2>
      </div>

      {/* Gallery */}
      <div className="mx-auto w-full max-w-[1200px] px-4">
        <div className="relative aspect-[2/1] w-full overflow-hidden">

          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`absolute overflow-hidden ${image.className}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover"
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default FurnitureGallery;