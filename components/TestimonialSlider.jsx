import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonialData = [
  {
    image: "/user-avatar.png",
    name: "Justin",
    position: "Customer",
    message:
      "Partnering with Pseudobytes was a game-changer for our business. Their team not only understood our vision but enhanced it with their innovative solutions. The new application they developed is now the cornerstone of our operations, driving efficiency and growth. We couldn't be more satisfied with the results!",
  },
  {
    image: "/user-avatar.png",
    name: "Alberto",
    position: "Customer",
    message:
      "Pseudobytes has been instrumental in our digital transformation journey. Their expertise in AI and automation helped us streamline our processes like never before, increasing our productivity by 40%. Their team is not only skilled but also incredibly reliable and responsive to our needs.",
  },
  {
    image: "/user-avatar.png",
    name: "Estela Diaz",
    position: "Customer",
    message:
      "From the initial consultation to the final deployment, the level of service we received from Pseudobytes was exceptional. They are not just service providers; they are true partners who are committed to excellence and customer satisfaction. We highly recommend them for any company looking to elevate their digital presence.",
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[480px]"
    >
      {testimonialData.map((person, i) => (
        <SwiperSlide key={i}>
          <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-4 md:px-16">
            {/* avatar, name, position */}
            <div className="w-full max-w-[150px] md:max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
              <div className="flex flex-col justify-center text-center">
                {/* avatar */}
                <div className="mb-2 mx-auto">
                  <Image
                    src={person.image}
                    width={100}
                    height={100}
                    alt={person.name}
                  />
                </div>

                {/* name */}
                <div className="text-base md:text-lg">{person.name}</div>

                {/* position */}
                <div className="text-[10px] md:text-[12px] uppercase font-extralight tracking-widest">
                  {person.position}
                </div>
              </div>
            </div>

            {/* quote & message */}
            <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-10 md:pl-20">
              {/* quote icon */}
              <div className="mb-4">
                <FaQuoteLeft
                  className="text-3xl md:text-4xl xl:text-6xl mx-auto md:mx-0 text-accent"
                  aria-hidden="true"
                />
              </div>

              {/* message */}
              <div className="text-sm md:text-base xl:text-lg text-center md:text-left">
                {person.message}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
