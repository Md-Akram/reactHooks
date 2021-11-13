// UseState Basics

import React, { useState } from 'react'

const UseStateBasics = () => {
  const [name, setName] = useState('Akram')
  const changer = () => {
    if (name === 'Akram') {
      setName('kaikobad')
    } else {
      setName('Akram')
    }
    
    console.log(name)
  }
  return (
    <>
      <h2>{name}</h2>
      <button className='btn' onClick={changer}>
        Change Name
      </button>
    </>
  )
}

export default UseStateBasics
