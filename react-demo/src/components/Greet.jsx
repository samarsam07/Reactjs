import React from 'react'

const Greet = () => {
    const name="john";
    const date=new Date()
  return <div>
    <h1>Name :{name}</h1>
    <p>Date:{date.getDate()}</p>
  </div>
}

export default Greet