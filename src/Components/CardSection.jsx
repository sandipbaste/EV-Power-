import React from "react";

const CardSection = () => {
  const cardData = [
    {
      title: "Innovation",
      description:
        "We embrace cutting-edge technology to push the limits of EV battery solutions.",
    },
    {
      title: "Sustainability",
      description:
        "Our mission is to create eco-friendly, long-lasting battery solutions.",
    },
    {
      title: "Integrity",
      description:
        "Honesty and transparency drive our operations and decision-making.",
    },
    {
      title: "Collaboration",
      description:
        "Teamwork and partnerships fuel our innovation and success.",
    },
    {
      title: "Excellence",
      description:
        "We strive for perfection in every product and service we offer.",
    },
  ];

  return (
    <div className=" -my-20 text-gray-900">
      {/* Steps Section */}
      <section className="container mx-auto p-6">
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <h3 className="text-xl font-medium text-blue-600">{card.title}</h3>
              <p className="mt-2 text-gray-700">{card.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CardSection;
