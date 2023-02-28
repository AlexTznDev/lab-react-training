import { useState } from 'react';

function LikeButton() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [colorArrCount, setColorArrCount] = useState(0);
  const [colorArrCount2, setColorArrCount2] = useState(0);
  const colorArr = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

  const incrementFirstButton = () => {
    setCount1(count1 + 1);
    if (colorArrCount < 6) {
      setColorArrCount(colorArrCount + 1);
    } else {
      setColorArrCount(0);
    }

  };
  const incrementSecondButton = () => {
    setCount2(count2 + 1);
    if (colorArrCount2 < 6) {
      setColorArrCount2(colorArrCount2 + 1);
    } else {
      setColorArrCount2(0);
    }

  };


  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <button
        onClick={() => incrementFirstButton()}
        style={{
          width: '8rem',
          padding: '.5rem 1rem',
          borderRadius: '10px',
          backgroundColor: colorArr[colorArrCount],
          border: 'none',
          color: 'white',
        }}
      >
        {count1}
      </button>

      <button
        onClick={() => incrementSecondButton()}
        style={{
          width: '8rem',
          padding: '.5rem 1rem',
          borderRadius: '10px',
          backgroundColor: colorArr[colorArrCount2],
          border: 'none',
          color: 'white',
        }}
      >
        {count2}
      </button>
    </div>
  );
}

export default LikeButton;
