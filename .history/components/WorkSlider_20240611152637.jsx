import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/thumb1.jpg",
          link: "http://example.com",
          text: "this project is about ai and every is ai today i am very happy today and this and that and why"
        },
        {
          title: "title",
          path: "/thumb2.jpg",
          link: "http://example.com",
          text: "this project is about ai and every is ai today i am very happy today and this and that and why"
        },
        {
          title: "title",
          path: "/thumb3.jpg",
          link: "http://example.com",
          text: "this project is about ai and every is ai today i am very happy today and this and that and why"
        },
        {
          title: "title",
          path: "/thumb4.jpg",
          link: "http://example.com",
          text: "Pakistan Law AI leverages the power of LangChain to provide accurate and timely answers related to Pakistani law. This AI-driven platform offers legal professionals, students, and the general public an easy way to access legal information, ensuring they stay informed about the latest laws and regulations in Pakistan"
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/thumb4.jpg",
          link: "http://example.com",
          text: "this project is about ai and every is ai today i am very happy today and this and that and why"
        },
        {
          title: "title",
          path: "/thumb1.jpg",
          link: "http://example.com",
          text: "this project is about ai and every is ai today i am very happy today and this and that and why"
        },
        {
          title: "title",
          path: "/thumb2.jpg",
          link: "http://example.com",
          text: "this project is about ai and every is ai today i am very happy today and this and that and why"
        },
        {
          title: "title",
          path: "/thumb3.jpg",
          link: "http://example.com",
          text: "this project is about ai and every is ai today i am very happy today and this and that and why"
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            {slide.images.map((image, imageI) => (
              <div
                className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                key={imageI}
              >
                <div className="flex items-center justify-center relative overflow-hidden group">
                  {/* image */}
                  <Image
                    src={image.path}
                    alt={image.title}
                    width={500}
                    height={300}
                  />

                  {/* overlay gradient */}
                  <div
                    className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"
                    aria-hidden
                  />

                  {/* text */}
                  <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                    <div className="flex items-center gap-x-2 text-[10px] tracking-[0.2em] text-white p-4">
                      {image.text}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
