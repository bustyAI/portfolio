import React from 'react'
import Link from 'next/link'
import { Border } from '.'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <p className='navbar__name my-4 mx-4'>
        Oscar Ochoa
      </p>


      <div className='flex flex-row navbar__text space-x-3 my-4 mx-4'>
        <Link href=''>About</Link>
        <Border color={'border-neon-red'} shadow={'shadow-neon-red-bar'} />
        <Link href=''>Contact</Link>
        <Border color={'border-neon-blue'} shadow={'shadow-neon-blue-bar'} />
        <Link href=''>Github</Link>

      </div>
    </nav>
  )
}

export default Navbar