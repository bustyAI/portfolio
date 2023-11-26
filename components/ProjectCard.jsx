"use client"
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { TbPacman } from 'react-icons/tb'

import { Tilt_Neon } from 'next/font/google';

const tilt = Tilt_Neon({
    weight: '400',
    subsets: ['latin']
})

const ProjectCard = ({ title, desc, link, linkBtn, animation }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className={`card__container ${tilt.className}`} onMouseOut={() => { setIsHovered(!isHovered) }} onMouseOver={() => { setIsHovered(!isHovered) }}>
            <div className='card'>
                <p className={`card__title ${isHovered ? '' : animation}`}>{title}</p>
                <p className={`card__desc`}>{desc}</p>
                <Link href={`${link}`} className='neon__text_green'>
                    <p className=' card__link'>{linkBtn}</p>
                </Link>

                <div className='flex light-animation'></div>
                <TbPacman className='pacman_animation' />
                <TbPacman className='pacman_animation3' />
                <TbPacman className=' pacman_animation2' />
            </div>

        </div>

    );
}

export default ProjectCard;
