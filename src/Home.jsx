import React, { useState } from "react";
import ModalContent from "./ModalContent";
//

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  console.log(openModal);

  return (
    <>
      <section className="modal">
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          reprehenderit quae aut necessitatibus mollitia asperiores doloribus
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          reprehenderit quae aut necessitatibus mollitia asperiores doloribus
          nesciunt laborum consequuntur magni? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Ipsam reprehenderit quae aut
          necessitatibus mollitia asperiores doloribus nesciunt laborum
          consequuntur magni?
        </p>
        <button
          className="btn-card"
          type="button"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          open
        </button>{" "}
      </section>{" "}
      {openModal && <ModalContent closingModal={setOpenModal} />}
    </>
  );
};

export default Home;
