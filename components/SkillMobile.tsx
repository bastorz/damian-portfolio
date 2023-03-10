import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  directionLeft?: boolean;
  skill: Skill;
};

function Skill({ skill }: Props) {
  return (
    <div className="group relative flex cursor-pointer top-24">
      <motion.img
        initial={{ opacity: 0 }}
        transition={{ duration: 0.7 }}
        whileInView={{ opacity: 1 }}
        src={urlFor(skill?.image).url()}
        className="rounded-full border border-gray-500 object-cover w-10 h-10 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out "
      />
    </div>
  );
}

export default Skill;
