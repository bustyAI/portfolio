"use client"
import React from 'react'
import { useState } from 'react'
import { IconContext } from 'react-icons'
import { HiMenu, HiOutlineMenuAlt1 } from 'react-icons/hi'



const Menu = () => {
    
    const [isHovered, setIsHoverd] = useState(false);
    let [isMenuClicked, setMenuClicked] = useState(false);

    const handelMenuClick = () => {
        setMenuClicked(!isMenuClicked);
    }

    return (
        <div className='flex flex-row relative'>
            <div className=' bg-white'>
                <IconContext.Provider value={{ color: 'black' }}>
                    <button
                        className={` navbar__menu_icon ${isHovered ? 'transform scale-110' : ''}`}
                        onMouseEnter={() => setIsHoverd(true)}
                        onMouseLeave={() => setIsHoverd(false)}
                        onMouseDown={() => handelMenuClick()}
                    >
                        {isHovered ? <HiOutlineMenuAlt1 className='navbar__menu' /> : <HiMenu className='navbar__menu' />}
                    </button>
                </IconContext.Provider>
                <div className={`${isMenuClicked ? '' : 'hidden'}`}>
                    <div className='flex flex-col mt-12'>

                        <button
                            className='navbar__text'>
                            Projects
                        </button>
                        <button
                            className='navbar__text'>
                            Resume
                        </button>
                        <button
                            className='navbar__text'>
                            Github
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Menu

