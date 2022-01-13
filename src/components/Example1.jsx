import React, { useState } from "react";

//
//
// import img1 from "https://images.pexels.com/photos/10679232/pexels-photo-10679232.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
// import img2 from "https://images.pexels.com/photos/10679206/pexels-photo-10679206.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
// import img3 from "https://images.pexels.com/photos/10679204/pexels-photo-10679204.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

const Example1 = () => {
  // 1
  const professions = ["police", "chef", "doctor"];
  // 2
  const [myProfession, setMyProfession] = useState("");
  //
  //
  const images = [
    "https://images.pexels.com/photos/10679232/pexels-photo-10679232.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/10679206/pexels-photo-10679206.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/10679204/pexels-photo-10679204.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  ];
  //
  //

  return (
    <>
      <section className="example2">
        {/* 
        
        
        
        */}
        <div className="btn-group">
          {/* 3 */}
          {professions.map((profession) => (
            <button
              type="button"
              key={profession}
              className="btn-card"
              onClick={() => setMyProfession(profession)}
            >
              {profession.toLocaleUpperCase()}
            </button>
          ))}
        </div>

        {/* ------ */}

        <div className="rendering-profession">
          {/*4  once you will click on the button above, this below will render */}
          <p>{myProfession}</p>
        </div>
      </section>
    </>
  );
};

//
// ------- Component related to the image

const ProfessionImg = ({ src }) => {
  return <img src={src} alt="" style={{ width: "200px", height: "250px" }} />;
};

//
//

export default Example1;
