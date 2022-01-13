import React, { useState } from "react";

//
//
// import img1 from "https://images.pexels.com/photos/10679232/pexels-photo-10679232.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
// import img2 from "https://images.pexels.com/photos/10679206/pexels-photo-10679206.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
// import img3 from "https://images.pexels.com/photos/10679204/pexels-photo-10679204.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

const Example1 = () => {
  const [myProfession, setMyProfession] = useState("");
  //
  //
  const professions = ["police", "chef", "doctor"];
  //
  //

  return (
    <>
      <div className="btn-group" role="group" aria-label="basic example">
        {professions.map((profession) => {
          <button type="button" key={profession} className="btn-card">
            {profession.toLocaleUpperCase()}
          </button>;
        })}
      </div>

      {/* ------ */}

      <div className="rendering-profession">
        {/* once you will click, this below will render */}
        <p>{myProfession}</p>
      </div>
    </>
  );
};

export default Example1;
