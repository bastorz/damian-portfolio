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
      className="h-[600px] md:h-[1000px] 2xl:h-screen relative flex flex-col text-center md:text-left 2xl:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center mt-[-250px] md:mt-32 pb-32 md:pb-0 "
    >
      <h3 className="absolute md:top-10 top-[-250px] 2xl:top-16 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        src="/4.jpeg"
        alt="Damian Pic"
        className="md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover 2xl:rounded-lg 2xl:w-96 2xl:h-[500px] mt-32 2xl:mt-10 hidden md:flex"
      />

      <div className="space-y-20 md:space-y-10 px-0 md:px-10 flex flex-col items-center justify-center mt-4 2xl:mt-0">
        <div>
          <h4 className="text-4xl font-semibold">
            Here is a{" "}
            <span className="underline decoration-[#F7AB0A]/50 underline-offset-4">
              little
            </span>{" "}
            background
          </h4>
        </div>
        <div className="pb-20 2xl:pb-0">
          <p className="text-md md:text-[20px]">
            {pageInfo?.backgroundInformation}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
