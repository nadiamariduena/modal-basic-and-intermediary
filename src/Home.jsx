import React, { useState } from "react";
import ModalContent from "./ModalContent";
//
import styled from "styled-components";

// Video  pexels-cottonbro-10678920.mp4
const videoBg =
  "https://images.pexels.com/photos/10679086/pexels-photo-10679086.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

const VideoWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: fixed;
  .VideoProductContainer {
    width: 100%;
    height: 100%;
    z-index: 2; //when i hid this one the icon scroll to bottom worked */
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    .video__product__box {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

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
      {openModal && <ModalContent closeModal={setOpenModal} />}
    </>
  );
};

export default Home;
