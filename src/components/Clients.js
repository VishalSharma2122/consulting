import React from 'react';

export default function Clients() {
  const clientsRow1 = [
    'Dr. A.K Jain Clinic',
    'Ask Dr Jain',
    'Awish Skin & Hair',
    'Arunveda',
    'Tej Clinic'
  ];

  const clientsRow2 = [
    'Kundan Kidney Care',
    'Tej Clinic',
    'Arunveda',
    'Awish Skin & Hair',
    'Ask Dr Jain'
  ];

  return (
    <section className="bg-black py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-white text-center mb-16">
          OUR CLIENTS
          <span className="block w-32 h-1 bg-cyan-400 mx-auto mt-4 rounded-full"></span>
        </h2>

        {/* Row 1 - Left to Right */}
        <div className="relative w-full overflow-hidden mb-10">
          <div className="flex gap-8 animate-marquee">
            {[...clientsRow1, ...clientsRow1].map((client, idx) => (
              <ClientCard key={idx} name={client} />
            ))}
          </div>
        </div>

        {/* Row 2 - Right to Left */}
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-8 animate-marquee-reverse">
            {[...clientsRow2, ...clientsRow2].map((client, idx) => (
              <ClientCard key={idx} name={client} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Card ---------------- */

function ClientCard({ name }) {
  return (
    <div
      className="min-w-[220px] h-[120px] bg-white rounded-2xl
                    flex items-center justify-center
                    text-gray-800 font-semibold shadow-md
                    hover:scale-105 transition"
    >
      {name}
    </div>
  );
}
