import React, { useState } from "react";
import ModalContent from "./ModalContent";

const ModalBasic = () => {
  const [openModal, setOpenModal] = useState(false);
  console.log(openModal);
  return (
    <>
      <div>
        <button
          className="btn-card"
          type="button"
          onClick={() => setOpenModal(true)}
        >
          button
        </button>
        {openModal && <ModalContent />}
      </div>
    </>
  );
};

export default ModalBasic;
