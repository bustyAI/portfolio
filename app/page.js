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
        <ProjectCard title={"Digital Library"} desc={"Browse books through our digital Library"} link={'https://github.com/bustyAI/Digital-Library'} linkBtn={'Browse Books'} animation={"flicker"} />
        <ProjectCard title="Renta Ride" desc={"Your go-to destination for hassle-free car rentals"} link={"https://renta-ride.vercel.app/"} linkBtn={'Rent a Ride'} animation={"flicker2"} />
        <ProjectCard title={"BeSafe"} desc={"Protecting the Youth through spreading Awareness"} link={'https://github.com/bustyAI/besafe/tree/main'} linkBtn={"Stay Informed"} animation={"flicker3"} />
        <ProjectCard title={"Jewelry Page"} desc={"Explore jewelry crafted by your beloved DIY artisan, Rotting Pumpkin."} link={'https://github.com/bustyAI/rotting-pumpkin'} linkBtn={"Browse Jewelry"} animation={"flicker4"} />
      </div>

    </main>
  )
}
