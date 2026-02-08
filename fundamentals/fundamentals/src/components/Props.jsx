import React from 'react'

const Props = ({count,setCount }) => {
console.log("child render");

  return (
    <>
    <br />
    <button className='w-10 bg-blue-500 h-10 rounded-3xl'
    onClick={()=>setCount(count+1)}>
        {count}


    </button>
    </>
)
}

export default Props