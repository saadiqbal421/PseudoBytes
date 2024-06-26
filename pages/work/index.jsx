import { motion } from "framer-motion";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import WorkSlider from "../../components/WorkSlider";
import { fadeIn } from "../../variants";

const Work = () => {
  return (
    <div className="h-full bg-primary/30 py-12 md:py-36 flex items-center">
      <Circles />
      <div className="container mx-auto px-4 pt-10">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex flex-col xl:w-[30vw] lg:text-left mb-8 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-2xl md:text-4xl xl:mt-12"
            >
              Our work <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-sm md:text-base mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              Here, you'll find a curated selection of projects that not only demonstrate our technical skills but 
              also our commitment to solving complex challenges and delivering measurable results. Each project is 
              a testament to the trust our clients place in us and our relentless pursuit of excellence.
            </motion.p>
          </div>

          {/* slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
