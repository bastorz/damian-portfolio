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
    <div className="pb-10 2xl:pb-0">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="md:h-screen h-[1100px] flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
      >
        <h3 className="absolute top-12 md:top-6 xl:top-12 uppercase tracking-[20px] text-gray-500 text-2xl">
          Experience
        </h3>

        <ChevronDoubleLeftIcon
          className="w-14 h-14 p-1 cursor-pointer hover:bg-white/10 hover:rounded-full hover:p-0 duration-200 hidden xl:flex"
          onClick={prevSlide}
        />
        <div className="flex items-center justify-center md:pt-[1150px] xl:pt-0 pt-10">
          <div className="mt-32 pb-12 w-full flex ">
            {experiences?.map((experience, i) => (
              <div className={`${i === current ? "slide-active" : "slide"}`}>
                {i === current && (
                  <ExperienceCard
                    key={experience?._id}
                    experience={experience}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
        <ChevronDoubleRightIcon
          className="w-14 h-14 p-1 cursor-pointer hover:bg-white/10 hover:rounded-full hover:p-0 duration-200 hidden 2xl:flex"
          onClick={nextSlide}
        />
      </motion.div>
      <div className="relative flex items-center justify-center xl:hidden md:mt-4">
        <div className="absolute bottom-[-70px] flex space-x-20 mr-[24px]">
          <ChevronDoubleLeftIcon
            className="w-14 h-14 p-1 cursor-pointer hover:bg-white/10 hover:rounded-full hover:p-0 duration-200 "
            onClick={prevSlide}
          />
          <ChevronDoubleRightIcon
            className="w-14 h-14 p-1 cursor-pointer hover:bg-white/10 hover:rounded-full hover:p-0 duration-200 "
            onClick={nextSlide}
          />
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;
