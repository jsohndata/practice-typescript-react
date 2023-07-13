import React from 'react';

const Counter = () => {
  const [counter, setCounter] = React.useState<number>(0);
  const [ multiply, setMultiply ] = React.useState<number>(1);

  const handleButton = () => {
    setCounter(previous => previous + 1.1)
  }

  const handleMultiply = () => {
    setMultiply(previous => previous * 3.1)
  }

  return (
    <section className="container">
      <button onClick={handleButton}>{counter}</button>
      <button onClick={handleMultiply}>{multiply}</button>
    </section>
  );
};

export default Counter;