<br>

## 🌈

### Lets start by creating an array of images

```javascript
export const dataSlider = [
  {
    image:
      "https://images.pexels.com/photos/10679196/pexels-photo-10679196.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    image:
      "https://images.pexels.com/photos/10679184/pexels-photo-10679184.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    image:
      "https://images.pexels.com/photos/10679176/pexels-photo-10679176.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
];
```

<br>

### Now Create the component to nest the images

- map the images to see if they are showing

```javascript
//
//
const TestimonialFront = () => {
  return (
    <>
      <section className="testimonial-front">
        <h1>Testimonial</h1>

        {/*  */}

        <div>
          // nesting and mapping the images ✋
          {dataSlider.map((item, index) => {
            const { image } = item;
            return <img src={item.image} alt="" />;
          })}
        </div>

        {/*  */}
      </section>
    </>
  );
};

export default TestimonialFront;
```

<br>
<br>

# 🍨

<br>

### Now lets set up the <u>States</u>

**1.** We will set up the current state:

<br>

> **By default** the state will be at cero, and the reason for that is because if we set the state, without telling it that we want the **current** it will lag, and it will get the previous value without the current, [read more about this issue in this repo](https://github.com/nadiamariduena/react-recap-2022/tree/5-useState-counter), **Look for 'current'**

<br>

```javascript
import React, { useState } from "react";
import { dataSlider } from "../dataSlider";

//
//
const TestimonialFront = () => {
  //
  const [current, setCurrent] = useState(0); // ✋


  //
  return (
    <>
```

<br>
<br>

### Add this to the 'TestimonialFront'

- It will show an error but you will solve it in the next step

```javascript
const length = slides.length;
```

### Then Go to the Home.jsx and add the prop

- This prop will pass the data from one component to the other

<br>

###### Home.jsx

<br>

```javascript
import { dataSlider } from "./dataSlider";
//
const Home = () => {
  return (
    <>
      {/* <Modal /> */}
      <TestimonialFront slides={dataSlider} /> 👍 slides prop
    </>
  );
};
```

<br>

###### TestimonialFront.jsx

<br>

```javascript
//
//
const TestimonialFront = (slides) => { ✋
  //
  const [current, setCurrent] = useState(0);
  const length = slides.length; ✋
```

<br>
<br>

### Add the Arrow icons

- You can either install this [react-icons](https://react-icons.github.io/react-icons/)

##### [arrows](https://react-icons.github.io/react-icons/)

```javascript
npm install react-icons
```

- Or just use some html symbols
