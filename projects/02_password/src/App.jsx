import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passRef = useRef(null)


  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_+=-[]{}`~"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  const copyPasstoClipboard = useCallback(() => {
    passRef.current?.select();
    // passRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password)
  }, [password])

return (
  <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
    <div className="w-full max-w-lg bg-gray-800 text-white rounded-xl shadow-lg p-6 space-y-6 border border-gray-700">

      <h1 className="text-3xl font-semibold text-center tracking-wide text-blue-400">
        Password Generator
      </h1>

      <div className="flex items-center bg-gray-700 rounded-lg overflow-hidden shadow-inner">
        <input
          type="text"
          value={password}
          readOnly
          ref={passRef}
          className="w-full text-lg px-4 py-3 bg-gray-700 text-gray-100 outline-none placeholder-gray-400"
        />
        <button
          onClick={copyPasstoClipboard}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 h-full transition"
        >
          Copy
        </button>
      </div>

      <div className="space-y-6">
        
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Length: <span className="text-blue-400 font-semibold">{length}</span>
          </label>
          <input
            type="range"
            min={6}
            max={20}
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full accent-blue-500 cursor-pointer"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          <label
            htmlFor="numberInput"
            className="flex items-center gap-3 p-3 bg-gray-700 hover:bg-gray-600 rounded-lg cursor-pointer transition border border-gray-600"
          >
            <input
              type="checkbox"
              id="numberInput"
              checked={numberAllowed}
              onChange={() => setNumberAllowed(prev => !prev)}
              className="accent-blue-500 scale-125"
            />
            <span className="text-sm">Include Numbers</span>
          </label>

          <label
            htmlFor="characterInput"
            className="flex items-center gap-3 p-3 bg-gray-700 hover:bg-gray-600 rounded-lg cursor-pointer transition border border-gray-600"
          >
            <input
              type="checkbox"
              id="characterInput"
              checked={charAllowed}
              onChange={() => setCharAllowed(prev => !prev)}
              className="accent-blue-500 scale-125"
            />
            <span className="text-sm">Include Special Characters</span>
          </label>

        </div>
      </div>

      <button
        onClick={passwordGenerator}
        className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-medium transition shadow-md"
      >
        Generate New Password
      </button>

    </div>
  </div>
)

}

export default App
