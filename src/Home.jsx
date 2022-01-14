import React, { useState } from "react";
import Modal from "./Modal";

//

import TestimonialFront from "./components/TestimonialFront";
import { dataSlider } from "./dataSlider";
//
const Home = () => {
  return (
    <>
      <Modal />
      <TestimonialFront slides={dataSlider} />
    </>
  );
};

//
//

export default Home;
