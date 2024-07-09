import React, { useState } from 'react';

function Counter() {
  // Initialize count state to 0
  const [count, setCount] = useState(0);

  // Function to handle increment
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // Function to handle decrement
  const handleDecrease = () => {
    if (count >0)
        {
            setCount(count - 1);
        }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '300px', margin: 'auto', textAlign: 'center' }}>
      <h2>Counter: {count}</h2>
      <div>
        <button onClick={handleIncrement} style={buttonStyle}>Increase</button>
        <button onClick={handleDecrease} style={buttonStyle}>Decrease</button>
      </div>
    </div>
  );
}

// Style for buttons
const buttonStyle = {
  padding: '10px 20px',
  margin: '10px',
  fontSize: '16px',
  cursor: 'pointer'
};

export default Counter;
