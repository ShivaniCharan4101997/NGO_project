const Volunteer = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20"
      style={{ backgroundImage: "url('/images/bg_4.jpg')" }}
    >
      <div className="absolute inset-0 bg-orange-500/30 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side Image */}
        <div className="w-full">
          <img
            src="/images/bg_3.jpg"
            alt="Volunteer"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Right Side Form */}
        <form
          action="https://formspree.io/f/myzpdnnd"
          method="POST"
          className="w-full bg-orange-100/20 backdrop-blur-xl border border-white/30 p-8 rounded-2xl shadow-xl text-white"
        >
          <h2 className="text-3xl font-bold mb-6 text-center text-white">
            Be a Volunteer
          </h2>

          <div className="mb-4">
            <label className="block mb-1 text-sm">Full Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 rounded bg-white/20 placeholder-white text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-sm">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 rounded bg-white/20 placeholder-white text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-sm">Message</label>
            <textarea
              name="message"
              rows="4"
              required
              className="w-full px-4 py-2 rounded bg-white/20 placeholder-white text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Volunteer;
