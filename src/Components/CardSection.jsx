import React from "react";

const CardSection = () => {
  return (
    <div className=" -my-20 text-gray-900">
      {/* Steps Section */}
      <section className="container mx-auto p-6">
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
          <div className="bg-white p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-medium text-blue-600">Innovation</h3>
            <p className="mt-2 text-gray-700">
              We embrace cutting-edge technology to push the limits of EV battery solutions.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-medium text-blue-600">Sustainability</h3>
            <p className="mt-2 text-gray-700">
              Our mission is to create eco-friendly, long-lasting battery solutions.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-medium text-blue-600">Integrity</h3>
            <p className="mt-2 text-gray-700">
              Honesty and transparency drive our operations and decision-making.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-medium text-blue-600">Collaboration</h3>
            <p className="mt-2 text-gray-700">
              Teamwork and partnerships fuel our innovation and success.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-medium text-blue-600">Excellence</h3>
            <p className="mt-2 text-gray-700">
              We strive for perfection in every product and service we offer.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardSection;
