import React from "react";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { PageInfo } from "../typings";
import Link from "next/link";

type Props = { pageInfo: PageInfo };

function ContactMe({ pageInfo }: Props) {
  return (
    <div className="h-[600px] md:h-[800px] lg:h-[400px] lg:py-32 xl:h-[700px] 2xl:h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center md:mt-10 pt-20 lg:pt-0 mt-[-100px] lg:mt-0">
      <h3 className="absolute top-16 md:top-32 lg:top-[-200px] xl:top-0 2xl:top-32 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <motion.div
        className="flex flex-col space-y-10 items-center justify-center mt-0 2xl:mt-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h4 className="text-2xl md:text-4xl max-w-[300px] 2xl:max-w-[500px] font-semibold text-center">
          I have got just what you need. Contact me through{" "}
          <a
            href="https://www.linkedin.com/in/dami%C3%A1n-alcalay/"
            className="decoration-[#F7AB0A]/50 underline underline-offset-4 text-white hover:text-blue-400 duration-200"
          >
            Linkedin
          </a>
        </h4>
        <img
          src="/4.jpeg"
          alt="Damian Pic"
          className="relative rounded-full mx-auto object-cover object-top w-36 h-36"
        />

        <div className="space-y-4">
          <Link
            href="https://www.linkedin.com/in/dami%C3%A1n-alcalay/"
            target="_blank"
          >
            <div className="flex items-center space-x-5 justify-center">
              <img src="/linkedin-logo.png" className="w-8 h-8" />
              <p className="text-lg md:text-2xl">Damián Alcalay López</p>
            </div>
          </Link>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#0f85bb] h-8 w-8" />
            <p className="text-lg md:text-2xl">{pageInfo?.address}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ContactMe;
