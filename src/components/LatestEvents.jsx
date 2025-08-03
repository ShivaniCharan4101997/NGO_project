import React from "react";

const eventsArray = [
  {
    id: 1,
    img: "/images/event-1.jpg",
    date: "08",
    month: "AUG",
    title: "Charity for Clean Water",
    time: "10:00 AM - 2:00 PM",
    venue: "Hope Community Center",
    desc: "Join us in providing clean water to rural communities. A small river named Duden flows by their place and supplies it with the necessary regelialia.",
  },
  {
    id: 2,
    img: "/images/event-2.jpg",
    date: "08",
    month: "AUG",
    title: "World Wide Donation",
    time: "10:00 AM - 2:00 PM",
    venue: "Hope Community Center",
    desc: "Our mission is to serve the world through donations. A small river named Duden flows by their place and supplies it with the necessary regelialia.",
  },
  {
    id: 3,
    img: "/images/event-3.jpg",
    date: "08",
    month: "AUG",
    title: "Community Outreach",
    time: "10:00 AM - 2:00 PM",
    venue: "Hope Community Center",
    desc: "Come be part of a community outreach initiative. A small river named Duden flows by their place and supplies it with the necessary regelialia.",
  },
];

const LatestEvents = () => {
  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">Our Latest Events</h2>
      </div>

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {eventsArray.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 flex flex-col relative"
          >
            {/* Image */}
            <img
              src={event.img}
              alt={event.title}
              className="w-full h-56 sm:h-64 object-cover"
            />

            {/* Card Body */}
            <div className="p-6 flex flex-col flex-grow relative">
              {/* Date Badge */}
              <div className="absolute -top-6 left-6 bg-orange-500 text-white text-center w-14 h-14 rounded shadow-md flex flex-col justify-center items-center font-bold text-sm">
                <span className="text-lg">{event.date}</span>
                <span>{event.month}</span>
              </div>

              <div className="mt-10">
                <h3 className="text-xl font-semibold mb-1">{event.title}</h3>
                <p className="text-sm text-gray-600 mb-2">
                  ⏰ {event.time} | 📍 {event.venue}
                </p>
                <p className="text-sm text-gray-700 line-clamp-4">
                  {event.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestEvents;
