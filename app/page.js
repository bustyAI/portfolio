import Image from 'next/image'
import { Headshot, Navbar, ProjectCard } from '@/components'
import Link from 'next/link'

import { Tilt_Neon } from 'next/font/google'

const tilt = Tilt_Neon({
  weight: '400',
  subsets: ['latin']
})

export default function Home() {
  return (
    <main className={`overflow-hidden ${tilt.className}`}>
      <Navbar />

      <div className='flex left-1/2 -translate-x-1/2 w-full my-8 h-96 relative'>
        <Headshot />
      </div>

      <div className='flex flex-row justify-evenly items-center flex-wrap text-2xl'>
        <ProjectCard title={"Vinfo"} desc={"Manage your fleet on our platform!"} link={"https://vinfo-brown.vercel.app/"} linkBtn={"Manage Fleet"} animation={'flicker4'} />
        <ProjectCard title="Renta Ride" desc={"Your go-to destination for hassle-free car rentals"} link={"https://renta-ride.vercel.app/"} linkBtn={'Rent a Ride'} animation={"flicker2"} />
        <ProjectCard title={"Football Predictions"} desc={"Predicting Football match outcomes through Machine Learning"} link={"https://github.com/bustyAI/football-predictions"} linkBtn={"Predict"} animation={"flicker3"} />
        <ProjectCard title={"Digital Library"} desc={"Browse books through our digital Library"} link={'https://github.com/bustyAI/Digital-Library'} linkBtn={'Browse Books'} animation={"flicker"} />
        <ProjectCard title={"BeSafe"} desc={"Protecting the Youth through spreading Awareness"} link={'https://github.com/bustyAI/besafe/tree/main'} linkBtn={"Stay Informed"} animation={"flicker3"} />
        <ProjectCard title={"What Makes a Movie Great?"} desc={"Find out what makes a good movie, a good Movie!"} link={"https://github.com/bustyAI/Movie-Project"} linkBtn={"Come Find Out"} animation={"flicker4"} />

      </div>

    </main>
  )
}
