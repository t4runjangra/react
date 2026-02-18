import React from 'react'

const UserProfile = ({ data, loading, error }) => {
  console.log("UserProfile rendered",data)
  return (
    <>
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

export default React.memo(UserProfile)
