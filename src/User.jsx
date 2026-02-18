import { useState, useEffect,useCallback  } from 'react'
import SearchInput from './comp/SearchInput'
import UserProfile from './comp/UserProfile'
// console.log("Token exists:", !!import.meta.env.VITE_GITHUB_TOKEN)
const User = () => {
    const [input, setInput] = useState("")
    const [query, setQuery] = useState('')
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (!query) return;
        console.log("use Effect called");

        const controller = new AbortController();
        const fetchData = async (input) => {
            try {
                setData(null)
                setLoading(true)
                setError(null)

                const response = await fetch(`https://api.github.com/users/${input}`, {
                    signal: controller.signal,
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
                        'Accept': 'application/vnd.github+json'
                    }

                })
                if (!response.ok) throw new Error("User not found")
                const result = await response.json();
            console.log(typeof(result));
            
                setData(result)
            } catch (error) {
                if (error.name !== "AbortError") {
                    setError(error.message)
                }
            }
            finally {
                setLoading(false)

            }
        }
        fetchData(query)
        return () => controller.abort()
    }, [query])
    console.log("user Render");


    function handleChange(e) {

        setInput(e.target.value)
    }
    const handleSearch = useCallback(() => {
        setQuery(input)
    }, [input])
    return (
        <>
            <label>
                <SearchInput value={input} onChange={handleChange} onSearch={handleSearch} />
            </label>
            <UserProfile data={data} loading={loading} error={error} />
        </>

    )
}


export default User