import React from "react";

const GridPictures = [
  { img: "/images/image_1.jpg" },
  { img: "/images/image_2.jpg" },
  { img: "/images/image_3.jpg" },
  { img: "/images/image_4.jpg" },
  { img: "/images/image_5.jpg" },
  { img: "/images/image_6.jpg" },
  { img: "/images/event-4.jpg" },
  { img: "/images/cause-2.jpg" },
];

const GridPicture = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {GridPictures.map((item, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md">
              <img
                src={item.img}
                alt={`gallery-${index}`}
                className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GridPicture;
