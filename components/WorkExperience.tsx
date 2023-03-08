import React from "react";
import ExperienceCard from "./ExperienceCard";
import { motion } from "framer-motion";
import { Experience } from "../typings";
type Props = {
  experience: Experience[];
};

function WorkExperience({ experience }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-14 uppercase tracking-[20px] text-gray-500 text-2xl ">
        Experience
      </h3>

      <div className="mt-32 pb-12 w-full flex space-x-5 overflow-x-scroll mb-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {experience?.reverse().map((experience, i) => (
          <ExperienceCard key={experience?._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
}

export default WorkExperience;
