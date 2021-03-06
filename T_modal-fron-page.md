#### If we want to conditionally render the model, based on the value of the state (true or false), all we have to do is open some curly brackets and add a condition

```javascript
{
  openModal && <Modal />;
}
```

##### The toLocaleLowerCase() method does not change the original string. The toLocaleLowerCase() returns the same result as toLowerCase() , except for locales that conflict with the regular Unicode case mappings (such as Turkish).

```javascript
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
```

##### With the following you will be able to click in a button and unveil a text that is related to the button you click

- for example, if i click police I will see police

```javascript
import React, { useState } from "react";

const Example1 = () => {
  // 1
  const professions = ["police", "chef", "doctor"];
  // 2
  const [myProfession, setMyProfession] = useState("");
  //
  //

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

export default Example1;
```

<br>
<br>

## Click on a button and unveil the corresponding image

#### Create another component below the component Example1

```javascript
//
// ------- Component related to the image

const ProfessionImg = ({ src }) => {
  return <img src={src} alt="" style={{ width: "200px", height: "250px" }} />;
};

//
//

export default Example1;
```

#### after that render the img like so

```javascript
        {/* ------ */}

        <div className="rendering-profession">
          {/*4  once you will click on the button above, this below will render */}
          <p>{myProfession}</p>

          <p>
            {myProfession === "police" && <ProfessionImg src={img1} />}
            {/* {myProfession === "chef" && <ProfessionImg src={img2} />}
            {myProfession === "doctor" && <ProfessionImg src={img3} />} */}
          </p>
        </div>
      </section>
    </>
  );
};

//
// ------- Component related to the image
```

##### i notice there was an error, the reason is because we are telling that the img name has to match the condition here

```javascript
 {myProfession === "police
```

#### if the imagine isnt 'police.jpg', it will show an error

<br>
<br>

#### // pointer-events: none; //only add this when you have an issue with overlay
