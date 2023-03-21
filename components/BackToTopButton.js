import { ChevronDoubleUpIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";

function BackToTopButton() {
  return (
    <div className="flex items-center justify-center">
      <a href="#hero">
        <ChevronDoubleUpIcon className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer" />
      </a>
    </div>
  );
}

export default BackToTopButton;
