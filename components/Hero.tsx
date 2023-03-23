import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import { PageInfo } from "../typings";

type Props = {
  pageInfo: PageInfo;
};

function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, I'm Damian Alcalay",
      "Guy-who-loves-Valorant.tsx",
      "<ButAlsoLovesToCode/>",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="relative md:h-screen h-[400px] flex flex-col space-y-10 md:space-y-20 2xl:space-y-8 items-center justify-center text-center overflow-hidden top-24 mb-[600px] md:mb-0">
      <BackgroundCircles />
      <img
        src="/4.jpeg"
        alt="Damian Pic"
        className="relative rounded-full mx-auto w-36 h-36  object-cover object-top"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          {pageInfo?.role}
        </h2>
        <h1 className="lg:text-6xl font-semibold px-10 md:text-4xl text-2xl">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5 opacity-0 md:opacity-100">
          <a href="#about">
            <button className="heroButton">About</button>
          </a>
          <a href="#experience">
            <button className="heroButton">Experience</button>
          </a>
          <a href="#skills">
            <button className="heroButton">Skills</button>
          </a>
          <a href="#projects">
            <button className="heroButton">Projects</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
