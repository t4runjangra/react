import { useState } from "react"
import UseGithub from "../api/UseGithub"

const Profile = () => {
    const [username, setUsername] = useState("")
    const { data, loading, error, fetchData } = UseGithub()
    console.log(username);
    
    return (
        <>
            <label>name: </label>
            <input type="text" name="name" value={username} onChange={(e) => setUsername(e.target.value)} className="border-2" />

            <button onClick={()=> fetchData(username)}>
                click me!
            </button>

            {loading && <p>Loading....</p>}
            {error && <p>{error}</p>}
            {data &&
                <div className="w-80">
                    <img src={data.avatar_url} alt="Avatar" width="100" />
                    <h2>{data.name}</h2>
                    <p>{data.bio}</p>
                </div>
            }
        </>
    )
}

export default Profile