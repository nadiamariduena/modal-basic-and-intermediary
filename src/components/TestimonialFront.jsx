import React, { useState } from "react";
import { dataSlider } from "../dataSlider";
import { CgArrowLongLeft, CgArrowLongRight } from "react-icons/cg";

//
//
const TestimonialFront = ({ slides }) => {
  //
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  //
  //if our slides, dont have an array and if our array is not an array type
  //  OR || the slides, which is the images, has less or equal than 0,
  // then return null
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  //
  return (
    <section className="testimonial-front">
      <h1>Testimonial</h1>
      {/*  */}
      <div className="slider">
        <CgArrowLongLeft className="left-arrow" />
        <CgArrowLongRight className="right-arrow" />

        {dataSlider.map((item, index) => {
          return (
            <>
              <img
                key={item.id}
                src={item.image}
                alt="img"
                className="img-box"
              />
              <div className="text-box">
                {" "}
                <h2>{item.desc}</h2>
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
};

export default TestimonialFront;
