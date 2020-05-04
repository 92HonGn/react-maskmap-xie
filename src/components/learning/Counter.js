import React,{ useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(5);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);

  return (
    <div className="container">
      <div
        className="chevron chevron-up"
        onClick={handleIncrement}
        style={{
          visibility: count >= 10 && "hidden"
        }}
      />

      <div className="number">{count}</div>

      <div
        className="chevron chevron-down"
        onClick={handleDecrement}
        style={{
          visibility: count <= 0 && "hidden"
        }}
      />
    </div>
  );
};

export default Counter;