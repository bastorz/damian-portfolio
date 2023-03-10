import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { Skill as SkillType } from "../typings";
import BackToTopButton from "./BackToTopButton";
import SkillMobile from "./SkillMobile";

type Props = {
  skills: SkillType[];
};

function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-[500px] md:h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 justify-center xl:space-y-0 mx-auto items-center xl:mt-0 md:mt-10"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current proficiency
      </h3>

      <div className="md:grid grid-cols-4 gap-5 hidden">
        {skills?.slice(0, skills?.length / 2)?.map((skill) => (
          <Skill key={skill?._id} skill={skill} />
        ))}

        {skills?.slice(skills?.length / 2, skills?.length)?.map((skill) => (
          <Skill key={skill?._id} skill={skill} directionLeft />
        ))}
      </div>
      <div className="grid grid-cols-4 gap-5 md:hidden">
        {skills?.map((skill) => (
          <SkillMobile key={skill?._id} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
