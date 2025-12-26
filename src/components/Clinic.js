import React from 'react';

export default function Clinics() {
  const clinics = [
    { title: 'Urologists', icon: '🧑‍⚕️' },
    { title: 'Sexologists', icon: '⚥' },
    { title: 'Men’s Health Clinics', icon: '❤️' },
    { title: 'IVF & Fertility Clinics', icon: '👶' },
    { title: 'Aesthetic Surgeons', icon: '✨' },
    { title: 'Kidney Care Experts', icon: '🫘' },
    { title: 'Dermatologists', icon: '🧴' },
    { title: 'Gastroenterologists', icon: '🩺' }
  ];

  return (
    <section id="clinics" className="bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-white text-center mb-14">
          This is Exclusively For:
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {clinics.map((clinic, index) => (
            <div
              key={index}
              className="bg-[#5b5b5b] border-2 border-white rounded-2xl 
                         overflow-hidden group hover:scale-105 transition duration-300"
            >
              {/* Title Bar */}
              <div className="bg-[#6b6b6b] text-white font-bold text-center py-3 text-lg">
                {clinic.title}
              </div>

              {/* Icon */}
              <div
                className="flex items-center justify-center h-40 text-7xl
                              animate-float group-hover:drop-shadow-[0_0_15px_white] transition"
              >
                {clinic.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
