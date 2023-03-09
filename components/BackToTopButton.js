import { ChevronDoubleUpIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import Link from "next/link";

function BackToTopButton() {
  const scrollToTop = () => {
    globalThis.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex items-center justify-center">
      <Link href="#hero">
        <ChevronDoubleUpIcon
          className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
          onClick={scrollToTop}
        />
      </Link>
    </div>
  );
}

export default BackToTopButton;
