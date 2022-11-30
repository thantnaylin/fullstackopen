import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const App = () => {
  const course = "Half Stack application development";

  const courseDetails = [
    {
      part: "Fundamentals of React",
      exercise: 10,
    },
    {
      part: "Using props to pass data",
      exercise: 7,
    },
    {
      part: "State of a component",
      exercise: 14,
    },
  ];

  return (
    <div>
      <Header course={course} />
      <Content courseDetails={courseDetails} />
      <Total
        total={courseDetails.reduce((acc, curr) => acc + curr.exercise, 0)}
      />
    </div>
  );
};

export default App;
