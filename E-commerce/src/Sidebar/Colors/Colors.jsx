import React from 'react'
import './Colors.css'
import Input from '../../components/Input'

const Colors =({handleChange}) => {
  return <div>
    <h2 className="sidebar-title">Colors</h2>
       <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" name="test2" value="" />
          <span className="checkmark"></span>all
        </label>
    <Input
      handleChange={handleChange}
      value="red"
      title="Red"
      name="test2"
      color="#ff0000"
    />
    <Input
      handleChange={handleChange}
      value="blue"
      title="Blue"
      name="test2"
      color="#0000ff"
    />
    <Input
      handleChange={handleChange}
      value="green"
      title="Green"
      name="test2"
      color="#00ff00"
    />
    <Input
      handleChange={handleChange}
      value="black"
      title="Black"
      name="test2"
      color="#000000"
    />
    <Input
      handleChange={handleChange}
      value="white"
      title="White"
      name="test2"
      // color="#ffffff"
    />
  </div>
}

export default Colors