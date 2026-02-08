import React, { useState } from 'react'

const Button = ({}) => {
    console.log("button render");
    
    const [count, setCount] = useState(0)
  return (
    <>
        <button
            onClick={()=>setCount(count+1)}
        >
           Button {count}
        </button>
        <br />
    </>
    )
}

export default Button