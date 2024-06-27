import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import {
  FaHtml5,
  FaJs,
  FaReact,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiLaravel,
  SiNextdotjs,
  SiTypescript,
  SiFlask,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiPrisma,
  SiNextui,
  SiPython,
  SiCypress,
  SiPlaywright,
  SiFastapi,
  SiCucumber,
} from "react-icons/si";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

// Data
export const aboutData = [
  {
    title: "technologies",
    info: [
      {
        title: "Frontend Development",
        icons: [
          FaHtml5,
          SiTailwindcss,
          FaJs,
          SiTypescript,
          FaReact,
          SiNextui,
        ],
      },
      {
        title: "Backend Development",
        icons: [
          SiNextdotjs,
          SiNodedotjs,
          SiLaravel,
          SiMongodb,
          SiMysql,
          SiPrisma,
        ],
      },
      {
        title: "Automation Framework",
        icons: [
          SiCypress,
          SiCucumber,
          SiPlaywright,
        ],
      },
      {
        title: "AI Technologies",
        icons: [
          SiFlask,
          SiPython,
          SiFastapi,
        ],
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-20 xl:py-36 text-center xl:text-left overflow-hidden pt-10">
      <Circles />

      {/* Avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden sm:flex absolute bottom-0 -left-[170px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 pt-20">
        {/* Text */}
        <div className="flex-1 flex flex-col justify-center px-4 sm:px-0">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex justify-center xl:justify-start mb-4"
          >
          </motion.div>
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
          >
            Crafting Your<br /><span className="text-accent"> Digital Journey</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 text-sm sm:text-base lg:text-lg"
          >
            At Pseudobytes, our journey began a decade ago with a singular mission: to craft digital solutions that are not just functional but truly inspiring.
            Our Co-founders started as freelancers with a passion for development and a vision for creating more than just software. Over the years, this vision has
            evolved into a dynamic team of innovators who share a common goal—helping businesses transform their digital identities.
          </motion.p>

          {/* Counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* Experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={3} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience.
                </div>
              </div>

              {/* Clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={20} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied clients.
                </div>
              </div>

              {/* Projects */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={50} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished projects.
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px] overflow-y-auto"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${
                  index === itemI &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemI) => (
              <div
                key={itemI}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-center text-white/60"
              >
                {/* Title */}
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>

                <div className="flex gap-x-4">
                  {/* Icons */}
                  {item.icons?.map((Icon, iconI) => (
                    <div key={iconI} className="text-2xl text-white">
                      <Icon />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
