import React, { useState } from "react";
import { dataSlider } from "../dataSlider";
import { CgArrowLongLeft, CgArrowLongRight } from "react-icons/cg";

//
//
const TestimonialFront = (slides) => {
  //
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  //
  return (
    <>
      <section className="testimonial-front">
        <h1>Testimonial</h1>

        {/*  */}

        <div className="slider">
          <CgArrowLongLeft className="left-arrow" />
          <CgArrowLongRight className="right-arrow" />
          {dataSlider.map((item, index) => {
            const { image } = item;
            return <img src={item.image} alt="img" className="img-box" />;
          })}
        </div>

        {/*  */}
      </section>
    </>
  );
};

export default TestimonialFront;
