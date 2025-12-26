import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Dr. Sankalp Jain",
    specialty: "Sexologist",
    text: "UpGro Media's proven systems are a game changer. From strategic ad campaigns to patient conversion funnels, they've delivered beyond our expectations. Our clinic is now booked weeks in advance!",
  },
  {
    name: "Dr. Ranjeet Singh",
    specialty: "Ayurvedic Doctor",
    text: "Thanks to UpGro Media, our clinic's reputation has grown tremendously. Their expertise in lead generation and patient engagement strategies has taken our practice to the next level!",
  },
  {
    name: "Dr. Balkar Kundan Singh",
    specialty: "Kidney Care Specialist",
    text: "UpGro Media has helped us revolutionize our digital marketing campaigns. From Google Ads to patient consultation funnels, their proven methods have brought quality leads and consistent growth.",
  },
  {
    name: "Dr. Ravi Vairagade",
    specialty: "Genetic Health Expert",
    text: "The team at UpGro Media is highly professional and result-driven. They've helped me generate consistent paid consultations and build a strong online presence for my clinic.",
  },
  {
    name: "Dr. Neeraj Pandey",
    specialty: "Dermatologist",
    text: "I was struggling with inconsistent patient flow, but UpGro Media turned things around. Their tailored marketing strategies helped us reach the right audience significantly.",
  },
  {
    name: "Dr. AK Jain",
    specialty: "Men's Infertility Expert",
    text: "I've been working with UpGro Media for the past six months, and the results have been phenomenal. My clinic's patient footfall has doubled with their performance strategies.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-white text-center mb-14">
          WHAT OUR CLIENTS SAY
          <span className="block w-48 h-1 bg-cyan-400 mx-auto mt-4 rounded-full"></span>
        </h2>

        {/* Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
          className="pb-14"
        >
          {testimonials.map((testi, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="h-full bg-gradient-to-br from-[#111] to-[#1a1a1a]
                           border-2 border-cyan-400 rounded-2xl p-8
                           flex flex-col justify-between"
              >
                <p className="text-gray-200 text-sm leading-relaxed mb-10">
                  {testi.text}
                </p>

                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-full bg-cyan-400 flex items-center justify-center text-black font-bold">
                    {testi.name.charAt(0)}
                  </div>

                  {/* Info */}
                  <div>
                    <p className="text-white font-bold">{testi.name}</p>
                    <p className="text-gray-400 text-sm">{testi.specialty}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
