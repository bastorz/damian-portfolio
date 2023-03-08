import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";
type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] md:h-[650px] xl:w-[900px] xl:h-[750px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-y-scroll scrollbar-none">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        src={urlFor(experience?.companyImage).url()}
        alt=""
        className="w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
      />
      <div className="px-0 md:px-10 ">
        <h4 className="text-4xl font-light">{experience?.company}</h4>
        <p className="font-bold text-2xl mt-1">{experience?.jobTitle}</p>
        <div className="flex space-x-2 my-2">
          <img
            src={urlFor(experience?.companyImage).url()}
            alt=""
            className="h-10 w-10 rounded-full"
          />

          {experience?.technologies?.map((technology) => (
            <img
              key={technology._id}
              src={urlFor(technology?.image).url()}
              className="h-10 w-10 rounded-full"
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300 text-md">
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
