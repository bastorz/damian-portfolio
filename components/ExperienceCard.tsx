import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  return (
    <article className=" flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[340px] h-[1000px] md:w-[700px] md:h-[1900px] xl:w-[900px] xl:h-[750px] bg-[#292929] pt-8 xl:p-6 opacity-100 px-4 md:px-0 text-center md:text-left">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        src={urlFor(experience?.companyImage).url()}
        alt=""
        className="w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
      />

      <div className="px-0 md:px-10 space-y-8 md:space-y-4">
        <h4 className="text-4xl font-light">{experience?.company}</h4>
        <p className="font-bold text-2xl mt-1">{experience?.jobTitle}</p>
        <div className="flex space-x-2 my-2 justify-center md:justify-start">
          {experience?.technologies?.map((technology) => (
            <img
              key={technology?._id}
              src={urlFor(technology?.image).url()}
              className="w-6 h-6 md:h-10 md:w-10 rounded-full"
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300 text-md underline underline-offset-4 decoration-[#F7AB0A] ">
          {new Date(experience?.dateStarted).toDateString()} -{" "}
          {experience?.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience?.dateEnded).toDateString()}
        </p>

        <ul className="list-disc space-y-4 ml-5 text-md">
          {experience?.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
