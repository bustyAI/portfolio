"use client"
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';

import { Tilt_Neon } from 'next/font/google';

const tilt = Tilt_Neon({
    weight: '400',
    subsets: ['latin']
})

const ProjectCard = ({ title, desc, link, animation }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className={`card__container ${tilt.className}`} onMouseOut={() => { setIsHovered(!isHovered) }} onMouseOver={() => { setIsHovered(!isHovered) }}>
            <div className='card'>
                <p className={`card__title ${isHovered ? '' : animation}`}>{title}</p>
                <p className={`card__desc`}>{desc}</p>
                <Link href={`${link}`} className='neon__text_green'>
                    <p className=' card__link'>Click</p>
                </Link>
            </div>
        </div>
    );
}

export default ProjectCard;
