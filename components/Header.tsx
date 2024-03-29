import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { Social } from "../typings";

type Props = {
  socials: Social[];
};

function Header({ socials }: Props) {
  return (
    <header className="2xl:sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center p-5">
      <motion.div
        className="flex flex-row items-center"
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        {socials?.map((social, i) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            target="_blank"
            fgColor="gray"
            bgColor="transparent"
            className="opacity-70 hover:opacity-100 duration-200"
          />
        ))}
      </motion.div>
      <motion.div
        className="flex flex-row text-gray-300 cursor-pointer items-center"
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <a href="#contact">
          <SocialIcon
            className="cursor-pointer opacity-70 hover:opacity-100 duration-200"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400 opacity-70 hover:opacity-100 duration-200">
            Get In Touch
          </p>
        </a>
      </motion.div>
    </header>
  );
}

export default Header;
