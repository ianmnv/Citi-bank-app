import React, { useState } from "react";

import CreateDots from "./CreateDots";

function SliderHome() {
  let [slide, setSlide] = useState(0);

  const messages = [
    [
      "Welcome to Citi Bank",
      `You now have access to the best products and services in the market! 
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
      Quam earum quisquam dicta dignissimos minus odio perspiciatis culpa adipisci iste fugit.`,
    ],
    [
      "What would you like to do today?",
      `Take control over your daily banking, get advice from the best (us) to grow your money.
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
      Quam earum quisquam dicta dignissimos minus odio perspiciatis culpa adipisci iste fugit.`,
    ],
    [
      "You don't have a credit card yet?",
      `Get it today!
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
      Quam earum quisquam dicta dignissimos minus odio perspiciatis culpa adipisci iste fugit.`,
    ],
    [
      "Get in touch!",
      `We now have locations in many countries around the world, wherever you go we will be there.
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
      Quam earum quisquam dicta dignissimos minus odio perspiciatis culpa adipisci iste fugit.`,
    ],
    [
      "Feeling stuck with your budget?",
      "Don't worry! Get advise from the best experts, we give you 30 min a day for a for an appointment with one of our representatives for free.",
    ],
  ];

  function nextSlide(slide) {
    setSlide(slide + 1);
    if (slide === messages.length - 1) setSlide(0);
    activeDot(slide);
  }

  function prevSlide(slide) {
    setSlide(slide - 1);
    if (slide === 0) setSlide(messages.length - 1);
    activeDot(slide);
  }

  function activeDot(slide) {
    const children = document.querySelectorAll(".dot");
    children.forEach((child) => child.classList.remove("active-dot"));

    children[slide].classList.add("active-dot");
  }

  // setInterval(() => nextSlide(slide), 1000);

  return (
    <>
      {/* Arrow right */}
      <button
        onClick={() => nextSlide(slide)}
        className="slider-arrows arrow-right"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="arrows "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>

      {/* Arrow left */}
      <button
        onClick={() => prevSlide(slide)}
        className="slider-arrows arrow-left"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="arrows "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      <h1 className="homein-h1">{messages[slide][0]}</h1>
      <p className="homein-p">{messages[slide][1]}</p>

      <div className="dots">
        {messages.map((_, i) => (
          <CreateDots
            key={i}
            index={i}
            slide={slide}
            setSlide={setSlide}
            msg={messages}
            activeDot={activeDot}
          />
        ))}
      </div>
    </>
  );
}

export default SliderHome;
