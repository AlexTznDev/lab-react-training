import { useState } from 'react';
import React from 'react';

function ClickablePicture(props) {
  const [boolean, setBoolean] = useState(true);

  const changeBoolean = () => {
    if (boolean === true) {
      setBoolean(false);
    } else {
      setBoolean(true);
    }
    console.log(boolean);
  };

  return (
    <div onClick={() => changeBoolean()}>

      {boolean === true ? (
        <img src={props.img} alt="img" width="200px" />
      ) : (
        <img src={props.imgClicked} alt="img clikable" width="200px" />
      )}
    </div>
  );
}

export default ClickablePicture;
