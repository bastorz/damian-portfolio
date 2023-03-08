import { ChevronDoubleUpIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";

type Props = {};

function BackToTopButton({}: Props) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = async () => {
    if (window.scrollY > 300) {
      await setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  console.log(setIsVisible);

  return (
    <div className="flex items-center justify-center">
      <ChevronDoubleUpIcon
        className={`h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer ${
          isVisible ? "opacity-0" : "opacity-100"
        }`}
        onClick={scrollToTop}
      />
    </div>
  );
}

export default BackToTopButton;
