"use client"
import React from 'react';
import { useState } from 'react';

const ProjectCard = ({ title, desc, link, animation }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className='flex flex-col my-[500px] justify-center items-center'>
            <div className=' relative border border-neon-blue shadow-neon-white-frame w-[250px] h-[300px] opacity-40 hover:opacity-100 rounded-lg'>

                <p className={`neon__text_white text-lg mx-4 text-center ${isHovered ? '' : animation}`}>{title}</p>
                <p className={`neon__text my-4 text-center`}>{desc}</p>
                <p className=' text-center my-4 mx-4'><a className='neon__text_green' href={`${link}`}>Click</a></p>

            </div>
        </div >
    );
}

export default ProjectCard;
