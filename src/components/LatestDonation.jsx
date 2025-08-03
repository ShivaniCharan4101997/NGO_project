import React from "react";

const Donations = [
  {
    img: "/images/person_1.jpg",
    name: "John Doe",
    amount: "$200",
    date: "Aug 1, 2025",
    message: "Happy to help the cause!",
  },
  {
    img: "/images/person_2.jpg",
    name: "Jane Smith",
    amount: "$150",
    date: "Aug 2, 2025",
    message: "Keep up the great work!",
  },
  {
    img: "/images/person_3.jpg",
    name: "Ali Khan",
    amount: "$300",
    date: "Aug 3, 2025",
    message: "For the children ❤️",
  },
];

const LatestDonation = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="text-center mb-10 px-4">
        <h2 className="text-3xl font-bold text-gray-800">Latest Donations</h2>
        <p className="text-gray-600 max-w-xl mx-auto mt-2">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Donations.map((donor, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center"
          >
            <img
              src={donor.img}
              alt={donor.name}
              className="w-20 h-20 rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              {donor.name}
            </h3>
            <p className="text-sm text-gray-600">
              {donor.amount} on {donor.date}
            </p>
            <p className="text-sm text-gray-500 italic mt-2">
              "{donor.message}"
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestDonation;
