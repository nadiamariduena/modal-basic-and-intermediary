import React, { useState } from "react";
import ModalContent from "./ModalContent";

const ModalBasic = () => {
  const [openModal, setOpenModal] = useState(false);
  console.log(openModal);
  return (
    <>
      <div className="modal">
        <button
          className="btn-card"
          type="button"
          onClick={() => setOpenModal(true)}
        >
          open
        </button>
        {openModal && <ModalContent />}
      </div>
    </>
  );
};

export default ModalBasic;
