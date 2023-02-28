import React from 'react'

function Random(props) {

const randomNumber = Math.floor(Math.random() * (props.max - props.min +1) + props.min)


  return (
    <div>
          <div>
      <p 
      style={{padding:".5rem 1rem", 
      border: "2px solid black", 
      margin:"0px", 
      fontSize:"30px"}}> Random value beetwin {props.min} and {props.max} = {randomNumber}</p>
    </div>
    </div>
  )
}

export default Random
