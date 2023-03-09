import React from "react";

function ScrollDirection() {
  const buttonRight = document.getElementById("slideRight");
  const scrollRight = () => {
    buttonRight.onclick = function () {
      document.getElementById("container").scrollLeft += 20;
    };
  };

  return (
    <div id="container">
      <button id="slideLeft" onclick={scrollRight}>
        Slide left
      </button>
    </div>
  );
}

export default ScrollDirection;
