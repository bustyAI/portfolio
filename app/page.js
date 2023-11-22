import Image from 'next/image'
import { Headshot, Navbar, ProjectCard } from '@/components'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />

      <Headshot />
      <div className='flex flex-row justify-evenly items-center flex-wrap'>
        <ProjectCard title={"Digital Library"} desc={"Group class project"} link={'#'} animation={"flicker"} />
        <ProjectCard title="Renta Ride" desc={"Rental car service"} link={"https://renta-ride.vercel.app/"} animation={"flicker2"} />
        <ProjectCard title={"BeSafe"} desc={"Hackathon"} link={'#'} animation={"flicker3"} />
        <ProjectCard title={"Jewelry Page"} desc={"Jewelry Site for Client"} link={'#'} animation={"flicker4"} />

      </div>

    </main>
  )
}
