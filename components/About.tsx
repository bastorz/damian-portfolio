import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../typings";
import BackToTopButton from "./BackToTopButton";
import Link from "next/link";

type Props = {
  pageInfo: PageInfo;
};

function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        src="/damian-fondo.png"
        alt="Damian Pic"
        className="md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px] mt-10"
      />

      <div className="space-y-10 px-0 md:px-10 flex flex-col items-center justify-center mt-10">
        <div>
          <h4 className="text-4xl font-semibold">
            Here is a{" "}
            <span className="underline decoration-[#F7AB0A]/50 underline-offset-4">
              little
            </span>{" "}
            background
          </h4>
        </div>
        <div>
          <p className="text-[20px]">{pageInfo?.backgroundInformation}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
