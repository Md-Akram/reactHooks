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


//useEffect Data fetching


import React, { useState, useEffect } from 'react'

const url = 'https://api.github.com/users'

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([])

  async function getUser() {
    const response = await fetch(url)
    const data = await response.json()
    setUsers(data)
    console.log(data)
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <>
      <h3> fetching</h3>
      <ul className='users'>
        {users.map((user) => {
          const { avatar_url, html_url, id, login } = user
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h3>{login}</h3>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default UseEffectFetchData


// Conditional rendering

import React, { useState, useEffect } from 'react'
const url = 'https://api.github.com/users/QuincyLarson'
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState('default user')

  async function getUser() {
    const response = await fetch(url)
    const data = await response.json()
    if (response.status >= 200 && response.status <= 299) {
      const { name } = data
      setIsLoading(false)
      setUser(name)
    } else {
      setIsLoading(false)
      setIsError(true)
    }
  }

  useEffect(() => {
    setIsLoading(true)
    getUser()
  }, [])

  if (isLoading) {
    return <h2>Loading...</h2>
  } else if (isError) {
    return <h2>Error...</h2>
  } else {
    return <h2>{user}</h2>
  }
}

export default MultipleReturns


// Short circuit

import React, { useState } from 'react'
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('')

  return (
    <div>
      <h2>{text || 'akram'}</h2>
      {!text && <h2>akib</h2>}
    </div>
  )
}

export default ShortCircuit


// form
import React, { useState } from 'react'
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [person, setPerson] = useState([])
  const handleClick = (e) => {
    e.preventDefault()
    const newPerson = { firstName, email, id: Date.now().toString() }
    setPerson([...person, newPerson])
    setFirstName('')
    setEmail('')
    console.log()
  }

  return (
    <>
      <article>
        <div>
          <form className='form'>
            <div className='form-control'>
              <label htmlFor='firstName'>Name : </label>
              <input
                type='text'
                id='firstName'
                name='firstName'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            <div className='form-control'>
              <label htmlFor='email'>Email : </label>
              <input
                type='text'
                id='email'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button onClick={handleClick}>Add Person</button>
          </form>
        </div>
        <div>
          {person.map((people) => {
            const { firstName, email, id } = people
            return (
              <div key={id}>
                <h4>{firstName}</h4>
                <p>{email}</p>
              </div>
            )
          })}
        </div>
      </article>
    </>
  )
}

export default ControlledInputs
