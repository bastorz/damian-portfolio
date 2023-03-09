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
    <div className="relative flex z-20">
      <div
        key={project._id}
        className=" flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
      >
        <Link href={project.linkToBuild} target="_blank">
          <motion.img
            initial={{ y: -300, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            src={urlFor(project?.image).url()}
            alt=""
          />
        </Link>

        <div className="space-y-10 px-0 md:px-10 max-w-6xl">
          <h4 className="text-4xl font-semibold text-center decoration-[#F7AB0A]/50 underline underline-offset-4">
            {project?.title}
          </h4>

          <p className="text-lg text-center md:text-left max-w-[800px]">
            {project?.summary}
          </p>
          <div className="flex items-center justify-center space-x-4">
            {project?.technologies?.map((technology, i) => (
              <img
                src={urlFor(technology?.image).url()}
                alt=""
                className="h-10 w-10 rounded-full"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
