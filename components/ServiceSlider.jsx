import React, { useState } from 'react';
import { RxDesktop, RxRocket, RxArrowTopRight, RxDashboard } from "react-icons/rx";
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const serviceData = [
  {
    Icon: RxDesktop,
    title: "Web Development",
    description: "At Pseudobytes, we create more than just websites; we craft bespoke digital experiences that are intuitive, engaging, and effective. Our team of developers excels in front-end and back-end development, ensuring seamless performance across all devices and platforms. Whether you need an ecommerce platform, a responsive design, or a custom web application, our solutions are designed to enhance user interaction and boost your online presence.",
  },
  {
    Icon: RxDashboard,
    title: "Artificial Intelligence",
    description: "Harness the power of AI with Pseudobytes. We integrate smart, AI-driven solutions into your business processes to streamline operations and enhance decision-making. From machine learning models that predict customer behavior to AI systems that automate complex processes, our expertise helps you leverage cutting-edge technology to stay ahead in a competitive market.",
  },
  {
    Icon: RxDesktop,
    title: "Automation Testing",
    description: "Quality assurance is paramount at Pseudobytes. Our automation testing services ensure that your software applications are robust, reliable, and ready for the real world. By automating tests, we help reduce your product's time to market while ensuring that every release meets the highest standards of quality. Our comprehensive testing frameworks cover functionality, performance, and security to deliver flawless digital products.",
  },
  {
    Icon: RxRocket,
    title: "Deployment",
    description: "Deploy with confidence with Pseudobytes. Our deployment services ensure that your software is launched smoothly and operates reliably under real-world conditions. We specialize in continuous integration and continuous deployment (CI/CD) practices, enabling automated testing and deployment processes that make updates seamless and efficient. From initial server setup and configuration to ongoing maintenance and scaling, our team provides comprehensive support to keep your systems running without a hitch. Whether it’s cloud deployment or on-premises installations, we tailor our approach to fit your specific requirements, ensuring optimal performance and uptime.",
  },
];

const ServiceSlider = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  function truncateDescription(description) {
    const wordLimit = 26;
    const words = description.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return description;
  }

  return (
    <>
      <Swiper
        breakpoints={{
          420: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        freeMode
        className="h-[240px] sm:h-[350px] sm:w-[1100px]"
      >
        {serviceData.map((item, i) => (
          <SwiperSlide key={i} onClick={() => handleItemClick(item)}>
            <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
              {/* icon */}
              <div className="text-3xl text-accent mb-4">
                <item.Icon aria-hidden />
              </div>

              {/* title & description */}
              <div className="mb-9">
                <div className="mb-2 text-lg">{item.title}</div>
                  <p className="max-w-[390px] leading-normal">{truncateDescription(item.description)}</p>
              </div>

              {/* arrow */}
              <div className="text-3xl text-accent mb-4">
                <RxArrowTopRight
                  className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"
                  aria-hidden
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {selectedItem && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-10 flex justify-center items-center z-50">
          <div className="bg-[rgba(65,57,159,1)] h-max rounded-lg px-19 w-96 h-99 rounded-lg p-12 flex flex-col justify-center items-center">
            <h2 className="text-4xl mb-4">{selectedItem.title}</h2>
            <p>{selectedItem.description}</p>
            <button onClick={() => setSelectedItem(null)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ServiceSlider;