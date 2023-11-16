import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <p className='navbar__name mx-12 my-12'>Oscar Ochoa</p>
        <p className='mx-16 my-12'></p>

        <div className='flex flex-row navbar__text space-x-3 mt-12 mx-12 '>
          <Link href=''>About</Link>
          <Link href=''>Contact</Link>
          <Link href=''>Github</Link>

        </div>
    </nav>
  )
}

export default Navbar