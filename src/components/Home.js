import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 10,
    seconds: 0
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
    'Drive High-Quality Paid Appointments',
    'Ideas for High-Quality Lead Generation',
    "Enhance Your Clinic's Online Presence",
    'Proven Funnel for Consistent Leads',
    'Nurture Leads into Loyal Patients',
    'Facebook & Google Ads Campaign Template'
  ];

  const clinicTypes = [
    'Urologists',
    'Sexologists',
    "Men's Health Clinics",
    'IVF & Fertility Clinics',
    'Aesthetic Surgeons',
    'Kidney Care Experts',
    'Dermatologists',
    'Gastroenterologists'
  ];

  const testimonials = [
    {
      name: 'Dr. Sankalp Jain',
      specialty: 'Sexologist',
      text: "UpGro Media's proven systems are a game changer. From strategic ad campaigns to patient conversion funnels, they've delivered beyond our expectations. Our clinic is now booked weeks in advance!"
    },
    {
      name: 'Dr. Ranjeet Singh',
      specialty: 'Ayurvedic Doctor',
      text: "Thanks to UpGro Media, our clinic's reputation has grown tremendously. Their expertise in lead generation and patient engagement strategies has taken our practice to the next level!"
    },
    {
      name: 'Dr. Balkar Kundan Singh',
      specialty: 'Kidney Care Specialist',
      text: 'UpGro Media has helped us revolutionize our digital marketing campaigns. From Google Ads to patient consultation funnels, their proven methods have brought quality leads and consistent growth.'
    },
    {
      name: 'Dr. Ravi Vairagade',
      specialty: 'Genetic Health Expert',
      text: "The team at UpGro Media is highly professional and result-driven. They've helped me generate consistent paid consultations and build a strong online presence for my clinic."
    },
    {
      name: 'Dr. Neeraj Pandey',
      specialty: 'Dermatologist',
      text: 'I was struggling with inconsistent patient flow, but UpGro Media turned things around. Their tailored marketing strategies helped us reach the right audience significantly.'
    },
    {
      name: 'Dr. AK Jain',
      specialty: "Men's Infertility Expert",
      text: "I've been working with UpGro Media for the past six months, and the results have been phenomenal. My clinic's patient footfall has doubled with their performance strategies."
    }
  ];

  const bonuses = [
    { title: 'BONUS 1', desc: 'Facebook & Google Ads Mastery Guide' },
    { title: 'BONUS 2', desc: 'Lead Generation Checklist' },
    { title: 'BONUS 3', desc: 'Conversion Funnel Template' },
    { title: 'BONUS 4', desc: 'Patient Retention Strategies' },
    { title: 'BONUS 5', desc: 'Social Media Content Calendar' },
    { title: 'BONUS 6', desc: 'Analytics Dashboard Setup' }
  ];

  const faqs = [
    {
      q: 'What happens during the 1 to 1 consultation?',
      a: "You'll receive personalized analysis of your clinic's challenges and opportunities with custom strategies to boost patient flow and revenue."
    },
    {
      q: 'How soon will I see results?',
      a: 'Most clinics see results within 45 days with consistent implementation of our proven strategies.'
    },
    {
      q: "What is the 'UpGro Media' strategy?",
      a: 'Our Big Daddy System combines ads, funnels, and measurement to deliver 3X growth in patient appointments.'
    },
    {
      q: 'Do you guarantee results?',
      a: 'We provide proven strategies and full support. Results depend on proper implementation and clinic readiness.'
    }
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

      {/* Navbar */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-lg">
              U
            </div>
            <div>
              <div className="font-bold text-lg">Upgro Media</div>
              <div className="text-xs text-gray-500">
                Patient Acquisition Experts
              </div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#services" className="hover:text-blue-600">
              Services
            </a>
            <a href="#clinics" className="hover:text-blue-600">
              For Clinics
            </a>
            <a href="#testimonials" className="hover:text-blue-600">
              Testimonials
            </a>
            <a href="#about" className="hover:text-blue-600">
              About
            </a>
            <a href="#faq" className="hover:text-blue-600">
              FAQ
            </a>
            <button
              onClick={() => navigate('/consultation')}
              className="ml-4 bg-yellow-400 text-blue-900 font-bold px-4 py-2 rounded-lg shadow hover:scale-105 transition"
            >
              Book Consultation
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
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
          <button
            onClick={() => navigate('/consultation')}
            className="inline-block bg-yellow-400 text-blue-900 font-bold px-8 py-4 rounded-lg shadow-lg hover:scale-105 transition text-lg"
          >
            Book Your Strategy Call Now
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">
            What We Can Help With
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition"
              >
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4 font-bold">
                  ✓
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit}</h3>
                <p className="text-gray-600 text-sm">
                  Designed to convert leads into paying patients seamlessly.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      {/* Clinic Types Section */}
      <section id="clinics" className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">
          This is Exclusively For:
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {clinicTypes.map((clinic, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-center font-semibold"
            >
              {clinic}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section with Price */}
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
            onClick={() => navigate('/consultation')}
            className="inline-block bg-yellow-400 text-blue-900 font-bold px-10 py-4 rounded-lg shadow-lg hover:scale-105 transition text-lg"
          >
            BOOK NOW
          </button>
          <p className="mt-4 text-blue-100">
            {String(timeLeft.hours).padStart(2, '0')} HRS{' '}
            {String(timeLeft.minutes).padStart(2, '0')} MINS{' '}
            {String(timeLeft.seconds).padStart(2, '0')} SECS
          </p>
        </div>
      </section>

      {/* Success Stories */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            CLIENT SUCCESS STORIES
          </h2>
          <div className="bg-white p-8 rounded-xl shadow-md">
            <p className="text-gray-700 text-lg mb-6">
              "UpGro Media's proven systems have completely transformed our
              clinic's patient acquisition. From strategic ad campaigns to
              high-converting funnels, they've delivered exceptional results.
              Our clinic is now fully booked weeks in advance!"
            </p>
            <p className="font-bold">Dr. Sankalp Jain</p>
            <p className="text-gray-600">Sexologist</p>
          </div>
        </div>
      </section>

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
        <h3 className="text-2xl font-bold mb-6 text-center">
          Featured Appearances
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
            <iframe
              width="100%"
              height="250"
              src="https://www.youtube.com/embed/iKzRsVzF34Y"
              title="BeerBiceps Interview"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full"
            ></iframe>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
            <iframe
              width="100%"
              height="250"
              src="https://www.youtube.com/embed/pQzZMDPzWq0"
              title="Healthcare Marketing Tips"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full"
            ></iframe>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
            <iframe
              width="100%"
              height="250"
              src="https://www.youtube.com/embed/OPf0YbXqDm0"
              title="Clinic Growth Strategy"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            WHAT OUR CLIENTS SAY
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testi, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
              >
                <p className="text-gray-700 mb-4 italic text-sm">
                  "{testi.text}"
                </p>
                <p className="font-bold">{testi.name}</p>
                <p className="text-gray-600 text-sm">{testi.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">
          OUR RECOGNITIONS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <div className="text-4xl mb-4">🔵</div>
            <h3 className="text-xl font-bold mb-2">Meta Certified Partner</h3>
            <p className="text-gray-600">
              Trusted Partner for Meta (Facebook & Instagram)
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-bold mb-2">Certified Google Partner</h3>
            <p className="text-gray-600">
              Certified Google Ads Specialist for Healthcare Campaigns
            </p>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">OUR CLIENTS</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'Tej Clinic',
              'Kundan Kidney Care',
              'Samdosh',
              'Derma Klinic',
              'Nurture IVF',
              'Color IVF',
              'Dr Ravi',
              'Bingwel Clinic'
            ].map((client, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center h-24 font-semibold text-gray-700"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

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

      {/* Bonuses */}
      <section className="bg-gradient-to-r from-yellow-400 to-yellow-500 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4 text-center text-blue-900">
            SIGN UP TODAY AND GET FREE BONUSES WORTH ₹6,500/-
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {bonuses.map((bonus, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-md text-center"
              >
                <h3 className="font-bold text-blue-600 mb-2">{bonus.title}</h3>
                <p className="text-gray-700">{bonus.desc}</p>
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
            onClick={() => navigate('/consultation')}
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
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="font-bold mb-2">Upgro Media</h4>
            <p className="text-gray-400">
              Patient acquisition strategies for clinics & hospitals
            </p>
          </div>
          <div>
            <h5 className="font-semibold mb-2">Quick Links</h5>
            <ul className="text-gray-400 space-y-1 text-sm">
              <li>
                <a href="#services" className="hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-2">Contact</h5>
            <p className="text-gray-400 text-sm">Infoupgro@gmail.com</p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Upgro Media - Precision Data Solutions.
          All rights reserved.
        </div>
      </footer>

      {/* Floating Timer Button */}
      <button
        onClick={() => navigate('/consultation')}
        className="fixed bottom-8 left-8 bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white px-8 py-5 rounded-2xl shadow-2xl hover:shadow-red-500/50 hover:scale-105 transition-all z-40 flex items-center gap-4 font-bold border-2 border-red-400 animate-pulse"
      >
        <div className="text-4xl animate-bounce">🕐</div>
        <div className="text-left">
          <div className="text-xs font-semibold uppercase tracking-wider opacity-90">
            ⏱️ Limited Time
          </div>
          <div className="text-2xl font-extrabold text-red-100">
            {pageTimer.minutes}:{String(pageTimer.seconds).padStart(2, '0')}
          </div>
          <div className="text-xs font-semibold text-red-200 mt-1">
            Book Now →
          </div>
        </div>
      </button>
    </div>
  );
}
