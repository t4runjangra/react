import { useState } from 'react'
import './index.css'

function App() {
  const [color, setColor] = useState("gray")

  const buttons = [
    { name: "Yellow", color: "yellow", textColor: "black" },
    { name: "Red", color: "red", textColor: "white" },
    { name: "Blue", color: "blue", textColor: "white" },
    { name: "Black", color: "black", textColor: "white" },
  ]

  return (
    <div 
      className='w-full h-screen flex items-center justify-center duration-300 rounded-lg'
      style={{ backgroundColor: color, transitionProperty: "background-color" }}
    >
      <div className='fixed top-10 flex gap-6 bg-white bg-opacity-90 backdrop-blur-md rounded-3xl p-3 shadow-lg'>
        {buttons.map(({name, color: btnColor, textColor}) => (
          <button 
            key={name} 
            onClick={() => setColor(btnColor)}
            className={`w-20 py-2 rounded-full font-semibold shadow-md`}
            style={{backgroundColor: btnColor, color: textColor, transition: 'transform 0.2s ease'}}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            {name}
          </button>
        ))}
      </div>
    </div>
  )
}

export default App
 