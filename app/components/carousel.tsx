"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

type TestimonialItem = {
  id: number;
  name: string;
  feedback?: string;
  image?: string;
};

type CarouselProps = {
  items: TestimonialItem[];
};

export default function Carousel({ items }: CarouselProps) {
  if (!items || items.length === 0) return null;

  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={20}
      slidesPerView={3}
      loop={true}
      navigation
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      className="w-full "
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 20 },
        768: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 3, spaceBetween: 20 },
      }}
    >
      {items.map((item: TestimonialItem) => (
        <SwiperSlide key={item.id} >
          <div className="bg-white border border-gray-300 h-68 flex flex-col 
          items-center justify-center text-center overflow-hidden px-4 rounded-2xl">

            {item.image && (
              <img
                src={item.image}
                alt={item.name}
                className="h-24 w-24 rounded-full mb-4 object-cover"
              />
            )}

            <h4 className="text-lg font-bold mb-2">{item.name}</h4>
            {item.feedback && (
              <p className="text-gray-600">" {item.feedback} "</p>
            )}

          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
