import { useState, useEffect } from 'react'
import './App.css'
// import UseGithub from './api/UseGithub.jsx'









function App() {

  const [input, setInput] = useState("")
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!input) return;
    console.log("use Effect called");
    
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        setLoading(true)
        setError(null)

        const response = await fetch(`https://api.github.com/users/${input}`, { signal: controller.signal })
        if (!response) throw new Error("User not found")
        const result = await response.json();
        setData(result)
      } catch (error) {
        if (error.name !== "abortError") {
          setError(error.message)
        }
      }
      finally {
        setLoading(false)
      }
    }
    fetchData()
    return () => controller.abort()
  }, [input])

  // const { data, loading, error, fetchData } = UseGithub();
  // const handleSearch = () => {
  // fetchData(input)
  // }



  return (
    <>
      <label>Name</label>
      <input type="text" value={input} onChange={e => setInput(e.target.value)}
        className='border-2' />
      <br />
      <button
      // onClick={handleSearch}
      // onClick={handleSearch}
      >
        click me
      </button>
      {data && (
        <div className='mt-5'>
          <img src={data.avatar_url} alt="Avatar" width="100" />
          <h2>{data.name}</h2>
          <p>{data.bio}</p>
        </div>
      )}
    </>
  )
}
export default App
