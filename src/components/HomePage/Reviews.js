"use client";
import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import { ShieldCheck, User } from "lucide-react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";

const testimonials = [
  {
    id: 1,
    name: "Monique Greer",
    text: "It seriously helped me with my car deal. Anyone looking to get a car should just use it. #lifesaver",
    rating: 5,
  },
  {
    id: 2,
    name: "Victor Hansen",
    text: "It seriously helped me with my car deal. Anyone looking to get a car should just use it. #lifesaver",
    rating: 5,
  },
  {
    id: 3,
    name: "Sarah Johnson",
    text: "Amazing service! The platform made everything so easy to understand and navigate. Highly recommended!",
    rating: 5,
  },
  {
    id: 4,
    name: "Michael Chen",
    text: "The best car buying experience I've ever had. The team was professional and helpful throughout.",
    rating: 5,
  },
  {
    id: 5,
    name: "Emily Rodriguez",
    text: "Fantastic platform! Saved me so much time and hassle. Would definitely use again.",
    rating: 5,
  },
  {
    id: 6,
    name: "David Williams",
    text: "The process was smooth and efficient. Great customer service and support.",
    rating: 5,
  },
  {
    id: 7,
    name: "Lisa Thompson",
    text: "Couldn't be happier with the results. Made car buying a breeze!",
    rating: 5,
  },
  {
    id: 8,
    name: "James Wilson",
    text: "Outstanding service from start to finish. Will definitely recommend to others.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <div className="w-full py-12 bg-gray-50 overflow-hidden">
      <div className="container mx-auto mb-8">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-2">Our Happy Customers</h2>
        <p className="text-center text-gray-600">See what people are saying about our service</p>
      </div>
      <TestimonialSlider direction="normal" />
      <TestimonialSlider direction="reverse" />

      {/* Add the SafePurchaseSection here */}
      <SafePurchaseSection />
    </div>
  );
};


const TestimonialSlider = ({ direction }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiper = swiperRef.current?.swiper;
    if (swiper) {
      swiper.update();
    }
  }, []);

  const StarRating = ({ rating }) => {
    return (
      <div className="flex gap-1">
        {[...Array(rating)].map((_, index) => (
          <svg
            key={index}
            className="w-4 h-4 text-red-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <Swiper
      ref={swiperRef}
      modules={[Autoplay, FreeMode]}
      spaceBetween={20}
      freeMode={true}
      speed={direction === "normal" ? 15000 : 20000}
      autoplay={{
        delay: 1,
        disableOnInteraction: false,
        reverseDirection: direction === "reverse",
      }}
      loop={true}
      slidesPerView={1.5}
      allowTouchMove={false}
      breakpoints={{
        640: { slidesPerView: 2.5 },
        768: { slidesPerView: 3.5 },
        1024: { slidesPerView: 4.5 },
        1280: { slidesPerView: 5.5 },
      }}
      className="mb-8"
    >
      {testimonials.concat(testimonials).map((testimonial, index) => (
        <SwiperSlide key={`${testimonial.id}-${index}`}>
          <div
            className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-lg 
              hover:-translate-y-1 transition-all duration-300 ease-in-out group"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center
                  transition-transform duration-300 group-hover:scale-110 overflow-hidden">
                  <User
                    size={20}
                    className="text-gray-600 group-hover:text-blue-600 transition-colors duration-300"
                  />
                </div>
              </div>
              <span className="font-medium text-gray-800 text-sm group-hover:text-blue-600 transition-colors duration-300">
                {testimonial.name}
              </span>
            </div>

            <div className="mb-2 transform transition-transform duration-300 group-hover:scale-105">
              <StarRating rating={testimonial.rating} />
            </div>

            <p className="text-gray-600 text-xs leading-relaxed line-clamp-2 group-hover:text-gray-700 transition-colors duration-300">
              {testimonial.text}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const SafePurchaseSection = () => {
  return (
    <section className="mt-10 bg-gray-100 py-10 px-6">
      <div className="text-center relative">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          You’re not risking anything when  you buy a vehicle <br></br> on Store name
        </h2>
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
        <ShieldCheck  className="text-pink-500"/>
          <h3 className="text-lg font-medium text-gray-800">Safe Purchase</h3>
          <p className="text-gray-600 text-center mt-2">
            Enjoy a secure process from start to finish.
          </p>
        </div>
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wrench"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
          <h3 className="text-lg font-medium text-gray-800">Inspect Car</h3>
          <p className="text-gray-600 text-center mt-2">
            Every vehicle is thoroughly inspected for quality.
          </p>
        </div>
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hand-coins"><path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"/><path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"/><path d="m2 16 6 6"/><circle cx="16" cy="9" r="2.9"/><circle cx="6" cy="5" r="3"/></svg>
          <h3 className="text-lg font-medium text-gray-800">We Give Refunds</h3>
          <p className="text-gray-600 text-center mt-2">
            Get your money back if you’re not satisfied.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
