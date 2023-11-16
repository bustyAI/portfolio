import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <p className='navbar__name my-4 mx-4'>Oscar Ochoa</p>
        

        <div className='flex flex-row navbar__text space-x-3 my-4 mx-4'>
          <Link href=''>About</Link>
          <div className=' border-l border-white'></div>
          <Link href=''>Contact</Link>
          <Link href=''>Github</Link>

        </div>
    </nav>
  )
}

export default Navbar