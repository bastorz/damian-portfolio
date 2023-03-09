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
      className="h-screen relative flex flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-14 uppercase tracking-[20px] text-gray-500 text-2xl z-18">
        Projects
      </h3>

      <div className="w-full flex items-center justify-evenly z-10">
        <ChevronDoubleLeftIcon
          className="w-14 h-14 p-1 cursor-pointer hover:bg-white/10 hover:rounded-full hover:p-0 duration-200"
          onClick={prevSlide}
        />
        <div className="flex items-center justify-center">
          <div className="mt-32 pb-12 w-full flex snap-x snap-mandatory">
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
          className="w-14 h-14 p-1 cursor-pointer hover:bg-white/10 hover:rounded-full hover:p-0 duration-200"
          onClick={nextSlide}
        />
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12 z-100" />
    </motion.div>
  );
}

export default Projects;
