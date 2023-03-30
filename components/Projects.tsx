"use client";

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
      className="h-[1200px] md:h-[700px] lg:h-[700px] xl:h-[1000px] 2xl:h-screen relative flex flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 md:mb-32 md:mt-20 xl:pb-40 lg:mt-48"
    >
      <h3 className="absolute top-5 md:top-[-30px] lg:top-[-170px] xl:md:top-10 uppercase tracking-[20px] text-gray-500 text-2xl z-18">
        projects
      </h3>

      <div className="flex flex-col mt-40 md:mt-0">
        <div className="w-full flex items-center justify-evenly z-10">
          <ChevronDoubleLeftIcon
            className="w-14 h-14 p-1 cursor-pointer hover:bg-white/10 hover:rounded-full hover:p-0 duration-200 hidden lg:flex"
            onClick={prevSlide}
          />
          <div className="flex items-center justify-center">
            <div className="w-full flex mt-[-80px] 2lg:mt-[-100px]">
              {projects?.map((project, i) => (
                <div className={`${i === current ? "slide-active" : "slide"}`}>
                  {i === current && (
                    <ProjectCard key={project?._id} project={project} />
                  )}
                </div>
              ))}
            </div>
          </div>
          <ChevronDoubleRightIcon
            className="w-14 h-14 p-1 cursor-pointer hover:bg-white/10 hover:rounded-full hover:p-0 duration-200 hidden lg:flex"
            onClick={nextSlide}
          />
        </div>

        <div className="relative flex items-center justify-center lg:hidden md:mt-10 mt-80">
          <div className="absolute flex space-x-20 md:bottom-[-200px] bottom-[200px]">
            <ChevronDoubleLeftIcon
              className="w-28 h-28 md:w-20 md:h-20 lg:w-14 lg:h-14 p-1 cursor-pointer hover:bg-white/10 hover:rounded-full hover:p-0 duration-200 "
              onClick={prevSlide}
            />
            <ChevronDoubleRightIcon
              className="w-28 h-28 md:w-20 md:h-20 lg:w-14 lg:h-14 p-1 cursor-pointer hover:bg-white/10 hover:rounded-full hover:p-0 duration-200 "
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
