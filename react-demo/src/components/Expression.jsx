import React from 'react'

const Expression = () => {
    const myName="Samar";
    const multiply=(a,b)=>a*b
    const specialClass="special-class";
  return  <div>
    <h1>My name is {myName}</h1>
    <p> 2 + 2 ={2+2}</p>
    <p> 2 * 2 ={multiply(2,2)}</p>
    <p>list of my friends :{["sourabh","yash","kunal"]}</p>
    <p className={specialClass}>this is a special class</p>
  </div>
}

export default Expression