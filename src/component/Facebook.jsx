import berlin from '../data/berlin.json';
import { useState } from 'react';

function Facebook() {
  const [isEngland, setIsEngland] = useState(false);



  const changeEngland =()=>{
    if(isEngland === false){
        setIsEngland(true)
    }else{
        setIsEngland(false)
    }
  }

  console.log(berlin);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div className="containerBtn">
        <button>all</button>
        <button onClick={()=>{changeEngland()}}>England</button>
        <button>USA</button>
        <button>Malaysia</button>
        <button>Germany</button>
      </div>

      {berlin.map((eachOne, index) => {


        const backgroundColor = eachOne.country === "England" && isEngland === true ? ("skyblue"):("white")


        return (
          <div
            style={{
              display: 'flex',
              border: '1px solid black',
              gap: '10px',
              alignItems: 'center',
              backgroundColor: backgroundColor,
            }}
            key={index}
          >
            <img src={eachOne.img} alt="" width="200px" />
            <div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
              >
                <h4>First name: {eachOne.firstName}</h4>
                <h4>Last name: {eachOne.lastName}</h4>
                <h4>Gender: {eachOne.country}</h4>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Facebook;
