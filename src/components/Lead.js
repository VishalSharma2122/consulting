import React from 'react';

export function LeadAutomationSection() {
  return (
    <section className="bg-[#5a5a5a] pb-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Card 1 */}
          <div className="bg-black rounded-3xl border-2 border-white overflow-hidden
                          group hover:scale-105 transition duration-300">
            <div className="bg-cyan-400 py-4 px-6">
              <h3 className="text-xl md:text-2xl font-bold text-black text-center">
                Nurture Leads into Loyal Patients
              </h3>
            </div>

            <div className="p-10 text-center">
              <ExpandIcon />
              <p className="text-gray-300 text-base mt-8 max-w-md mx-auto">
                Automate your lead follow-ups with high-converting systems.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-black rounded-3xl border-2 border-white overflow-hidden
                          group hover:scale-105 transition duration-300">
            <div className="bg-cyan-400 py-4 px-6">
              <h3 className="text-xl md:text-2xl font-bold text-black text-center">
                Facebook & Google Ads Campaign Template
              </h3>
            </div>

            <div className="p-10 text-center">
              <HandshakeIcon />
              <p className="text-gray-300 text-base mt-8 max-w-md mx-auto">
                Get access to successful campaign templates for both Facebook and Google ads.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ---------------- Icons ---------------- */

const iconClass =
  'mx-auto w-20 h-20 text-cyan-400 animate-float ' +
  'group-hover:drop-shadow-[0_0_15px_#22d3ee] transition';

function ExpandIcon() {
  return (
    <svg
      className={iconClass}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M4 4h6M4 4v6M20 4h-6M20 4v6M4 20h6M4 20v-6M20 20h-6M20 20v-6" />
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
      <path d="M7 12l5 5 5-5M2 12l5 5M17 12l5 5" />
    </svg>
  );
}
