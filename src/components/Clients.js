import React from 'react';

export default function Clients() {

  // Row 1 Images
  const clientsRow1 = [
    'https://upgromedia.in/wp-content/uploads/al_opt_content/IMAGE/upgromedia.in/wp-content/uploads/elementor/thumbs/Derma-Klinic-qzpf49twto1d5bwjr8sevfhumreb49bfng9ycorhb0.png.bv.webp?bv_host=upgromedia.in',
    './kundan.webp',
    './awish.webp',
    './tej.webp',
    './awish.webp',
    './derma.webp',
  ];

  // Row 2 Images
  const clientsRow2 = [
    './akjain.webp',
    './advance.webp',
    './Arunveda.webp',
    './awish.webp',
    './kundan.webp',
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
            {[...clientsRow1, ...clientsRow1].map((img, idx) => (
              <ClientCard key={idx} img={img} />
            ))}
          </div>
        </div>

        {/* Row 2 - Right to Left */}
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-8 animate-marquee-reverse">
            {[...clientsRow2, ...clientsRow2].map((img, idx) => (
              <ClientCard key={idx} img={img} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

/* ---------------- Card ---------------- */

function ClientCard({ img }) {
  return (
    <div
      className="min-w-[220px] h-[120px] bg-white rounded-2xl
                 flex items-center justify-center
                 shadow-md hover:scale-105 transition"
    >
      <img
        src={img}
        alt="Client Logo"
        className="max-h-[70px] max-w-[160px] object-contain"
      />
    </div>
  );
}
