import React from 'react'
import Logo from './Logo'
import Nav from './Nav'
import { IoIosSearch } from "react-icons/io";

const Header = () => {
  return (
    <div className='flex justify-between items-center py-5'>
        <div className='flex items-center'>
            <Logo />
            <h2 className='font-semibold'>Abril Law Office</h2>
        </div>
        <Nav />
        <IoIosSearch className='cursor-pointer' size={25}/>
    </div>
  )
}

export default Header