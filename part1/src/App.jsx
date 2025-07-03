import { useState } from "react";

function App() {
  const [contador, setContador] = useState(0);

  setTimeout(() => setContador(contador + 1), 1000);

  return (
    <div>
      <div>{contador}</div>
      <Header />
      <Content />
      <Total />
    </div>
  );
}

const Header = () => {
  const course = "Half Stack application development";
  return <h1>{course}</h1>;
};

const Content = () => {
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;
  return (
    <>
      <Part part={part1} exercises={exercises1} />
      <Part part={part2} exercises={exercises2} />
      <Part part={part3} exercises={exercises3} />
    </>
  );
};

const Total = () => {
  const exercises1 = 10;
  const exercises2 = 7;
  const exercises3 = 14;
  return <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>;
};
export default App;

const Part = ({ part, exercises }) => {
  return (
    <p>
      {part} {exercises}
    </p>
  );
};
