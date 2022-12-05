// import Header from "./Header";
// import Content from "./Content";
// import Total from "./Total";

import { useState } from "react";
import Button from "./Button";
import Display from "./Display";

const App = () => {
  // const course = {
  //   name: "Half Stack application development",
  //   parts: [
  //     {
  //       name: "Fundamentals of React",
  //       exercises: 10,
  //     },
  //     {
  //       name: "Using props to pass data",
  //       exercises: 7,
  //     },
  //     {
  //       name: "State of a component",
  //       exercises: 14,
  //     },
  //   ],
  // };

  // return (
  //   <div>
  //     <Header course={course.name} />
  //     <Content parts={course.parts} />
  //     <Total parts={course.parts} />
  //   </div>
  // );

  const [counter, setCounter] = useState(0);

  const increaseByOne = () => setCounter(counter + 1);
  const setToZero = () => setCounter(0);
  const decreaseByOne = () => setCounter(counter - 1);

  return (
    <div>
      <Display counter={counter} />
      <Button onClick={increaseByOne} text="Plus" />
      <Button onClick={setToZero} text="Zero" />
      <Button onClick={decreaseByOne} text="Minus" />
    </div>
  );
};

export default App;
