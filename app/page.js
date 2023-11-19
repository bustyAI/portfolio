import Image from 'next/image'
import { Headshot, Navbar, ProjectCard } from '@/components'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />

      <Headshot />
      <ProjectCard />

    </main>
  )
}
