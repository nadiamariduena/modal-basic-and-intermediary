import React, { useState } from "react";

function ModalContent({ closeModal }) {
  const [changeImg, setChangeImg] = useState(
    "https://images.pexels.com/photos/10679232/pexels-photo-10679232.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  );

  const Changing = () => {
    if (
      changeImg ===
      "https://images.pexels.com/photos/10679232/pexels-photo-10679232.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    ) {
      setChangeImg(
        "https://images.pexels.com/photos/10679206/pexels-photo-10679206.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      );
    } else if (
      changeImg ===
      "https://images.pexels.com/photos/10679206/pexels-photo-10679206.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    ) {
      setChangeImg(
        "https://images.pexels.com/photos/10679204/pexels-photo-10679204.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      );
    } else {
      setChangeImg(
        "https://images.pexels.com/photos/10679232/pexels-photo-10679232.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      );
    }
  };

  return (
    <>
      <section className="modal-content">
        <div className="img-box">
          <img src={changeImg} alt="" />
        </div>

        <button type="button" className="btn-card" onClick={Changing}>
          &#10230;
        </button>
        <button
          className="btn-close-modal"
          type="button"
          onClick={() => closeModal(false)}
        >
          X
        </button>
        <h1>The Must-Buy Photo Books of 2022</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi,
          maxime magnam perspiciatis rerum laudantium quaerat aut vel
          repudiandae placeat labore.
        </p>
        <h5>Courtesy of Whatever, Paris © Hello</h5>
      </section>
    </>
  );
}

export default ModalContent;
