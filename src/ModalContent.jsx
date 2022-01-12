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
        "https://images.pexels.com/photos/8422782/pexels-photo-8422782.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      );
    } else {
      setChangeImg(
        "https://images.pexels.com/photos/8422782/pexels-photo-8422782.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      );
    }
  };

  return (
    <>
      <section className="modal-content">
        {" "}
        <div className="img-container">
          <img className="img-box" src={changeImg} alt="" />
        </div>
        <button type="button" className="btn-card" onClick={Changing}>
          &#10230;
        </button>
      </section>
    </>
  );
};

export default ModalContent;
