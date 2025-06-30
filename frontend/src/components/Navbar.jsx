import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className=' bg-slate-700 text-white '>
            <div className=" flex justify-between items-center h-13 py-4 px-4 mycontainer">
            <div className='logo font-bold '>
                <span className='text-purple-400'>&lt;</span>
             Password 
                <span className='text-purple-400'>Manager &gt;</span>
            </div>
            {/* <ul className='flex gap-5 mr-20 justify-center'>
                <li>
                    <Link className='hover:font-bold' to='/'>Home</Link>
                </li>
                <li>
                    <Link className='hover:font-bold' to='/about'>About</Link>
                </li>
                <li>
                    <Link className='hover:font-bold' to='/contact'>Contact</Link>
                </li>
            </ul> */}
            <div>
                <a href='https://github.com/ParichayeGrover' target='_blank' rel='noopener noreferrer' className='flex items-center gap-2 hover:font-bold'>
                    <img src='./github.png' alt='GitHub Icon' className='w-5 h-5' />
                    GitHub
                </a>
            </div>
                </div>            
     
        </nav>
    )
}

export default Navbar
