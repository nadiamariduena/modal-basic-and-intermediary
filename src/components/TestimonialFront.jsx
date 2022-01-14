import React, { useState } from "react";
import { dataSlider } from "../dataSlider";

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

        <div>
          {dataSlider.map((item, index) => {
            const { image } = item;
            return <img src={item.image} alt="" />;
          })}
        </div>

        {/*  */}
      </section>
    </>
  );
};

export default TestimonialFront;
