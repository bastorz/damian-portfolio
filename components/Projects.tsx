import React, { useState } from "react";
import { motion } from "framer-motion";
import { Project as ProjectType } from "../typings";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/outline";

import ProjectCard from "./ProjectCard";

type Props = {
  projects: ProjectType[];
};

function Projects({ projects }: Props) {
  const [current, setCurrent] = useState(0);
  const lenght = projects.length;

  if (!Array.isArray(projects) || projects.length <= 0) {
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
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className="h-[1000px] md:h-[1000px] 2xl:h-screen relative flex flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-5 md:top-8 uppercase tracking-[20px] text-gray-500 text-2xl z-18">
        Projects
      </h3>

      <div className="flex flex-col">
        <div className="w-full flex items-center justify-evenly z-10">
          <ChevronDoubleLeftIcon
            className="w-14 h-14 p-1 cursor-pointer hover:bg-white/10 hover:rounded-full hover:p-0 duration-200 hidden 2xl:flex"
            onClick={prevSlide}
          />
          <div className="flex items-center justify-center">
            <div className="w-full flex mt-[-80px] 2xl:mt-[-100px]">
              {projects?.reverse().map((project, i) => (
                <div className={`${i === current ? "slide-active" : "slide"}`}>
                  {i === current && (
                    <ProjectCard key={project?._id} project={project} />
                  )}
                </div>
              ))}
            </div>
          </div>
          <ChevronDoubleRightIcon
            className="w-14 h-14 p-1 cursor-pointer hover:bg-white/10 hover:rounded-full hover:p-0 duration-200 hidden 2xl:flex"
            onClick={nextSlide}
          />
        </div>

        <div className="relative flex items-center justify-center xl:hidden md:mt-32">
          <div className="absolute flex space-x-20 bottom-[2px] md:bottom-[-40px]">
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

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12 z-100" />
    </motion.div>
  );
}

export default Projects;
