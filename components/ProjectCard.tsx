import React from "react";
import { urlFor } from "../sanity";
import { Project } from "../typings";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
  project: Project;
};

function ProductCard({ project }: Props) {
  return (
    <div className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[300px] md:w-[900px] md:h-[750px] xl:w-[900px] xl:h-[700px] p-6 opacity-100">
      <div
        key={project._id}
        className=" flex-shrink-0 flex flex-col items-center justify-center p-20 h-screen"
      >
        <Link href={project.linkToBuild} target="_blank">
          <motion.img
            initial={{ y: -300, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            src={urlFor(project?.image).url()}
            alt=""
            className="w-[300px] md:w-[600px]"
          />
        </Link>

        <div className="flex flex-col items-center justify-center space-y-6 px-0 md:px-10 max-w-6xl w-[300px]">
          <h4 className="text-2xl md:text-4xl font-semibold text-center decoration-[#F7AB0A]/50 underline underline-offset-4">
            {project?.title}
          </h4>

          <p className="text-md md:text-lg text-center md:text-left 2xl:min-w-[1000px] w-[300px] md:w-[700px]">
            {project?.summary}
          </p>

          <div className="flex items-center justify-center">
            <Link href={project.linkToBuild} target="_blank">
              <button className="bg-[#F7AB0A] font-semibold text-lg rounded-md px-4 py-2 opacity-100 hover:opacity-100 duration-200 2xl:opacity-80">
                Visit Project
              </button>
            </Link>
          </div>

          <div className="flex items-center justify-center space-x-4 pt-2">
            {project?.technologies?.map((technology, i) => (
              <img
                src={urlFor(technology?.image).url()}
                alt=""
                className="h-6 w-6 md:h-10 md:w-10 rounded-full"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
