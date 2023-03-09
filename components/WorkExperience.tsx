import React, { useState } from "react";
import ExperienceCard from "./ExperienceCard";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/outline";

type Props = {
  experiences: Experience[];
};

function WorkExperience({ experiences }: Props) {
  const [current, setCurrent] = useState(0);
  const lenght = experiences.length;

  if (!Array.isArray(experiences) || experiences.length <= 0) {
    return null;
  }

  const nextSlide = () => {
    setCurrent(current === lenght - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? lenght - 1 : current - 1);
  };

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

      <ChevronDoubleLeftIcon
        className="w-14 h-14 p-1 cursor-pointer hover:bg-white/10 hover:rounded-full hover:p-0 duration-200"
        onClick={prevSlide}
      />
      <div className="flex items-center justify-center">
        <div className="mt-32 pb-12 w-full flex snap-x snap-mandatory">
          {experiences?.reverse().map((experience, i) => (
            <div className={`${i === current ? "slide-active" : "slide"}`}>
              {i === current && (
                <ExperienceCard key={experience?._id} experience={experience} />
              )}
            </div>
          ))}
        </div>
      </div>
      <ChevronDoubleRightIcon
        className="w-14 h-14 p-1 cursor-pointer hover:bg-white/10 hover:rounded-full hover:p-0 duration-200"
        onClick={nextSlide}
      />
    </motion.div>
  );
}

export default WorkExperience;
