import { useState } from 'react';

function Carousel(props) {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    if (count < 3) {
      setCount(count + 1);
    }
  };
  const decrementCount = () =>{
    if (count > 0) {
        setCount(count - 1);
      }
  }

  return (
    <div style={{ display: 'flex' }}>
      <button onClick={() => decrementCount()}>LEFT</button>

      <img src={props.images[count]} alt="image1" />

      <button onClick={() => incrementCount()}>RIGHT</button>
    </div>
  );
}

export default Carousel;
