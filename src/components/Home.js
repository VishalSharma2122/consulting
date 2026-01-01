import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Services from "./Service";
import Clinics from "./Clinic";
import Testimonials from "./Testimonial";
import Clients from "./Clients";
import ClientSuccess from "./ClientSuccess";
import { LeadAutomationSection } from "./Lead";

export default function Home() {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 10,
    seconds: 0,
  });
  const [pageTimer, setPageTimer] = useState({ minutes: 10, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const pageTimer = setInterval(() => {
      setPageTimer((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(pageTimer);
  }, []);

  const benefits = [
    "Drive High-Quality Paid Appointments",
    "Ideas for High-Quality Lead Generation",
    "Enhance Your Clinic's Online Presence",
    "Proven Funnel for Consistent Leads",
    "Nurture Leads into Loyal Patients",
    "Facebook & Google Ads Campaign Template",
  ];

  const bonuses = [
    { title: "BONUS 1", desc: "./BONUS 1.webp" },
    { title: "BONUS 2", desc: "./BONUS 3.webp" },
    { title: "BONUS 3", desc: "./BONUS 3.webp" },
    { title: "BONUS 4", desc: "./BONUS 4.webp" },
    { title: "BONUS 5", desc: "./BONUS 5.webp" },
    { title: "BONUS 6", desc: "./BONUS 6.webp" },
  ];

  const faqs = [
    {
      q: "What happens during the 1-to-1 consultation?",
      a: "During the 1-to-1 consultation, we analyze your clinic’s current patient flow, online presence, competition, and growth challenges. You’ll receive a clear breakdown of what’s working, what’s not, and practical strategies to increase appointments. This session is focused on clarity, not selling.",
    },
    {
      q: "Is this marketing service suitable for my type of clinic?",
      a: "Yes. Our strategies are designed specifically for doctors, specialists, and healthcare clinics. Whether you run a dermatology, IVF, men’s health, or multi-specialty clinic, we customize the approach based on your specialty, location, and patient behavior.",
    },
    {
      q: "How soon can I expect to see new patient appointments?",
      a: "Most clinics begin seeing improved inquiries and appointment bookings within 30–45 days. The exact timeline depends on your location, competition, ad budget, and how quickly recommendations are implemented. We focus on sustainable growth, not short-term spikes.",
    },
    {
      q: "Do you run Google Ads and Facebook Ads for clinics?",
      a: "Yes. We manage Google Ads and Meta (Facebook & Instagram) campaigns tailored for healthcare services. All ads are created with compliance, patient trust, and conversion optimization in mind to ensure quality leads, not wasted spend.",
    },
     {
      q: "How soon can I expect to see new patient appointments?",
      a: "Most clinics begin seeing improved inquiries and appointment bookings within 30–45 days. The exact timeline depends on your location, competition, ad budget, and how quickly recommendations are implemented. We focus on sustainable growth, not short-term spikes.",
    },
    {
      q: "What makes your clinic marketing strategy different?",
      a: "Unlike generic agencies, we focus only on healthcare marketing. Our strategy combines paid ads, high-conversion funnels, local SEO insights, and patient psychology to attract people actively looking for treatment, not just clicks.",
    },
     {
      q: "Will this help improve my clinic’s local visibility on Google?",
      a: "Yes. Along with paid campaigns, we guide clinics on improving Google Business Profile optimization, reviews strategy, and local search visibility. This helps your clinic appear more frequently in nearby patient searches..",
    },
    {
      q: "Do you guarantee results or patient numbers?",
      a: "We don’t promise unrealistic patient numbers. What we do guarantee is a proven system, transparent reporting, and best-practice execution. Results depend on multiple factors like location, services, and follow-up quality.",
    },
    {
      q: "Is this service compliant with medical advertising guidelines?",
      a: "Absolutely. All campaigns are created following medical advertising guidelines. We avoid misleading claims, focus on education and trust, and ensure your clinic’s reputation remains strong and ethical.",
    },
    {
      q: "What budget is required to start clinic marketing?",
      a: "The marketing budget varies depending on your city, specialty, and competition. During the consultation, we recommend a practical ad budget that aligns with your growth goals without unnecessary overspending.",
    },
    {
      q: "Will I get regular performance reports?",
      a: "Yes. You receive clear performance updates showing leads, appointments, ad spend, and improvement areas. We focus on simple metrics that matter to clinic owners, not confusing dashboards.",
    },
    {
      q: "Can this help increase repeat patients and referrals?",
      a: "Yes. Our approach includes lead nurturing and follow-up strategies that help convert first-time visitors into repeat patients and referrals, improving long-term clinic revenue.",
    },
    {
      q: "Do I need a website before starting?",
      a: "A website helps, but it’s not mandatory. If needed, we guide you on simple, conversion-focused landing pages designed specifically to turn visitors into booked appointments.",
    },
    {
      q: "How much time do I need to invest personally?",
      a: "Minimal. After the initial consultation and approvals, our team handles execution. You mainly focus on patient care while we manage marketing and optimization.",
    },
    {
      q: "Is this a long-term contract or short-term service?",
      a: "There are no forced long-term contracts. We believe in earning trust through results, allowing clinics to continue based on performance and satisfaction.",
    },
    {
      q: "How do I get started with the consultation?",
      a: "Getting started is simple. Book your 1-to-1 strategy call, choose a suitable time, and come prepared with your clinic goals. We’ll take care of the rest.",
    },
  ];

  return (
    <div className="text-gray-900 bg-white">
      {/* Top Alert Bar */}
      <div className="bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-3 text-center text-2xl font-bold">
          ⏰ LIMITED TIME: 83% Healthcare Professionals Achieve 3X Patient
          Growth in 45 Days
        </div>
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-5 lg:py-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
            Guaranteed Growth for your Clinic
          </h1>
          <p className="text-xl text-gray-700 mb-4">
            Get Paid Appointments, Build Reputation & Grow your Patient footfall
            in Just 45 Days!
          </p>

          <p className="text-lg text-gray-600 mb-8">
            Proven Marketing Strategies Exclusively for Doctors – Achieve
            Tangible Results and Increase Appointments
          </p>
          <div className=" my-80"></div>
          <button
            onClick={() => navigate("/consultation")}
            className="inline-block bg-yellow-400 text-blue-900 font-bold px-8 py-4 rounded-lg shadow-lg hover:scale-105 transition text-lg"
          >
            Book Your Strategy Call Now
          </button>
        </div>
      </section>

      <Services />
      <LeadAutomationSection />

      {/* Video Testimonial Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">
          See Results in Action
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="350"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Client Success Story"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full"
            ></iframe>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="350"
              src="https://www.youtube.com/embed/jNQXAC9IVRw"
              title="Founder Interview"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full"
            ></iframe>
          </div>
        </div>
      </section>

      <Clinics />

      <section
        id="cta"
        className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16"
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Get Results for Your Clinic Now - Book Your 1-to-1 Call
          </h2>
          <div className="mb-8">
            <div className="text-lg line-through opacity-75">₹ 1999</div>
            <div className="text-5xl font-bold">Now ₹ 299</div>
            <p className="text-blue-100 mt-2">
              45-Minute Personalized Consultation
            </p>
          </div>
          <button
            onClick={() => navigate("/consultation")}
            className="inline-block bg-yellow-400 text-blue-900 font-bold px-10 py-4 rounded-lg shadow-lg hover:scale-105 transition text-lg"
          >
            BOOK NOW
          </button>
          <p className="mt-4 text-blue-100">
            {String(timeLeft.hours).padStart(2, "0")} HRS{" "}
            {String(timeLeft.minutes).padStart(2, "0")} MINS{" "}
            {String(timeLeft.seconds).padStart(2, "0")} SECS
          </p>
        </div>
      </section>

      {/* Success Stories */}
      <ClientSuccess />

      {/* About Founder */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">
          About Dhiraj Jaiswal – Founder & CEO
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <p className="text-gray-700 text-lg leading-relaxed">
              Meet Dhiraj Jaiswal – The Visionary Leader in Healthcare
              Marketing. With over 4 years of experience and 100+ clinics
              transformed, Dhiraj Jaiswal has revolutionized patient acquisition
              for healthcare professionals. His result-driven strategies,
              including the proven Big Daddy System, have consistently delivered
              3x growth in patient appointments within just 45 days.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="350"
              src="https://www.youtube.com/embed/V-_O7gl7DIg"
              title="Founder Story - Dhiraj Jaiswal"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full"
            ></iframe>
          </div>
        </div>

        {/* Founder Media Gallery */}
      </section>

      <Testimonials />

      {/* Clients */}
      <Clients />

      {/* Consultation Details */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">
          YOUR CONSULTATION EXPERIENCE
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-3xl font-bold text-blue-600 mb-4">01</div>
            <h3 className="font-bold mb-2">Personalized Analysis</h3>
            <p className="text-gray-600 text-sm">
              Personalized analysis of your clinic's challenges and
              opportunities
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-3xl font-bold text-blue-600 mb-4">02</div>
            <h3 className="font-bold mb-2">Custom Strategies</h3>
            <p className="text-gray-600 text-sm">
              Custom strategies to boost patient flow and revenue
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-3xl font-bold text-blue-600 mb-4">03</div>
            <h3 className="font-bold mb-2">Action Plan</h3>
            <p className="text-gray-600 text-sm">
              A proven action plan for implementing high-conversion campaigns
            </p>
          </div>
        </div>
        <p className="text-center text-gray-600 mt-8 font-semibold">
          Duration: 45 Minutes
        </p>
      </section>
      <div className="flex justify-center">
        <button
          onClick={() => navigate("/consultation")}
          className="inline-block bg-red-500 text-2xl text-blue-900 font-bold px-12 py-4 rounded-lg shadow-lg hover:scale-105 transition mb-10"
        >
          Book One to One Strategy
        </button>
      </div>
     <div className="flex justify-center">
  <img
    src="/upgro.webp"
    alt="UpGro"
    className="w-full max-w-[600px] h-auto object-contain"
  />
</div>

      {/* Bonuses */}
      <section className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-center text-white mb-10">
            SIGN UP TODAY AND GET FREE BONUSES WORTH ₹6,500/-
          </h2>

          {/* Bonus Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bonuses.map((bonus, idx) => (
              <div
                key={idx}
                className="border-2 border-cyan-400 rounded-2xl overflow-hidden bg-black"
              >
                {/* Top Cyan Header */}
                <div className="bg-cyan-400 py-3">
                  <h3 className="text-center text-black font-bold text-xl">
                    {bonus.title}
                  </h3>
                </div>

                {/* Content Area */}
                <div className="p-6 flex justify-center">
                  <div className="bg-white rounded-xl p-4 shadow-md">
                    <img
                      src={bonus.desc}
                      alt={bonus.label}
                      className="max-h-48 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Are you Ready to Scale Your Clinic Business to New Heights?
          </h2>
          <div className="mb-8">
            <div className="text-lg line-through opacity-75">₹ 1999</div>
            <div className="text-5xl font-bold">Now ₹ 299</div>
          </div>
          <button
            onClick={() => navigate("/consultation")}
            className="inline-block bg-yellow-400 text-blue-900 font-bold px-10 py-4 rounded-lg shadow-lg hover:scale-105 transition text-lg"
          >
            BOOK NOW
          </button>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">
          FREQUENTLY ASKED QUESTIONS
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-blue-50 p-6 rounded-xl">
              <h4 className="font-bold text-lg mb-3">{faq.q}</h4>
              <p className="text-gray-700">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}

      {/* Floating Timer Button */}
      <button
        onClick={() => navigate("/consultation")}
        className="fixed bottom-8 left-8 bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white px-8 py-5 rounded-2xl shadow-2xl hover:shadow-red-500/50 hover:scale-105 transition-all z-40 flex items-center gap-4 font-bold border-2 border-red-400 animate-pulse"
      >
        <div className="text-4xl animate-bounce">🕐</div>
        <div className="text-left">
          <div className="text-xs font-semibold uppercase tracking-wider opacity-90">
            ⏱️ Limited Time
          </div>
          <div className="text-2xl font-extrabold text-red-100">
            {pageTimer.minutes}:{String(pageTimer.seconds).padStart(2, "0")}
          </div>
          <div className="text-xl font-bold text-red-200 mt-1">Book Now →</div>
        </div>
      </button>
    </div>
  );
}
