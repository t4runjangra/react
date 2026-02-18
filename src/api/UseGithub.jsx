import { useState} from "react"


const UseGithub = () => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const fetchData = async (username) => {
        if (!username.trim()) return;
        
        setData(null)
        setLoading(true)
        setError(null)
        try {
            const response = await fetch(`https://api.github.com/users/${username}`)
            console.log("api called");
            
            if (!response.ok) throw new Error("Failed to fetch the data of the given username");
            const result = await response.json();
            setData(result)
        } catch (error) {
            console.log(error.message);
            setError(error.message)
        }
        finally {
            setLoading(false)
        }
    }
    return { data, loading, error, fetchData }



}

export default UseGithub
