import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Header from './components/header'
import Button from './components/Button'
import Counter from './components/Counter'
// const obj=[
//   {id:1,name:"tarun",age:19},
//   {id:1,name:"aman",age:20},
//   {id:1,name:"yash",age:20}
// ]

//.map() creates a new array of the results


// destructoring

const vehichle = ["bmw", 2023, "m3"]

const [car, year, model] = vehichle

const person = {
  name: "tarun",
  born: 2006
}

const { name, born } = person



function App() {

  return (
    <>
      {/* <ul>
        {obj.map(user=>
          <li key={user.id}>
            {user.name} is {user.age} years old!
          </li>
        )}

      </ul> */}

      {/* <h1>Tarun owns a {car} whose model is {model} and year is {year} </h1> */}

      {/* {name} {born}
      <h1 className='bg-amber-300'>Tarun</h1> */}

      <Header />
      <Button name="Click" />
      <Button name="Tarun" />

      <Counter />
    </>
  )
}

export default App
