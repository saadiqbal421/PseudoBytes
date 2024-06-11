import Image from "next/image";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const workSlides = {
  slides: [
    {
      images: [
        {
          title: "Mehfil",
          path: "/thumb1.jpg",
          link: "http://example.com",
          text: "Mehfil is Pakistan's first peer-to-peer platform for renting out spaces for events such as birthdays, parties, and more. It connects hosts with available venues to guests looking for unique locations, fostering a community-driven marketplace."
        },
        {
          title: "Tijara",
          path: "/23.png",
          link: "http://example.com",
          text: "Tijara is a comprehensive CRM and website creation platform designed to streamline business operations and enhance online presence. With Tijara, businesses can manage customer relationships, track sales, and build professional websites effortlessly."
        },
      ]
    },
    {
      images: [
        {
          title: "Pakistan Law AI",
          path: "/law.png",
          link: "http://example.com",
          text: "Pakistan Law AI leverages the power of LangChain to provide accurate and timely answers related to Pakistani law. This AI-driven platform offers legal professionals, students, and the general public an easy way to access legal information, ensuring they stay informed about the latest laws and regulations in Pakistan."
        },
        {
          title: "Emotion AI",
          path: "/emotion.png",
          link: "http://example.com",
          text: "Emotion AI provides actionable insights into business reviews using advanced AI technology. By analyzing customer feedback and reviews, Emotion AI helps businesses understand customer sentiments, identify areas for improvement, and develop strategies to enhance customer satisfaction."
        },
      ]
    }
  ]
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
