import React from 'react';

export default function ClientSuccess() {
  const testimonials = [
    {
      text: "UpGro Media's proven systems have completely transformed our clinic's patient acquisition. From strategic ad campaigns to high-converting funnels, they've delivered exceptional results. Our clinic is now fully booked weeks in advance!",
      name: 'Dr. Sankalp Jain',
      role: 'Sexologist'
    },
    {
      text: 'Thanks to UpGro Media, our clinic now attracts consistent, high-quality patients. Their performance marketing strategies and consultation funnels have helped us scale with confidence.',
      name: 'Dr. Ranjeet Singh',
      role: 'Ayurvedic Doctor'
    },
    {
      text: 'UpGro Media helped us build a predictable patient acquisition system. Their expertise in ads and funnel optimization made a measurable impact on our clinic growth.',
      name: 'Dr. Balkar Kundan Singh',
      role: 'Kidney Care Specialist'
    }
  ];

  return (
    <section className="bg-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-12 text-center">
          CLIENT SUCCESS STORIES
        </h2>

        {/* Scroller Wrapper */}
        <div className="relative h-[320px] overflow-hidden">
          {/* Scrolling Container */}
          <div className="space-y-6 animate-vertical-scroll">
            {[...testimonials, ...testimonials].map((item, idx) => (
              <TestimonialCard key={idx} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Card ---------------- */

function TestimonialCard({ text, name, role }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md">
      <p className="text-gray-700 text-lg mb-6 italic">“{text}”</p>
      <p className="font-bold">{name}</p>
      <p className="text-gray-600">{role}</p>
    </div>
  );
}
