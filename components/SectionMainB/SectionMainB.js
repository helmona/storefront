
// import cn from 'classnames'

import Link from 'next/link'
import { useRouter } from 'next/router'


const SectionMainB = () => {
  
  return (
    <div className="container mx-auto flex w-full pt-16 pb-16  min-h-section">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 place-items-center h-full mr-5 ml-5 md:mr-0 md:ml-0 pt-3">
        <div className="w-full pt-12 md:pt-20">
          <div className="grid grid-cols-2 gap-5 lg:gap-2  w-full min-h-full">
            <div className="flex h-full">
              <img
                className="object-cover h-64 w-64"
                src="/assets/helmona_vacacion_earings.jpg" 
                alt="Fantastic turquoise earnings easy to wear for any occassion" />
            </div>
            <div className="flex justify-end">
              <img 
                className="object-cover h-64 w-64" 
                src="/assets/helmona_vacacion_earing_pose.jpg" 
                alt="Fantastic turquoise earnings easy to wear for any occassion" />
            </div>
          </div>
        </div>
        
        <div className="h-1/3">
          <h1 className="text-41xl font-bold leading-tight tracking-huge mt-0 mb-2">VACACIÓN<br/>COLLECTION</h1>
          <p className="text-sm mb-6">Showing your personality doesn’t have to be hard, especially when you want to express your holiday mood :) Exploring new places, making new memories, being open to random and spontanious situations - this is the mindset while I'm on vacation. In my new collection I'm trying to collect my memories, vibe of the cities and feeling from places where I spent some time, and “conserve it” into these decorative pieces.</p>

          <div className="flex justify-center">
            <a href="#_" className="relative px-6 py-3 font-bold text-black group">
              <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-graywhite group-hover:translate-x-0 group-hover:translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
              <span className="relative">SHOW NOW</span>
            </a>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionMainB
