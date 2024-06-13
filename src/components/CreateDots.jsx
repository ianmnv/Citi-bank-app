import React, { useEffect } from "react";

function CreateDots(props) {
  const { index, slide, setSlide, msg, activeDot } = props;

  useEffect(() => activeDot(slide), [slide]);

  // function goToSlide(e) {
  //   const { slide } = e.target.dataset;
  //   const parent = e.target.closest("#homein-slider");
  //   const sibling = parent.querySelector(".slides");
  //   const h1 = sibling.querySelector("h1");
  //   const p = sibling.querySelector("p");

  //   h1.textContent = msg[slide][0];
  //   p.textContent = msg[slide][1];

  //   setSlide(slide);
  //   activeDot(slide);
  // }

  return (
    <>
      <div
        // onClick={(e) => goToSlide(e)}
        data-slide={index}
        key={index}
        className="dot"
      ></div>
    </>
  );
}

export default CreateDots;
