import { motion } from "framer-motion";
import ParticlesContainer from "../components/ParticlesContainer";
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto px-4 lg:px-0">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"
          >
            Transforming Ideas <br /> Into{" "}
            <span className="text-accent">Digital Reality</span>
          </motion.h1>

          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl mx-auto xl:mx-0 mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-19 text-sm sm:text-base md:text-lg lg:text-xl"
          >
            Welcome to <span className="text-accent">Pseudobytes</span>, where your vision meets our innovation.<br />
            We are dedicated to transforming abstract ideas into tangible digital solutions that drive business success.
            As a premier software development agency, we specialize in creating robust, scalable, and cutting-edge applications
            tailored to meet the unique needs of our clients.<br />
            Explore our services to see how we can bring your digital dreams to life. At Pseudobytes, we don't just build software; we build futures.
          </motion.p>

          {/* btn */}
        </div>
      </div>
      {/* image */}
      <div className="w-full lg:w-[1280px] h-full absolute right-0 bottom-0 hidden lg:block">
        {/* particles */}
        <ParticlesContainer />
      </div>
    </div>
  );
};

export default Home;
