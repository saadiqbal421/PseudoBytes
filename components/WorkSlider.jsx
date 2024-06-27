import { useState } from 'react';
import Image from 'next/image';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Modal from 'react-modal';

import 'swiper/css';
import 'swiper/css/pagination';

const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'Mehfil',
          path: '/thumb1.jpg',
          link: 'http://example.com',
          text: "Mehfil is Pakistan's pioneering peer-to-peer platform for renting out spaces for various events such as birthdays, parties, corporate gatherings, and more. This innovative platform connects hosts with available venues to guests seeking unique and memorable locations. By fostering a community-driven marketplace, Mehfil simplifies the process of finding and booking event spaces, ensuring hosts can effectively monetize their properties while guests discover exceptional venues tailored to their specific needs."
        },
        {
          title: 'Tijara',
          path: '/23.png',
          link: 'http://example.com',
          text: 'Tijara is a cutting-edge CRM and website creation platform designed to streamline business operations and enhance online presence. With Tijara, businesses can effortlessly manage customer relationships, track sales, and build professional websites. The platform offers a comprehensive suite of tools, including customizable templates, analytics, and automation features, enabling businesses to operate more efficiently, improve customer engagement, and ultimately drive growth'
        },
      ]
    },
    {
      images: [
        {
          title: 'Pakistan Law AI',
          path: '/law.png',
          link: 'http://example.com',
          text: 'Pakistan Law AI leverages the power of LangChain to deliver precise and timely answers related to Pakistani law. This AI-driven platform provides legal professionals, students, and the general public with easy access to a vast repository of legal information. By ensuring users stay informed about the latest laws and regulations in Pakistan, Pakistan Law AI enhances legal research, supports decision-making, and promotes a better understanding of legal matters.'
        },
        {
          title: 'Emotion AI',
          path: '/emotion.png',
          link: 'http://example.com',
          text: 'Emotion AI harnesses advanced artificial intelligence to provide actionable insights into business reviews and customer feedback. By analyzing sentiments and emotions expressed in reviews, Emotion AI helps businesses identify strengths and areas for improvement. This enables companies to develop targeted strategies to enhance customer satisfaction, improve products and services, and ultimately foster stronger customer relationships. With Emotion AI, businesses can turn feedback into a powerful tool for growth and innovation'
        },
      ]
    }
  ]
};

const WorkSlider = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    console.log(item)
  };

  return (
    <>
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
                  <div className="flex items-center justify-center relative overflow-hidden group"
                  onClick={() => handleItemClick(image)}
                  >
                    {/* image */}
                    <Image
                      src={image.path}
                      alt={image.title}
                      width={500}
                      height={300}
                    />

                    {/* overlay gradient */}
                    <div
                      className="absolute inset-0 bg-gradient-to-b from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-100 transition-all duration-700"
                      aria-hidden
                    />
                  </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {selectedItem && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-10 flex justify-center items-center z-50">
          <div className="bg-[rgba(65,57,159,1)] rounded-lg p-4 sm:p-12 w-11/12 sm:w-2/3 lg:w-1/2 xl:w-1/3 flex flex-col justify-center items-center">
            <h2 className="text-2xl sm:text-4xl mb-4">{selectedItem.title}</h2>
            <p className="text-sm sm:text-base">{selectedItem.text}</p>
            <button className="mt-4 text-sm sm:text-base bg-accent text-white py-2 px-4 rounded" onClick={() => setSelectedItem(null)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default WorkSlider;
