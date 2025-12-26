import React from 'react';

export default function Services() {
  return (
    <section id="services" className="bg-[#5a5a5a] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-16">
          What We Can Help With
          <span className="block w-40 h-1 bg-cyan-400 mx-auto mt-4 rounded-full"></span>
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <ServiceCard
            title="Drive High-Quality Paid Appointments"
            description="Designed to convert leads into paying patients seamlessly."
            icon={<RocketIcon />}
          />

          {/* Card 2 */}
          <ServiceCard
            title="Ideas for High-Quality Lead Generation"
            description="Receive personalized strategies to boost lead generation for your business."
            icon={<RupeeIcon />}
          />

          {/* Card 3 */}
          <ServiceCard
            title="Enhance Your Clinic's Online Presence"
            description="Dominate local searches and establish credibility."
            icon={<ArrowUpIcon />}
          />

          {/* Card 4 */}
          <ServiceCard
            title="Proven Funnel for Consistent Leads"
            description="Funnel that ensures a steady flow of leads to your business."
            icon={<HandshakeIcon />}
          />
        </div>
      </div>
    </section>
  );
}

/* ---------------- Card Component ---------------- */

function ServiceCard({ title, description, icon }) {
  return (
    <div
      className="bg-black rounded-2xl border border-gray-700 overflow-hidden
                    group hover:scale-105 transition duration-300"
    >
      <div className="bg-cyan-400 p-4">
        <h3 className="text-lg font-bold text-black text-center">{title}</h3>
      </div>

      <div className="p-8 text-center">
        {icon}
        <p className="text-gray-300 text-sm mt-6">{description}</p>
      </div>
    </div>
  );
}

/* ---------------- Icons ---------------- */

const iconClass =
  'mx-auto w-20 h-20 text-cyan-400 animate-float group-hover:drop-shadow-[0_0_15px_#22d3ee] transition';

function RocketIcon() {
  return (
    <svg
      className={iconClass}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M5 13l4 4L19 7l-4-4L5 13z" />
    </svg>
  );
}

function RupeeIcon() {
  return (
    <svg
      className={iconClass}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M6 3h12M6 8h12M9 21l6-6" />
    </svg>
  );
}

function ArrowUpIcon() {
  return (
    <svg
      className={iconClass}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M12 19V5m0 0l-6 6m6-6l6 6" />
    </svg>
  );
}

function HandshakeIcon() {
  return (
    <svg
      className={iconClass}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M8 11l4 4 4-4" />
    </svg>
  );
}
