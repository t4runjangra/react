import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    console.log("Counter child render");
    
    return (
        <>
            <br />
            <br />
            <br />
            <br />
            {count}
            <br />
            <button
                // value={count}
                onClick={() => setCount(count+1)}
                className='w-10 bg-amber-200 '
            >
                +
            </button>
            <button
                // value={count}
                onClick={() => setCount(count+1)}
                className='w-10 bg-amber-200 '
            >
                +
            </button>

            <button
                // value={count}
                onClick={() => setCount((count) => count - 1)}
                className='w-10 bg-blue-200 '
            >
                -

            </button>
            <span> </span>
            <span>  </span>
            <span> </span>
            <span> </span>
            <span> </span>
            <button
                // value={count}
                onClick={() => setCount(0)}
                className='w-20 bg-red-400 '
            >
                reset

            </button>
        </>
    )
}

export default Counter