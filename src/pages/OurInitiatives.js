import React from 'react';

const initiatives = [
  {
    title: "Community Development",
    description: "Empowering communities through targeted programs and resources.",
    image: "https://source.unsplash.com/random/400x300?community",
  },
  {
    title: "Education for All",
    description: "Making quality education accessible to everyone.",
    image: "https://source.unsplash.com/random/400x300?education",
  },
  {
    title: "Sustainability Projects",
    description: "Promoting eco-friendly initiatives for a greener future.",
    image: "https://source.unsplash.com/random/400x300?sustainability",
  },
];

const OurInitiatives = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-blue-600 text-white py-4 text-center text-2xl font-bold">
        Our Initiatives & Get Involved
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Initiatives</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {initiatives.map((initiative, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
              >
                <img
                  src={initiative.image}
                  alt={initiative.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {initiative.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{initiative.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center bg-blue-100 py-12 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Get Involved</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Join us in making a difference. Volunteer, donate, or spread the word to
            support our initiatives.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300">
            Become a Volunteer
          </button>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-4 text-center">
        © 2025 Our Organization. All Rights Reserved.
      </footer>
    </div>
  );
};

export default OurInitiatives;
