import React from 'react'

const Header = () => {
    return (
        <>
        <nav className='flex w-screen justify-evenly items-center h-24 bg-gray-500'>
            <div className='w-1/2 text-4xl'>
                    header-section
            </div>
            <ul className='flex gap-2'>
                <li>
                    home
                </li>
                <li>
                    about
                </li>
                <li>
                    contact
                </li>
            </ul>
        </nav>
        </>

    )
}

export default Header