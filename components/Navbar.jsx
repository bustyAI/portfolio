import React from 'react'
import Link from 'next/link'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Border } from '.'

import { Neonderthaw } from 'next/font/google';

const neothaw =
  Neonderthaw({
    weight: '400',
    subsets: ['latin']
  })


const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className={`flex flex-row space-x-6`}>
        <p className={`navbar__name my-4 ml-4 ${neothaw.className}`}>
          Oscar Ochoa
        </p>
        <Border type={'border-l'} color={'border-neon-blue'} shadow={'shadow-neon-blue-bar'} />
        <Link href='https://github.com/bustyAI'><FaGithub className='w-12 h-12 mt-2' /></Link>
        <Link href='https://www.linkedin.com/in/oscar-ochoa-096420224/'><FaLinkedin className=' w-14 h-14 mt-1' /></Link>

      </div>

      <div className='navbar__contact'>
        <Link href='#'>About</Link>
        <Border color={'border-neon-red'} shadow={'shadow-neon-red-bar'} />
        <Link href='#'>Contact</Link>
        <Border color={'border-neon-green'} shadow={'shadow-neon-green-bar'} />
      </div>
    </nav>
  )
}

export default Navbar