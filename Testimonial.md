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

> **By default** the state will be at cero, and the reason for that is because if we set the state, without telling it that we want the **current** it will lag, and it will get the previous value, [read more about this issue in this repo](https://github.com/nadiamariduena/react-recap-2022/tree/5-useState-counter), **Look for 'current'**

<br>
