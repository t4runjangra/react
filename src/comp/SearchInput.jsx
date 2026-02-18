import React from 'react'

const SearchInput = ({value,onChange,onSearch}) => {
    console.log("SearchInput rendered")
  return (
    <>
        <input type="text" value={value} onChange={onChange}  className='border-2' />
        <button onClick={onSearch} >click</button>
    </>

)
}

export default React.memo(SearchInput)