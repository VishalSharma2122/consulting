import React, { useState } from "react";

export default function ClientSuccess() {
  const contents = [
    {
      image: "https://static.vecteezy.com/system/resources/thumbnails/069/459/565/small/smiling-adult-man-in-light-blue-t-shirt-against-clean-white-background-photo.jpeg",
      title: "Meet Dhiraj Jaiswal",
      text: "The Visionary Leader in Healthcare Marketing with over 4 years of experience and 100+ clinics transformed. His proven Big Daddy System helps clinics scale predictably."
    },
    {
      image: "https://static.vecteezy.com/system/resources/thumbnails/069/459/565/small/smiling-adult-man-in-light-blue-t-shirt-against-clean-white-background-photo.jpeg",
      title: "100+ Clinics Scaled",
      text: "UpGro Media has helped over 100 clinics achieve predictable patient acquisition using performance marketing and funnel optimization."
    },
    {
      image: "https://static.vecteezy.com/system/resources/thumbnails/069/459/565/small/smiling-adult-man-in-light-blue-t-shirt-against-clean-white-background-photo.jpeg",
      title: "Result Driven Systems",
      text: "From paid ads to high-converting consultation funnels, our systems are built for measurable growth and long-term scalability."
    },
    {
      image: "https://static.vecteezy.com/system/resources/thumbnails/069/459/565/small/smiling-adult-man-in-light-blue-t-shirt-against-clean-white-background-photo.jpeg",
      title: "Healthcare Marketing Authority",
      text: "Recognized as a trusted growth partner for healthcare professionals across India."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const active = contents[activeIndex];

  return (
    <section className="bg-black py-20">
      <h2 className="text-4xl font-extrabold text-white text-center mb-16">
          Meet Our Team
          <span className="block w-32 h-1 bg-cyan-400 mx-auto mt-4 rounded-full"></span>
        </h2>
      <div className="max-w-6xl mx-auto px-6">

        {/* IMAGE */}
        <div className="rounded-2xl overflow-hidden mb-8 transition-all duration-500">
          <img
            src={active.image}
            alt={active.title}
            className="w-full h-[500px] object-cover"
          />
        </div>

        {/* TEXT */}
        <div className="text-white mb-10">
          <h2 className="text-4xl font-bold mb-4">
            {active.title}
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            {active.text}
          </p>
        </div>

        {/* CONTROLS */}
        <div className="flex flex-wrap gap-4">
          {contents.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`px-6 py-3 rounded-full font-semibold transition
                ${
                  activeIndex === index
                    ? "bg-yellow-400 text-black"
                    : "bg-gray-800 text-white hover:bg-gray-700"
                }`}
            >
              {index + 1}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
