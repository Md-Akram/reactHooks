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


// UseState Array

import React from 'react'
import { data } from '../../../data'

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data)
  const remover = (id) => {
    const newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }
  return (
    <>
      <h2>useState array example</h2>
      {people.map((person) => {
        const { id, name } = person
        return (
          <div className='item' key={id}>
            <h3>{name}</h3>
            <button className='btn' onClick={() => remover(id)}>
              remove
            </button>
          </div>
        )
      })}
      <button className='btn' onClick={() => setPeople([])}>
        remove items
      </button>
    </>
  )
}

export default UseStateArray


//useState object

import React, { useState } from 'react'

const UseStateObject = () => {
  const [people, setPeople] = useState({
    name: 'akram',
    age: 21,
  })
  const changer = () => {
    setPeople({ ...people, age: 200 })
  }
  return (
    <>
      <p>{people.name}</p>
      <p>{people.age}</p>
      <button className='btn' onClick={changer}>
        change age
      </button>
    </>
  )
}

export default UseStateObject

//useState functional update

import React, { useState } from 'react'

const UseStateCounter = () => {
  const [value, setValue] = useState(0)
  const increase = () => {
    setValue((oldValue) => oldValue + 1)
  }
  const decrease = () => {
    setValue((oldValue) => {
      if (oldValue === 0) {
        return 0
      } else {
        return oldValue - 1
      }
    })
  }
  const reset = () => {
    setValue((oldValue) => (oldValue = 0))
  }

  return (
    <>
      <h1>Counter:{value}</h1>
      <button className='btn' onClick={increase}>
        Increase
      </button>
      <button className='btn' onClick={reset}>
        Reset
      </button>
      <button className='btn' onClick={decrease}>
        Decrease
      </button>
    </>
  )
}

export default UseStateCounter

//useEffect Basics

import React, { useState, useEffect } from 'react'
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (value > 0) {
      document.title = `new message(${value})`
    } else {
      document.title = `React App`
    }
  }, [value])

  return (
    <>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        Increase
      </button>
      <button className='btn' onClick={() => setValue(value - 1)}>
        Decrease
      </button>
    </>
  )
}

export default UseEffectBasics

//useEffect Cleanup function

import React, { useState, useEffect } from 'react'

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth)

  const checkSize = () => {
    setSize(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', checkSize)
    return () => {
      window.removeEventListener('resize', checkSize)
    }
  })

  return (
    <>
      <h1>{size}px</h1>
    </>
  )
}

export default UseEffectCleanup
