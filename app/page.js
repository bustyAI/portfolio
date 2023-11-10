import Image from 'next/image'
import { Headshot, Navbar } from '@/components'

export default function Home() {
  return (
    <main className="overflow-hidden">
    <Navbar/>
    <div>
      Look at what I have created (:
    </div>
    <Headshot/>
      
    </main>
  )
}
