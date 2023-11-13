import React from 'react'
import { Menu } from '.'

const Navbar = () => {
  return (
    <div className='navbar'>
        <p className='navbar__name mx-12 my-12'>Oscar Ochoa</p>
        <p className='mx-16 my-12'><Menu/></p>
    </div>
  )
}

export default Navbar