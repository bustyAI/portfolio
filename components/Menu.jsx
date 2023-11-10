"use client"
import React from 'react'
import { useState } from 'react'
import { HiMenu, HiOutlineMenuAlt1 } from 'react-icons/hi'



const Menu = () => {
    const [isHovered, setIsHoverd] = useState(false);

    return (
        <div>
            <button
                onMouseEnter={() => setIsHoverd(true)}
                onMouseLeave={() => setIsHoverd(false)}
            >
                {isHovered ? <HiOutlineMenuAlt1 className='h-12 w-12' /> : <HiMenu className='h-12 w-12' />}
            </button>

        </div>
    )
}

export default Menu