import React from 'react'
import { Menu } from '.'

const Navbar = () => {
  return (
    <div className='flex flex-1 w-full flex-row justify-between items-start h-1/6 bg-teal-500'>
        <p className='navbar__text'>Oscar Ochoa</p>
        <p className=''><Menu/></p>
    </div>
  )
}

export default Navbar