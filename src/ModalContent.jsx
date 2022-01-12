import React, { useState } from "react";

const ModalContent = () => {
  const [changeImg, setChangeImg] = useState(
    "https://images.pexels.com/photos/8422782/pexels-photo-8422782.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  );

  const Changing = () => {
    if (
      changeImg ===
      "https://images.pexels.com/photos/8422782/pexels-photo-8422782.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    ) {
      setChangeImg(
        "https://images.pexels.com/photos/8422781/pexels-photo-8422781.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      );
    } else if (
      changeImg ===
      "https://images.pexels.com/photos/8422781/pexels-photo-8422781.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    ) {
      setChangeImg(
        "https://images.pexels.com/photos/8422757/pexels-photo-8422757.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      );
    } else {
      setChangeImg(
        "https://images.pexels.com/photos/8422782/pexels-photo-8422782.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      );
    }
  };

  return (
    <>
      <div className="todo-container">
        <div className="img-change"></div>
        <img className="img-box" src={changeImg} alt="" />
      </div>

      <button type="button" className="btn-card" onClick={Changing}>
        BTN
      </button>
    </>
  );
};

export default ModalContent;
